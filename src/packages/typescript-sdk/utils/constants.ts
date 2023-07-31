import JSBD from 'jsbd';
import JSBI from 'jsbi';

// constants used internally but not expected to be used externally
export const NEGATIVE_ONE = JSBI.BigInt(-1);
export const ZERO = JSBI.BigInt(0);
export const ONE = JSBI.BigInt(1);
export const MaxUint128 = JSBI.subtract(
  JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(128)),
  JSBI.BigInt(1),
);
export const MaxUint256 = JSBI.subtract(
  JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(256)),
  JSBI.BigInt(1),
);

// address values
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984';
export const MSG_SENDER = '0x0000000000000000000000000000000000000001';
export const SWAP_ROUTER_ADDRESS = '0x0000000000000000000000000000000000000002';
export const POOL_INIT_CODE_HASH =
  '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54';

// chain ids
export const DEFAULT_CHAIN_ID = 1;

// used in tick to price math
export const Q32 = JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(32));

// used in liquidity amount math
export const Q96_BI = JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(96));
export const Q96_BD = JSBD.pow(JSBD.BigDecimal(2), 96);
export const Q192 = JSBI.exponentiate(Q96_BI, JSBI.BigInt(2));

export type BigintIsh = JSBI | string | number;

export enum Rounding {
  DOWN,
  HALF_UP,
  UP,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export const MAX_FEE = JSBI.BigInt(1_000_000);
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

export enum ProtocolType {
  COVER,
  LIMIT,
  RANGE,
  MIXED,
  NONE,
}

export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200,
};
