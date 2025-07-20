import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1,
            overflow: 'hidden'
        }}>
            {/* Падаючі квіти */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`,
                        top: '-50px',
                        fontSize: '20px',
                        color: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080'][Math.floor(Math.random() * 4)],
                        animation: `fall ${5 + Math.random() * 10}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: 0.6,
                        textShadow: '0 0 10px currentColor'
                    }}
                >
                    {['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '💐', '🎨'][Math.floor(Math.random() * 8)]}
                </div>
            ))}
            
            {/* Плаваючі частинки */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={`particle-${i}`}
                    style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: '4px',
                        height: '4px',
                        background: ['#ff00ff', '#00ffff', '#ffff00'][Math.floor(Math.random() * 3)],
                        borderRadius: '50%',
                        animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 8}s`,
                        boxShadow: '0 0 10px currentColor'
                    }}
                />
            ))}

            <style>{`
                @keyframes fall {
                    0% {
                        transform: translateY(-50px) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.6;
                    }
                    90% {
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.3;
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px);
                        opacity: 0.8;
                    }
                    50% {
                        transform: translateY(-10px) translateX(-10px);
                        opacity: 0.5;
                    }
                    75% {
                        transform: translateY(-30px) translateX(5px);
                        opacity: 0.9;
                    }
                }
            `}</style>
        </div>
    );
};

export default AnimatedBackground; 