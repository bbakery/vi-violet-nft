import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NFTMintButton from '../components/NFTMintButton';
import { Painting } from '../types';

const PaintingPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [painting, setPainting] = useState<Painting | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/paintings/${id}`)
                .then(response => response.json())
                .then(data => setPainting(data))
                .catch(error => console.error('Error fetching painting:', error));
        }
    }, [id]);

    if (!painting) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{painting.title}</h1>
            <img src={painting.imageUrl} alt={painting.title} />
            <p>{painting.description}</p>
            <NFTMintButton paintingId={painting.id} />
        </div>
    );
};

export default PaintingPage;