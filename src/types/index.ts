export interface Painting {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    artist: string;
    auction: Auction;
}

export interface Auction {
    id: string;
    paintingId: string;
    startPrice: number;
    currentPrice: number;
    minIncrement: number;
    endTime: Date;
    bids: Bid[];
    status: 'active' | 'ended' | 'pending';
    acceptedTokens: TokenInfo[];
}

export interface Bid {
    id: string;
    auctionId: string;
    bidder: string;
    amount: number;
    tokenAddress: string;
    tokenSymbol: string;
    timestamp: Date;
}

export interface TokenInfo {
    address: string;
    symbol: string;
    name: string;
    decimals: number;
    logo?: string;
}

export interface NFTMetadata {
    name: string;
    description: string;
    image: string;
    attributes?: Array<{ trait_type: string; value: string }>;
}

export interface WalletInfo {
    address: string;
    balance: { [tokenAddress: string]: number };
    isConnected: boolean;
}

// Ethereum types
declare global {
    interface Window {
        ethereum?: {
            request: (args: { method: string; params?: any[] }) => Promise<any>;
            on: (event: string, callback: (params: any) => void) => void;
            removeListener: (event: string, callback: (params: any) => void) => void;
        };
    }
}