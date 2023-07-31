import { z } from 'zod';
import { ZodError } from 'zod';
import { ethers } from 'ethers';
export const Int24Schema = z.custom<ethers.BigNumberish>(input => {
  try {
    // Convert input to BigNumber
    let bn = ethers.BigNumber.from(input);
    let value = bn.toNumber();
    let maxValInEitherDirection = Math.pow(2, 12) - 1;
    if (
      value >= -1 * maxValInEitherDirection &&
      value <= maxValInEitherDirection
    ) {
      return bn;
    } else {
      return new ZodError([
        {
          path: ['./src/schemas/index.ts'] as string[],
          fatal: true,
          code: 'custom',
          message: 'Value out of Int24 range',
        },
      ]);
    }
  } catch (e) {
    return new ZodError([
      {
        path: [] as string[],
        fatal: true,
        code: 'custom',
        message: 'Invalid input',
      },
    ]);
  }
});
export type Int24 = z.infer<typeof Int24Schema>;
