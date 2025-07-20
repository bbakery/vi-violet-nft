import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.95), rgba(20,0,40,0.95))',
            borderTop: '3px solid #ff00ff',
            padding: '3rem 2rem 2rem 2rem',
            marginTop: '4rem',
            color: '#fff',
            fontFamily: 'monospace',
            position: 'relative'
        }}>
            {/* Неонові ефекти */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #ff00ff, transparent)',
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.8)'
            }}></div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Про художницю */}
                <div>
                    <h3 style={{
                        color: '#ff00ff',
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textShadow: '0 0 10px rgba(255, 0, 255, 0.8)'
                    }}>
                        🎨 Про Вікторію Гордій
                    </h3>
                    <p style={{
                        color: '#ccc',
                        lineHeight: '1.6',
                        fontSize: '0.95rem'
                    }}>
                        Талановита українська художниця, чиї роботи поєднують класичну техніку 
                        з сучасним готичним стилем. Кожна картина - це унікальна історія, 
                        написана кольорами та емоціями.
                    </p>
                </div>

                {/* Контакти */}
                <div>
                    <h3 style={{
                        color: '#00ffff',
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                    }}>
                        📞 Контакти
                    </h3>
                    <div style={{ color: '#ccc', lineHeight: '2' }}>
                        <div>📱 Telegram: @victoria_art</div>
                        <div>🌍 Україна, Київ</div>
                        <div>⏰ Пн-Пт: 10:00 - 18:00</div>
                    </div>
                </div>

                {/* Соціальні мережі */}
                <div>
                    <h3 style={{
                        color: '#ffff00',
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textShadow: '0 0 10px rgba(255, 255, 0, 0.8)'
                    }}>
                        🌐 Соціальні мережі
                    </h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a 
                            href="https://www.instagram.com/victoriahordii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#ff00ff',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                padding: '10px',
                                border: '1px solid #ff00ff',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                display: 'inline-block'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.5)';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            📸
                        </a>
                        <a 
                            href="https://www.instagram.com/vi.violet.art/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#00ffff',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                padding: '10px',
                                border: '1px solid #00ffff',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                display: 'inline-block'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            🎨
                        </a>
                        <a 
                            href="#"
                            style={{
                                color: '#ffff00',
                                textDecoration: 'none',
                                fontSize: '1.5rem',
                                padding: '10px',
                                border: '1px solid #ffff00',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                display: 'inline-block'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.5)';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            💎
                        </a>
                    </div>
                </div>
            </div>

            {/* Нижня частина футера */}
            <div style={{
                textAlign: 'center',
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 0, 255, 0.3)',
                color: '#888',
                fontSize: '0.9rem'
            }}>
                <div style={{ marginBottom: '0.5rem' }}>
                    © 2024 Вікторія Гордій - NFT Галерея. Всі права захищені.
                </div>
                <div style={{ fontSize: '0.8rem' }}>
                    🚀 Створено з любов'ю до мистецтва та технологій
                </div>
            </div>
        </footer>
    );
};

export default Footer; 