import React from 'react';
import NFTMintButton from './NFTMintButton';

interface PaintingCardProps {
    imageUrl: string;
    title: string;
    description: string;
    price?: number;
    artist?: string;
    onMint: () => void;
    paintingId?: string;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ imageUrl, title, description, price, artist, onMint, paintingId = "1" }) => {
    return (
        <div className="painting-card" style={{
            background: '#fff',
            borderRadius: '10px',
            padding: '1rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
        }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
        }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
        }}>
            <img 
                src={imageUrl} 
                alt={title} 
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                }}
            />
            <h3 style={{ 
                color: '#8b0000', 
                margin: '0 0 0.5rem 0',
                fontSize: '1.5rem'
            }}>
                {title}
            </h3>
            <p style={{ 
                color: '#666', 
                margin: '0 0 0.5rem 0',
                lineHeight: '1.5'
            }}>
                {description}
            </p>
            {artist && (
                <p style={{ 
                    color: '#8b0000', 
                    margin: '0 0 0.5rem 0',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                }}>
                    Художник: {artist}
                </p>
            )}
            {price && (
                <p style={{ 
                    color: '#333', 
                    margin: '0 0 1rem 0',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                }}>
                    Ціна: {price} ETH
                </p>
            )}
            <NFTMintButton 
                paintingId={paintingId}
                onMintSuccess={onMint}
            />
        </div>
    );
};

export default PaintingCard;