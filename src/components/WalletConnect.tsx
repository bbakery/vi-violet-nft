import React, { useState, useEffect } from 'react';
import { WalletInfo } from '../types';

interface WalletConnectProps {
    onWalletConnect: (walletInfo: WalletInfo) => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onWalletConnect }) => {
    const [isConnecting, setIsConnecting] = useState(false);
    const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);

    const connectWallet = async () => {
        setIsConnecting(true);
        try {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (accounts.length > 0) {
                    const walletInfo: WalletInfo = {
                        address: accounts[0],
                        balance: {},
                        isConnected: true
                    };
                    
                    setWalletInfo(walletInfo);
                    onWalletConnect(walletInfo);
                }
            } else {
                alert('Будь ласка, встановіть MetaMask або інший Web3 гаманець!');
            }
        } catch (error) {
            console.error('Помилка підключення гаманця:', error);
            alert('Помилка підключення гаманця');
        } finally {
            setIsConnecting(false);
        }
    };

    const disconnectWallet = () => {
        setWalletInfo(null);
        onWalletConnect({
            address: '',
            balance: {},
            isConnected: false
        });
    };

    const shortenAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000
        }}>
            {!walletInfo?.isConnected ? (
                <button
                    onClick={connectWallet}
                    disabled={isConnecting}
                    style={{
                        background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                        border: '2px solid #ff00ff',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: isConnecting ? 'not-allowed' : 'pointer',
                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                    onMouseEnter={(e) => {
                        if (!isConnecting) {
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.8)';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isConnecting) {
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.5)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }
                    }}
                >
                    {isConnecting ? 'Підключення...' : '🔗 Підключити гаманець'}
                </button>
            ) : (
                <div style={{
                    background: 'rgba(0, 0, 0, 0.9)',
                    border: '2px solid #00ffff',
                    borderRadius: '15px',
                    padding: '15px',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                    color: '#fff',
                    fontFamily: 'monospace'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '10px'
                    }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#00ff00',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px #00ff00'
                        }}></div>
                        <span style={{ color: '#00ffff' }}>Підключено</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        {shortenAddress(walletInfo.address)}
                    </div>
                    <button
                        onClick={disconnectWallet}
                        style={{
                            background: 'linear-gradient(45deg, #ff0000, #ff6600)',
                            border: '1px solid #ff0000',
                            color: '#fff',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
                        }}
                    >
                        Відключити
                    </button>
                </div>
            )}
        </div>
    );
};

export default WalletConnect; 