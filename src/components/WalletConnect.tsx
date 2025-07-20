import React, { useState, useEffect } from 'react';
import { WalletInfo } from '../types';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

interface WalletConnectProps {
    onWalletConnect: (walletInfo: WalletInfo) => void;
}

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
                1: 'https://mainnet.infura.io/v3/1c3e1e7e2e2e4e2e8e2e1e7e2e2e4e2e',
            },
        },
    },
};

const web3Modal = typeof window !== 'undefined' && new Web3Modal({
    cacheProvider: true,
    providerOptions,
});

// Додаємо визначення мобільного браузера
function isMobile() {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isInWalletBrowser() {
    if (typeof window === 'undefined') return false;
    // MetaMask Mobile
    if ((window as any).ethereum && (window as any).ethereum.isMetaMask) return true;
    // Trust Wallet
    if ((window as any).ethereum && (window as any).ethereum.isTrust) return true;
    // Rainbow, Coinbase, інші — можна додати за потреби
    return false;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onWalletConnect }) => {
    const [isConnecting, setIsConnecting] = useState(false);
    const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
    const [provider, setProvider] = useState<any>(null);
    const [showMobileHint, setShowMobileHint] = useState(false);

    useEffect(() => {
        if (isMobile() && !isInWalletBrowser()) {
            setShowMobileHint(true);
        } else {
            setShowMobileHint(false);
        }
    }, []);

    const connectWallet = async () => {
        setIsConnecting(true);
        try {
            let instance;
            if (web3Modal) {
                instance = await web3Modal.connect();
                setProvider(instance);
                const ethersProvider = new ethers.providers.Web3Provider(instance);
                const accounts = await ethersProvider.listAccounts();
                if (accounts.length > 0) {
                    const walletInfo: WalletInfo = {
                        address: accounts[0],
                        balance: {},
                        isConnected: true
                    };
                    setWalletInfo(walletInfo);
                    onWalletConnect(walletInfo);
                }
            } else if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
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
                alert('Будь ласка, встановіть MetaMask, Trust Wallet або інший Web3 гаманець!');
            }
        } catch (error) {
            console.error('Помилка підключення гаманця:', error);
            alert('Помилка підключення гаманця');
        } finally {
            setIsConnecting(false);
        }
    };

    const disconnectWallet = async () => {
        setWalletInfo(null);
        onWalletConnect({
            address: '',
            balance: {},
            isConnected: false
        });
        if (web3Modal && web3Modal.clearCachedProvider) {
            await web3Modal.clearCachedProvider();
        }
        if (provider && provider.disconnect && typeof provider.disconnect === 'function') {
            await provider.disconnect();
        }
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
            {showMobileHint && !walletInfo?.isConnected && (
                <div style={{
                    background: 'rgba(255,0,0,0.9)',
                    color: '#fff',
                    padding: '12px 18px',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    boxShadow: '0 0 10px #ff00ff',
                    maxWidth: '320px'
                }}>
                    <b>Підключення гаманця з мобільного:</b><br/>
                    Відкрийте сайт у вбудованому браузері MetaMask або Trust Wallet.<br/>
                    <span style={{color:'#ff0'}}>Або скористайтесь WalletConnect у додатку.</span>
                </div>
            )}
            {!walletInfo?.isConnected ? (
                <button
                    onClick={connectWallet}
                    disabled={isConnecting || showMobileHint}
                    style={{
                        background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
                        border: '2px solid #ff00ff',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: isConnecting || showMobileHint ? 'not-allowed' : 'pointer',
                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        opacity: showMobileHint ? 0.5 : 1
                    }}
                    title={showMobileHint ? 'Відкрийте сайт у вбудованому браузері гаманця або скористайтесь WalletConnect' : ''}
                    onMouseEnter={(e) => {
                        if (!isConnecting && !showMobileHint) {
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.8)';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isConnecting && !showMobileHint) {
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