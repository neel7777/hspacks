import React, { useState } from 'react';
import Card from './Card';
import { Cards } from '../services/hsAPI';


const PackOpener = () => {
    const [cards, setCards] = useState([]);

    const openPack = async () => {
        const shuffledCards = Cards.sort(() => Math.random() - 0.5);
        const selectedCards = shuffledCards.slice(0, 5);
        setCards(selectedCards);
    };

    return (
        <div className="pentagon-container">
            <button onClick={openPack}>Open Packs</button>
            <div className="pentagon-cards">
                {cards.map((card, index) => (
                    <div className={`card card${index + 1}`} key={card.id}>
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackOpener;
