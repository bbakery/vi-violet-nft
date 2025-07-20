import { ethers } from 'ethers';

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            return accounts[0];
        } catch (error) {
            console.error("Error connecting to wallet:", error);
            throw new Error("Wallet connection failed");
        }
    } else {
        throw new Error("No Ethereum wallet found");
    }
};

export const sendPayment = async (recipient: string, amount: string) => {
    if (!window.ethereum) {
        throw new Error("No Ethereum wallet found");
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const tx = {
        to: recipient,
        value: ethers.utils.parseEther(amount),
    };

    try {
        const transactionResponse = await signer.sendTransaction(tx);
        await transactionResponse.wait();
        return transactionResponse;
    } catch (error) {
        console.error("Error sending payment:", error);
        throw new Error("Payment transaction failed");
    }
};