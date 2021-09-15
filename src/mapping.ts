import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Deposit,
  DepositForRelayer,
  Harvest,
  HarvestForRealyer,
  Lock,
  Withdraw
} from "../generated/Contract/Contract"
import { DepositEntity, WithdrawEntity, LockEntity, DepositForRelayerEntity, HarvestEntity, HarvestForRealyerEntity } from "../generated/schema"

export function handleDeposit(event: Deposit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = DepositEntity.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new DepositEntity(event.transaction.hash.toHex())
  }

  // BigInt and BigDecimal math are supported
  entity.user = event.params.user
  entity.assetFrom = event.params.assetFrom
  entity.assetTo = event.params.assetTo
  entity.amount = event.params.amount
  entity.reward = event.params.reward
  entity.nonce = event.params.nonce
  entity.deadline = event.params.deadline
  entity.chainIDFrom = event.params.chainIDFrom
  entity.chainIDTo = event.params.chainIDTo
  entity.height = event.block.number

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.HARVEST_TYPEHASH(...)
  // - contract.chainID(...)
  // - contract.getDepositInfoCurrent(...)
  // - contract.getDomainSeparator(...)
  // - contract.getHarvestInfoCurrent(...)
  // - contract.isAssetInWhiteList(...)
  // - contract.isRelayerInWhiteList(...)
  // - contract.name(...)
  // - contract.nonces(...)
  // - contract.owner(...)
  // - contract.period(...)
  // - contract.periodDouble(...)
}

export function handleDepositForRelayer(event: DepositForRelayer): void {  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = DepositForRelayerEntity.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new DepositForRelayerEntity(event.transaction.hash.toHex())
  }

  // BigInt and BigDecimal math are supported
  entity.user = event.params.user
  entity.assetFrom = event.params.assetFrom
  entity.assetTo = event.params.assetTo
  entity.amount = event.params.amount
  entity.deadline = event.params.deadline
  entity.chainIDFrom = event.params.chainIDFrom
  entity.chainIDTo = event.params.chainIDTo
  entity.height = event.block.number

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleHarvest(event: Harvest): void {  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = HarvestEntity.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new HarvestEntity(event.transaction.hash.toHex())
  }

  // BigInt and BigDecimal math are supported
  entity.user = event.params.user
  entity.assetFrom = event.params.assetFrom
  entity.assetTo = event.params.assetTo
  entity.chainIDFrom = event.params.chainIDFrom
  entity.chainIDTo = event.params.chainIDTo
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.height = event.block.number

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleHarvestForRealyer(event: HarvestForRealyer): void {  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = HarvestForRealyerEntity.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new HarvestForRealyerEntity(event.transaction.hash.toHex())
  }

  // BigInt and BigDecimal math are supported
  entity.user = event.params.user
  entity.assetFrom = event.params.assetFrom
  entity.assetTo = event.params.assetTo
  entity.amount = event.params.amount
  entity.reward = event.params.reward
  entity.chainIDFrom = event.params.chainIDFrom
  entity.chainIDTo = event.params.chainIDTo
  entity.height = event.block.number

  // Entities can be written to the store with `.save()`
  entity.save()}

export function handleLock(event: Lock): void {  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = LockEntity.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new LockEntity(event.transaction.hash.toHex())
  }

  // BigInt and BigDecimal math are supported
  entity.user = event.params.user
  entity.assetFrom = event.params.assetFrom
  entity.assetTo = event.params.assetTo
  entity.amount = event.params.amount
  entity.nonce = event.params.nonce
  entity.relayer = event.params.relayer
  entity.deadline = event.params.deadline
  entity.chainIDFrom = event.params.chainIDFrom
  entity.chainIDTo = event.params.chainIDTo
  entity.height = event.block.number

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleWithdraw(event: Withdraw): void {
  let entity = WithdrawEntity.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new WithdrawEntity(event.transaction.hash.toHex())
  }

  // BigInt and BigDecimal math are supported
  entity.user = event.params.user
  entity.assetFrom = event.params.assetFrom
  entity.assetTo = event.params.assetTo
  entity.amount = event.params.amount
  entity.reward = event.params.reward
  entity.nonce = event.params.nonce
  entity.chainIDFrom = event.params.chainIDFrom
  entity.chainIDTo = event.params.chainIDTo
  entity.height = event.block.number

  // Entities can be written to the store with `.save()`
  entity.save()

}
