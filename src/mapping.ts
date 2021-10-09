import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Deposit,
  DepositForRelayer,
  Harvest,
  HarvestForRelayer,
  Lock,
  OwnershipTransferred,
  SeAssetWhiteList,
  SetRelayerWhiteList,
  Withdraw,
  WithdrawForRelayer
} from "../generated/Contract/Contract"
import { DepositEntity, WithdrawEntity, LockEntity, DepositForRelayerEntity, HarvestEntity, HarvestForRelayerEntity } from "../generated/schema"

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
  entity.relayer = event.params.relayer
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

export function handleHarvestForRelayer(event: HarvestForRelayer): void {  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = HarvestForRelayerEntity.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new HarvestForRelayerEntity(event.transaction.hash.toHex())
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