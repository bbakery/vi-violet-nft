import { ethers } from 'ethers';

class NFTContract {
    private contract: ethers.Contract;

    constructor(contractAddress: string, abi: any) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        this.contract = new ethers.Contract(contractAddress, abi, provider.getSigner());
    }

    async mintNFT(tokenURI: string): Promise<void> {
        try {
            const transaction = await this.contract.mint(tokenURI);
            await transaction.wait();
            console.log('NFT minted successfully');
        } catch (error) {
            console.error('Error minting NFT:', error);
        }
    }

    async getNFTData(tokenId: number): Promise<any> {
        try {
            const data = await this.contract.getNFTData(tokenId);
            return data;
        } catch (error) {
            console.error('Error fetching NFT data:', error);
            throw error;
        }
    }
}

export default NFTContract;