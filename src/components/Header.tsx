import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.95), rgba(20,0,40,0.95))',
            color: '#fff',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '3px solid #ff00ff',
            boxShadow: '0 0 30px rgba(255, 0, 255, 0.3)',
            position: 'relative',
            zIndex: 100
        }}>
            <h1 style={{ 
                margin: 0, 
                color: '#ff00ff',
                fontFamily: 'monospace',
                fontSize: '1.8rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '0 0 15px rgba(255, 0, 255, 0.8)'
            }}>
                🎨 Вікторія Гордій - NFT Аукціон
            </h1>
            <nav>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '2rem',
                    margin: 0,
                    padding: 0
                }}>
                    <li>
                        <Link href="/" style={{ 
                            color: '#00ffff', 
                            textDecoration: 'none', 
                            fontSize: '1.1rem',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: '1px solid #00ffff',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 255, 255, 0.2)';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            🏠 Головна
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" style={{ 
                            color: '#ff00ff', 
                            textDecoration: 'none', 
                            fontSize: '1.1rem',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: '1px solid #ff00ff',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 0, 255, 0.2)';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            🎨 Аукціон
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;