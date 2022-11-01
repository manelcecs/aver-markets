export const getUserMarketAccount = async () => {

    const uma = await UserMarket.getOrCreateUserMarketAccount(
        client,
        ownerKeypair,
        market,
        undefined,
        undefined,
        undefined,
        3 * market.numberOfOutcomes // Optional argument
      )
    return ;
}
 
