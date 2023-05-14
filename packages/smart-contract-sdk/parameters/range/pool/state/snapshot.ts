interface SnapshotParams {
    /**
     * The owner address of the LP position.
    */
    owner: string;

    /**
     * The lower tick of the LP position range.
     * Refer to math/tickMath.ts for price to tick conversion.
     */
    lower: number

    /**
     * The upper tick of the LP position range.
     * Refer to math/tickMath.ts for price to tick conversion.
     */
    upper: number
}