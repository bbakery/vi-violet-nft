import React from 'react';

interface AuctionStatsProps {
    totalPaintings: number;
    activeAuctions: number;
    totalBids: number;
    highestBid: number;
}

const AuctionStats: React.FC<AuctionStatsProps> = ({ 
    totalPaintings, 
    activeAuctions, 
    totalBids, 
    highestBid 
}) => {
    return (
        <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #ff00ff',
            borderRadius: '20px',
            padding: '2rem',
            margin: '2rem',
            boxShadow: '0 0 30px rgba(255, 0, 255, 0.3)',
            color: '#fff',
            fontFamily: 'monospace'
        }}>
            <h3 style={{
                textAlign: 'center',
                color: '#ff00ff',
                fontSize: '1.5rem',
                margin: '0 0 1.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '0 0 15px rgba(255, 0, 255, 0.8)'
            }}>
                📊 Статистика галереї
            </h3>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem'
            }}>
                <div style={{
                    background: 'rgba(255, 0, 255, 0.1)',
                    border: '1px solid #ff00ff',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎨</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ff00ff' }}>
                        {totalPaintings}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Всього картин
                    </div>
                </div>

                <div style={{
                    background: 'rgba(0, 255, 255, 0.1)',
                    border: '1px solid #00ffff',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔥</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00ffff' }}>
                        {activeAuctions}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Активних аукціонів
                    </div>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 0, 0.1)',
                    border: '1px solid #ffff00',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💰</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffff00' }}>
                        {totalBids}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Всього ставок
                    </div>
                </div>

                <div style={{
                    background: 'rgba(255, 0, 0, 0.1)',
                    border: '1px solid #ff0000',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👑</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ff0000' }}>
                        {highestBid} ETH
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                        Найвища ставка
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(0, 255, 0, 0.1)',
                border: '1px solid #00ff00',
                borderRadius: '10px'
            }}>
                <div style={{ color: '#00ff00', fontSize: '1rem', fontWeight: 'bold' }}>
                    🎉 Вітаємо! Галерея Вікторії Гордій успішно працює!
                </div>
            </div>
        </div>
    );
};

export default AuctionStats; 