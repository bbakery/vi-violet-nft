import { ethers } from "ethers";

export class NFTContract {
    contract: ethers.Contract | null;

    constructor(contractAddress: string, abi: any) {
        let provider;
        if (typeof window !== "undefined" && (window as any).ethereum) {
            provider = new ethers.providers.Web3Provider((window as any).ethereum);
            this.contract = new ethers.Contract(contractAddress, abi, provider.getSigner());
        } else {
            // Не створюємо контракт на сервері/SSR
            this.contract = null;
        }
    }

    // Приклад безпечного виклику contract
    async callSomeMethod(...args: any[]) {
        if (!this.contract) throw new Error("Контракт недоступний на сервері");
        // return await this.contract.someMethod(...args);
    }
}