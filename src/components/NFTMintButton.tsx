import React from 'react';
import NFTContract from '../contracts/NFTContract';

interface NFTMintButtonProps {
    paintingId: string;
    onMintSuccess: () => void;
}

const NFTMintButton: React.FC<NFTMintButtonProps> = ({ paintingId, onMintSuccess }) => {
    const handleMint = async () => {
        try {
            // Для демонстрації просто показуємо повідомлення
            console.log(`Minting NFT for painting ${paintingId}`);
            alert(`NFT для картини "${paintingId}" успішно створено!`);
            onMintSuccess();
        } catch (error) {
            console.error("Minting failed:", error);
        }
    };

    return (
        <button 
            onClick={handleMint}
            style={{
                background: '#8b0000',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
                width: '100%',
                transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = '#a00000';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = '#8b0000';
            }}
        >
            Mint as NFT
        </button>
    );
};

export default NFTMintButton;