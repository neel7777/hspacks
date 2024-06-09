import React, { useState } from 'react';

import Card from './Card';
import { Cards } from '../services/hsAPI'

const PackOpener = () => {
    const [cards, setCards] = useState([]);
    
    const openPack = async () => {
        const shuffledCards = Cards.sort(() => Math.random() - 0.5);
        
        
        const selectedCards = shuffledCards.slice(0, 5);
        setCards(selectedCards)

        
    };
    return (
        <div x>
            <button onClick={openPack}>Open Pack!</button>
            <div className="container">
                {cards.map(card=> (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    )

}


    


export default PackOpener;