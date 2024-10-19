import axios from 'axios';

// Requirement #1
// Naive function to get SOL price in USDC
// Helper functions to convert between lamports and SOL/USDC

export async function getSOLPriceInUSDC() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const solPriceInUSD = response.data.solana.usd;

        // Assuming 1 USDC = 1 USD
        // This is a naive assumption because the price of USDC is not fixed to 1 USC,
        // but for the purposes of this excercise I think this is sufficient.
        return solPriceInUSD;
    } catch (error) {
        console.error('Error fetching SOL price in USDC:', error);
        return null;
    }
}

export function convertLamportsToSOL(lamports: number): number {
    return lamports / 1000000000;
}

export function convertLamportsToUSDC(lamports: number, solPriceInUSDC: number): number {
    return convertLamportsToSOL(lamports) * solPriceInUSDC;
}
