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
            {/* Видалено навігаційні кнопки */}
        </header>
    );
};

export default Header;