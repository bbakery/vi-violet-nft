import React, { useEffect, useState } from 'react';
import AuctionCard from './AuctionCard';
import WalletConnect from './WalletConnect';
import AnimatedBackground from './AnimatedBackground';
import AuctionStats from './AuctionStats';
import ArtistWallet from './ArtistWallet';
import { Painting, WalletInfo } from '../types';

const Gallery: React.FC = () => {
    const [paintings, setPaintings] = useState<Painting[]>([]);
    const [walletInfo, setWalletInfo] = useState<WalletInfo>({
        address: '',
        balance: {},
        isConnected: false
    });

    useEffect(() => {
        // Розширена колекція картин Вікторії Гордій з обох Instagram акаунтів
        const mockPaintings: Painting[] = [
            {
                id: "1",
                title: "Портрет 'Ніжність весни'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/painting1.png",
                description: "Ніжний портрет дівчини з весняними квітами, що передає чистоту та невинність душі. Робота з першого Instagram акаунту @victoriahordii",
                auction: {
                    id: "auction1",
                    paintingId: "1",
                    startPrice: 0.8,
                    currentPrice: 1.2,
                    minIncrement: 0.1,
                    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 днів
                    bids: [
                        { id: "bid1", auctionId: "auction1", bidder: "0x123...", amount: 1.2, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDT", name: "Tether USD", decimals: 6 }
                    ]
                }
            },
            {
                id: "2",
                title: "Абстракція 'Темна душа'",
                artist: "Вікторія Гордій", 
                imageUrl: "/images/painting2.png",
                description: "Глибока абстрактна композиція з темними тонами, що розкриває таємниці внутрішнього світу. Експресіоністичний стиль",
                auction: {
                    id: "auction2",
                    paintingId: "2",
                    startPrice: 1.0,
                    currentPrice: 1.8,
                    minIncrement: 0.15,
                    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 днів
                    bids: [
                        { id: "bid2", auctionId: "auction2", bidder: "0x456...", amount: 1.8, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xB0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDC", name: "USD Coin", decimals: 6 }
                    ]
                }
            },
            {
                id: "3",
                title: "Пейзаж 'Місячна ніч'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/painting3.png",
                description: "Загадковий пейзаж місячної ночі з містичним освітленням та готичною атмосферою. Романтичний стиль",
                auction: {
                    id: "auction3",
                    paintingId: "3",
                    startPrice: 0.6,
                    currentPrice: 0.9,
                    minIncrement: 0.05,
                    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 дні
                    bids: [
                        { id: "bid3", auctionId: "auction3", bidder: "0x789...", amount: 0.9, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xC0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "BNB", name: "Binance Coin", decimals: 18 }
                    ]
                }
            },
            {
                id: "4",
                title: "Натюрморт 'Готичні квіти'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/painting4.png",
                description: "Елегантний натюрморт з темними квітами в готичному стилі, що передає меланхолію та красу. Класична техніка",
                auction: {
                    id: "auction4",
                    paintingId: "4",
                    startPrice: 0.7,
                    currentPrice: 1.1,
                    minIncrement: 0.08,
                    endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 днів
                    bids: [
                        { id: "bid4", auctionId: "auction4", bidder: "0xabc...", amount: 1.1, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDT", name: "Tether USD", decimals: 6 }
                    ]
                }
            },
            {
                id: "5",
                title: "Портрет 'Таємничий погляд'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/painting5.png",
                description: "Загадковий портрет з глибоким поглядом, що приховує таємниці душі та внутрішній світ. Психологічний портрет",
                auction: {
                    id: "auction5",
                    paintingId: "5",
                    startPrice: 1.2,
                    currentPrice: 2.0,
                    minIncrement: 0.2,
                    endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 дні
                    bids: [
                        { id: "bid5", auctionId: "auction5", bidder: "0xdef...", amount: 2.0, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xB0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDC", name: "USD Coin", decimals: 6 }
                    ]
                }
            },
            // Нові картини з другого Instagram акаунту @vi.violet.art
            {
                id: "6",
                title: "Портрет 'Задумливість'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052100.png",
                description: "Ніжний портрет дівчини в задумливому стані. Передає глибину емоцій та внутрішній світ моделі. Виконаний з особливою чутливістю до деталей",
                auction: {
                    id: "auction6",
                    paintingId: "6",
                    startPrice: 1.5,
                    currentPrice: 2.3,
                    minIncrement: 0.2,
                    endTime: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 днів
                    bids: [
                        { id: "bid6", auctionId: "auction6", bidder: "0x111...", amount: 2.3, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDT", name: "Tether USD", decimals: 6 }
                    ]
                }
            },
            {
                id: "7",
                title: "Портрет 'Таємничий погляд'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052110.png",
                description: "Загадковий портрет з глибоким, проникаючим поглядом. Передає таємниці душі та внутрішній світ. Виконаний з майстерністю психологічного портрету",
                auction: {
                    id: "auction7",
                    paintingId: "7",
                    startPrice: 0.9,
                    currentPrice: 1.4,
                    minIncrement: 0.1,
                    endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 днів
                    bids: [
                        { id: "bid7", auctionId: "auction7", bidder: "0x222...", amount: 1.4, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xB0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDC", name: "USD Coin", decimals: 6 }
                    ]
                }
            },
            {
                id: "8",
                title: "Портрет 'Весняна ніжність'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052129.png",
                description: "Ніжний весняний портрет з елементами квітів та світла. Передає чистоту, невинність та красу молодості. Виконаний в романтичному стилі",
                auction: {
                    id: "auction8",
                    paintingId: "8",
                    startPrice: 1.8,
                    currentPrice: 2.8,
                    minIncrement: 0.25,
                    endTime: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000), // 9 днів
                    bids: [
                        { id: "bid8", auctionId: "auction8", bidder: "0x333...", amount: 2.8, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xC0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "BNB", name: "Binance Coin", decimals: 18 }
                    ]
                }
            },
            {
                id: "9",
                title: "Портрет 'Осіння меланхолія'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052139.png",
                description: "Меланхолійний осінній портрет з теплими тонами. Передає глибокі емоції та осінню атмосферу. Виконаний з особливою чутливістю до кольору",
                auction: {
                    id: "auction9",
                    paintingId: "9",
                    startPrice: 1.1,
                    currentPrice: 1.6,
                    minIncrement: 0.12,
                    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 днів
                    bids: [
                        { id: "bid9", auctionId: "auction9", bidder: "0x444...", amount: 1.6, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDT", name: "Tether USD", decimals: 6 }
                    ]
                }
            },
            {
                id: "10",
                title: "Портрет 'Літня свіжість'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052149.png",
                description: "Свіжий літній портрет з яскравими кольорами та позитивною енергією. Передає радість та легкість літнього дня",
                auction: {
                    id: "auction10",
                    paintingId: "10",
                    startPrice: 0.8,
                    currentPrice: 1.3,
                    minIncrement: 0.1,
                    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 днів
                    bids: [
                        { id: "bid10", auctionId: "auction10", bidder: "0x555...", amount: 1.3, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xB0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDC", name: "USD Coin", decimals: 6 }
                    ]
                }
            },
            // Додаткові картини для повної колекції
            {
                id: "11",
                title: "Портрет 'Вечірня загадка'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052159.png",
                description: "Загадковий вечірній портрет з містичним освітленням. Передає таємничість та глибину вечірньої атмосфери",
                auction: {
                    id: "auction11",
                    paintingId: "11",
                    startPrice: 1.4,
                    currentPrice: 2.1,
                    minIncrement: 0.15,
                    endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 днів
                    bids: [
                        { id: "bid11", auctionId: "auction11", bidder: "0x666...", amount: 2.1, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDT", name: "Tether USD", decimals: 6 }
                    ]
                }
            },
            {
                id: "12",
                title: "Портрет 'Зимова елегантність'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052211.png",
                description: "Елегантний зимовий портрет з холодними тонами та вишуканістю. Передає красу та достоїнство в зимовій атмосфері",
                auction: {
                    id: "auction12",
                    paintingId: "12",
                    startPrice: 1.6,
                    currentPrice: 2.5,
                    minIncrement: 0.2,
                    endTime: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 днів
                    bids: [
                        { id: "bid12", auctionId: "auction12", bidder: "0x777...", amount: 2.5, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xC0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "BNB", name: "Binance Coin", decimals: 18 }
                    ]
                }
            },
            // Додаткові картини з нових зображень
            {
                id: "13",
                title: "Портрет 'Нічні думи'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052240.png",
                description: "Задумливий нічний портрет з глибокими емоціями. Передає внутрішній світ та роздуми в нічній тиші",
                auction: {
                    id: "auction13",
                    paintingId: "13",
                    startPrice: 1.3,
                    currentPrice: 1.9,
                    minIncrement: 0.15,
                    endTime: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000), // 11 днів
                    bids: [
                        { id: "bid13", auctionId: "auction13", bidder: "0x888...", amount: 1.9, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDT", name: "Tether USD", decimals: 6 }
                    ]
                }
            },
            {
                id: "14",
                title: "Портрет 'Ранкова свіжість'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052248.png",
                description: "Свіжий ранковий портрет з яскравими кольорами та позитивною енергією. Передає радість нового дня",
                auction: {
                    id: "auction14",
                    paintingId: "14",
                    startPrice: 1.0,
                    currentPrice: 1.5,
                    minIncrement: 0.1,
                    endTime: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000), // 9 днів
                    bids: [
                        { id: "bid14", auctionId: "auction14", bidder: "0x999...", amount: 1.5, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xB0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDC", name: "USD Coin", decimals: 6 }
                    ]
                }
            },
            {
                id: "15",
                title: "Портрет 'Вечірня задума'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052257.png",
                description: "Задумливий вечірній портрет з теплими тонами. Передає спокій та роздуми в кінці дня",
                auction: {
                    id: "auction15",
                    paintingId: "15",
                    startPrice: 1.2,
                    currentPrice: 1.8,
                    minIncrement: 0.12,
                    endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 днів
                    bids: [
                        { id: "bid15", auctionId: "auction15", bidder: "0xaaa...", amount: 1.8, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xC0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "BNB", name: "Binance Coin", decimals: 18 }
                    ]
                }
            },
            {
                id: "16",
                title: "Портрет 'Денне світло'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052306.png",
                description: "Яскравий денний портрет з природним освітленням. Передає красу та світло денного часу",
                auction: {
                    id: "auction16",
                    paintingId: "16",
                    startPrice: 1.4,
                    currentPrice: 2.0,
                    minIncrement: 0.18,
                    endTime: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000), // 13 днів
                    bids: [
                        { id: "bid16", auctionId: "auction16", bidder: "0xbbb...", amount: 2.0, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDT", name: "Tether USD", decimals: 6 }
                    ]
                }
            },
            {
                id: "17",
                title: "Портрет 'Тихі хвилини'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052315.png",
                description: "Спокійний портрет, що передає тихі, задумливі моменти. Виконаний з особливою чутливістю до деталей",
                auction: {
                    id: "auction17",
                    paintingId: "17",
                    startPrice: 0.9,
                    currentPrice: 1.4,
                    minIncrement: 0.08,
                    endTime: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 днів
                    bids: [
                        { id: "bid17", auctionId: "auction17", bidder: "0xccc...", amount: 1.4, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xB0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "USDC", name: "USD Coin", decimals: 6 }
                    ]
                }
            },
            {
                id: "18",
                title: "Портрет 'Глибокі думки'",
                artist: "Вікторія Гордій",
                imageUrl: "/images/Знімок екрана 2025-07-20 052325.png",
                description: "Глибокий психологічний портрет з елементами філософських роздумів. Передає складність внутрішнього світу",
                auction: {
                    id: "auction18",
                    paintingId: "18",
                    startPrice: 1.7,
                    currentPrice: 2.6,
                    minIncrement: 0.25,
                    endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 днів
                    bids: [
                        { id: "bid18", auctionId: "auction18", bidder: "0xddd...", amount: 2.6, tokenAddress: "0x0000000000000000000000000000000000000000", tokenSymbol: "ETH", timestamp: new Date() }
                    ],
                    status: 'active',
                    acceptedTokens: [
                        { address: "0x0000000000000000000000000000000000000000", symbol: "ETH", name: "Ethereum", decimals: 18 },
                        { address: "0xC0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8", symbol: "BNB", name: "Binance Coin", decimals: 18 }
                    ]
                }
            }
        ];
        setPaintings(mockPaintings);
    }, []);

    const handleBid = (auctionId: string, amount: number, tokenAddress: string) => {
        // Тут буде логіка для відправки ставки в блокчейн
        console.log(`Ставка: ${amount} за аукціон ${auctionId} токеном ${tokenAddress}`);
        
        // Красиве повідомлення про успішну ставку
        const successMessage = `
🎉 Ставка успішно розміщена!

💰 Сума: ${amount} ETH
🎨 Аукціон: ${paintings.find(p => p.auction.id === auctionId)?.title}
👤 Ваша адреса: ${walletInfo.address.slice(0, 6)}...${walletInfo.address.slice(-4)}

Дякуємо за участь в аукціоні! 🚀
        `;
        alert(successMessage);
        
        // Оновлюємо стан аукціону
        setPaintings(prev => prev.map(painting => {
            if (painting.auction.id === auctionId) {
                return {
                    ...painting,
                    auction: {
                        ...painting.auction,
                        currentPrice: amount,
                        bids: [
                            ...painting.auction.bids,
                            {
                                id: `bid${Date.now()}`,
                                auctionId,
                                bidder: walletInfo.address,
                                amount,
                                tokenAddress,
                                tokenSymbol: 'ETH', // Спрощено для демо
                                timestamp: new Date()
                            }
                        ]
                    }
                };
            }
            return painting;
        }));
    };

    // Розрахунок статистики
    const totalBids = paintings.reduce((sum, painting) => sum + painting.auction.bids.length, 0);
    const highestBid = Math.max(...paintings.map(p => p.auction.currentPrice));

    return (
        <>
        <style>{`
            @media (max-width: 600px) {
                .gallery h2 {
                    font-size: 2rem !important;
                }
                .gallery h3 {
                    font-size: 1.1rem !important;
                }
                .gallery > div {
                    margin: 0 !important;
                    padding: 0 !important;
                }
                .auction-cards {
                    grid-template-columns: 1fr !important;
                    gap: 1rem !important;
                    padding: 1rem !important;
                }
                .auction-card {
                    padding: 1rem !important;
                }
                .gallery p, .gallery a {
                    font-size: 1rem !important;
                }
                .gallery img {
                    max-width: 100% !important;
                    height: auto !important;
                }
            }
        `}</style>
        <div className="gallery" style={{ 
            background: 'linear-gradient(135deg, #000000, #1a0033, #000000)',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <AnimatedBackground />
            <WalletConnect onWalletConnect={setWalletInfo} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ 
                    textAlign: 'center', 
                    color: '#ff00ff', 
                    fontSize: '3rem', 
                    margin: '2rem 0',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    textShadow: '0 0 20px rgba(255, 0, 255, 0.8)'
                }}>
                    🎨 Аукціон картин Вікторії Гордій
                </h2>
                <h3 style={{ 
                    textAlign: 'center', 
                    color: '#00ffff', 
                    fontSize: '1.5rem', 
                    margin: '0 0 2rem 0',
                    fontFamily: 'monospace',
                    textShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
                }}>
                    Колекція з 18 унікальних картин
                </h3>
                
                <div style={{
                    textAlign: 'center',
                    margin: '0 2rem 2rem 2rem',
                    padding: '2rem',
                    background: 'rgba(0, 0, 0, 0.8)',
                    borderRadius: '20px',
                    border: '2px solid #00ffff',
                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
                    color: '#fff'
                }}>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        color: '#ccc', 
                        margin: '0 0 1rem 0',
                        lineHeight: '1.6',
                        fontFamily: 'monospace'
                    }}>
                        Ласкаво просимо до галереї Вікторії Гордій! Кожна картина - це унікальний аукціон NFT. Колекція включає роботи з обох Instagram акаунтів художниці. Підключіть гаманець та зробіть свою ставку різними токенами.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
                        <a 
                            href="https://www.instagram.com/victoriahordii/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                color: '#ff00ff',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                fontFamily: 'monospace',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                border: '1px solid #ff00ff',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                transition: 'all 0.3s ease',
                                display: 'inline-block'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.5)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            📸 @victoriahordii
                        </a>
                        <a 
                            href="https://www.instagram.com/vi.violet.art/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                color: '#00ffff',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                fontFamily: 'monospace',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                border: '1px solid #00ffff',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                transition: 'all 0.3s ease',
                                display: 'inline-block'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            🎨 @vi.violet.art
                        </a>
                    </div>
                </div>

                <AuctionStats 
                    totalPaintings={paintings.length}
                    activeAuctions={paintings.filter(p => p.auction.status === 'active').length}
                    totalBids={totalBids}
                    highestBid={highestBid}
                />

                <ArtistWallet />

                <div className="auction-cards" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    padding: '2rem'
                }}>
                    {paintings.map((painting) => (
                        <AuctionCard 
                            key={painting.id} 
                            painting={painting}
                            walletInfo={walletInfo}
                            onBid={handleBid}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Gallery;