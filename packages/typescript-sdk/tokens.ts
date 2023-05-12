export abstract class Token {
  
    /**
     * Cannot be constructed.
     */
    private constructor() {}
  
    public static sortAddresses(tokenIn: string, tokenOut: string): [string, string] {
      if (tokenIn.localeCompare(tokenOut) < 0) {
        return [tokenIn, tokenOut]
      }
      return [tokenOut, tokenIn]
    }

    public static zeroForOne(tokenIn: string, tokenOut: string): boolean {
        if (tokenIn.localeCompare(tokenOut) < 0) {
          return true
        }
        return false
    }
  }