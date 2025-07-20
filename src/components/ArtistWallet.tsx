import React from 'react';

const ArtistWallet: React.FC = () => {
    const artistWallet = "0x06aA4a7e268405c3F750A86D80f50AE330A60b55"; // Гаманець Вікторії Гордій

    const copyToClipboard = () => {
        navigator.clipboard.writeText(artistWallet);
        alert('Гаманець скопійовано! 💰');
    };

    return (
        <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #00ff00',
            borderRadius: '20px',
            padding: '2rem',
            margin: '2rem',
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.3)',
            color: '#fff',
            fontFamily: 'monospace',
            textAlign: 'center'
        }}>
            <h3 style={{
                color: '#00ff00',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '0 0 15px rgba(0, 255, 0, 0.8)'
            }}>
                💰 Гаманець художниці
            </h3>
            
            <p style={{
                color: '#ccc',
                fontSize: '1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
            }}>
                Кошти за продані картини надсилаються безпосередньо на гаманець Вікторії Гордій
            </p>

            <div style={{
                background: 'rgba(0, 255, 0, 0.1)',
                border: '1px solid #00ff00',
                borderRadius: '15px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                wordBreak: 'break-all'
            }}>
                <div style={{ color: '#00ff00', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Адреса гаманця:
                </div>
                <div style={{ 
                    color: '#fff', 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    letterSpacing: '1px'
                }}>
                    {artistWallet}
                </div>
            </div>

            <button
                onClick={copyToClipboard}
                style={{
                    background: 'linear-gradient(45deg, #00ff00, #00cc00)',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 30px',
                    color: '#000',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                📋 Скопіювати адресу
            </button>

            <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(255, 255, 0, 0.1)',
                border: '1px solid #ffff00',
                borderRadius: '10px'
            }}>
                <div style={{ color: '#ffff00', fontSize: '0.9rem' }}>
                    ⚡ Миттєві платежі | 🔒 Безпечні транзакції | 💎 Прямий переказ художниці
                </div>
            </div>
        </div>
    );
};

export default ArtistWallet; 