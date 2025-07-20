import React, { useState, useEffect } from 'react';
import { Painting, Auction, TokenInfo, WalletInfo } from '../types';

interface AuctionCardProps {
    painting: Painting;
    walletInfo: WalletInfo;
    onBid: (auctionId: string, amount: number, tokenAddress: string) => void;
}

const AuctionCard: React.FC<AuctionCardProps> = ({ painting, walletInfo, onBid }) => {
    const [bidAmount, setBidAmount] = useState('');
    const [selectedToken, setSelectedToken] = useState<TokenInfo | null>(null);
    const [showBidForm, setShowBidForm] = useState(false);

    const auction = painting.auction;
    
    // Визначаємо переможця аукціону
    const highestBid = painting.auction.bids.reduce((max, bid) => bid.amount > max.amount ? bid : max, painting.auction.bids[0]);
    const isWinner = walletInfo.address && highestBid && highestBid.bidder.toLowerCase() === walletInfo.address.toLowerCase();
    
    // Додаємо стан для локального завершення аукціону
    const [auctionEnded, setAuctionEnded] = useState(false);
    const [endTime, setEndTime] = useState(new Date(auction.endTime));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            if (now >= endTime) {
                if (auction.bids.length === 0) {
                    // Якщо ставок немає — перезапускаємо аукціон ще на 3 дні
                    const newEnd = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
                    setEndTime(newEnd);
                } else {
                    setAuctionEnded(true);
                }
            }
        }, 1000 * 60); // перевірка раз на хвилину
        return () => clearInterval(interval);
    }, [endTime, auction.bids.length]);

    // Популярні токени для демонстрації
    const popularTokens: TokenInfo[] = [
        { address: '0x0000000000000000000000000000000000000000', symbol: 'ETH', name: 'Ethereum', decimals: 18 },
        { address: '0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8', symbol: 'USDT', name: 'Tether USD', decimals: 6 },
        { address: '0xB0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8', symbol: 'USDC', name: 'USD Coin', decimals: 6 },
        { address: '0xC0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8', symbol: 'BNB', name: 'Binance Coin', decimals: 18 }
    ];

    const handleBid = () => {
        if (!selectedToken || !bidAmount || !walletInfo.isConnected) return;
        
        const amount = parseFloat(bidAmount);
        if (amount <= auction.currentPrice) {
            alert('Ставка повинна бути вищою за поточну ціну!');
            return;
        }

        onBid(auction.id, amount, selectedToken.address);
        setBidAmount('');
        setShowBidForm(false);
    };

    // Оновлюємо функцію formatTimeLeft для використання локального endTime
    const formatTimeLeft = () => {
        const now = new Date();
        const diff = endTime.getTime() - now.getTime();
        if (diff <= 0) return 'Аукціон завершено';
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${days}д ${hours}г ${minutes}хв`;
    };

    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,20,0.95))',
            border: '2px solid #ff00ff',
            borderRadius: '20px',
            padding: '20px',
            margin: '20px',
            boxShadow: '0 0 30px rgba(255, 0, 255, 0.3)',
            color: '#fff',
            fontFamily: 'monospace',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Неонові ефекти */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,0,255,0.1) 0%, transparent 70%)',
                animation: 'pulse 3s infinite'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <img 
                    src={painting.imageUrl} 
                    alt={painting.title}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '15px',
                        border: '2px solid #00ffff',
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                    }}
                />

                <h3 style={{
                    color: '#ff00ff',
                    fontSize: '1.5rem',
                    margin: '15px 0 10px 0',
                    textShadow: '0 0 10px rgba(255, 0, 255, 0.8)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>
                    {painting.title}
                </h3>

                <p style={{
                    color: '#ccc',
                    margin: '0 0 15px 0',
                    lineHeight: '1.5'
                }}>
                    {painting.description}
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    margin: '15px 0'
                }}>
                    <div style={{
                        background: 'rgba(0, 255, 255, 0.1)',
                        border: '1px solid #00ffff',
                        borderRadius: '10px',
                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        <div style={{ color: '#00ffff', fontSize: '0.9rem' }}>Поточна ціна</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                            {auction.currentPrice} {auction.acceptedTokens[0]?.symbol || 'ETH'}
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255, 0, 255, 0.1)',
                        border: '1px solid #ff00ff',
                        borderRadius: '10px',
                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        <div style={{ color: '#ff00ff', fontSize: '0.9rem' }}>Час залишився</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                            {formatTimeLeft()}
                        </div>
                    </div>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 0, 0.1)',
                    border: '1px solid #ffff00',
                    borderRadius: '10px',
                    padding: '10px',
                    margin: '15px 0'
                }}>
                    <div style={{ color: '#ffff00', fontSize: '0.9rem', marginBottom: '5px' }}>
                        Ставок: {auction.bids.length}
                    </div>
                    {auction.bids.length > 0 && (
                        <div style={{ fontSize: '0.8rem', color: '#ccc' }}>
                            Остання ставка: {auction.bids[auction.bids.length - 1].amount} {auction.bids[auction.bids.length - 1].tokenSymbol}
                        </div>
                    )}
                    {auctionEnded && auction.bids.length > 0 && (
                        <div style={{ color: '#00ff00', fontWeight: 'bold', marginTop: '10px' }}>
                            🏆 Переможець: {highestBid.bidder}
                        </div>
                    )}
                </div>

                {walletInfo.isConnected ? (
                    <button
                        onClick={() => setShowBidForm(!showBidForm)}
                        style={{
                            background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                            border: 'none',
                            color: '#fff',
                            padding: '12px 24px',
                            borderRadius: '25px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            width: '100%'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.8)';
                            e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.5)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        💰 Зробити ставку
                    </button>
                ) : (
                    <div style={{
                        background: 'rgba(255, 0, 0, 0.1)',
                        border: '1px solid #ff0000',
                        borderRadius: '10px',
                        padding: '15px',
                        textAlign: 'center',
                        color: '#ff0000'
                    }}>
                        🔒 Підключіть гаманець для участі в аукціоні
                    </div>
                )}

                {showBidForm && walletInfo.isConnected && (
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.8)',
                        border: '2px solid #00ffff',
                        borderRadius: '15px',
                        padding: '20px',
                        marginTop: '15px'
                    }}>
                        <h4 style={{ color: '#00ffff', margin: '0 0 15px 0' }}>Зробити ставку</h4>
                        
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>
                                Виберіть токен:
                            </label>
                            <select
                                value={selectedToken?.address || ''}
                                onChange={(e) => {
                                    const token = popularTokens.find(t => t.address === e.target.value);
                                    setSelectedToken(token || null);
                                }}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    background: 'rgba(0, 0, 0, 0.8)',
                                    border: '1px solid #00ffff',
                                    borderRadius: '5px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="">Виберіть токен</option>
                                {popularTokens.map(token => (
                                    <option key={token.address} value={token.address}>
                                        {token.symbol} - {token.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>
                                Сума ставки (мін. {auction.currentPrice + auction.minIncrement}):
                            </label>
                            <input
                                type="number"
                                value={bidAmount}
                                onChange={(e) => setBidAmount(e.target.value)}
                                min={auction.currentPrice + auction.minIncrement}
                                step="0.01"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    background: 'rgba(0, 0, 0, 0.8)',
                                    border: '1px solid #00ffff',
                                    borderRadius: '5px',
                                    color: '#fff',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <button
                            onClick={handleBid}
                            disabled={!selectedToken || !bidAmount || parseFloat(bidAmount) <= auction.currentPrice}
                            style={{
                                background: 'linear-gradient(45deg, #00ff00, #00ffff)',
                                border: 'none',
                                color: '#000',
                                padding: '12px 24px',
                                borderRadius: '25px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                width: '100%',
                                opacity: (!selectedToken || !bidAmount || parseFloat(bidAmount) <= auction.currentPrice) ? 0.5 : 1
                            }}
                        >
                            🚀 Підтвердити ставку
                        </button>
                    </div>
                )}
                {isWinner && (
                    <a
                        href={painting.imageUrl}
                        download
                        style={{
                            display: 'inline-block',
                            marginTop: '1rem',
                            padding: '10px 24px',
                            background: 'linear-gradient(90deg, #00ffcc, #ff00cc)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            fontSize: '1rem',
                            textDecoration: 'none',
                            boxShadow: '0 0 15px rgba(0,255,255,0.3)',
                            transition: 'all 0.3s',
                            cursor: 'pointer'
                        }}
                    >
                        ⬇️ Завантажити картину
                    </a>
                )}
            </div>

            <style>{`
                @keyframes pulse {
                    0% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                    100% { opacity: 0.3; }
                }
            `}</style>
        </div>
    );
};

export default AuctionCard; 