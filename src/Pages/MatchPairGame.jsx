import React, { useState, useEffect } from 'react';
import '../Pages/MatchPairGame.css';

const initialCards = [
  { id: 1, name: 'A', isFlipped: false, isMatched: false },
  { id: 2, name: 'A', isFlipped: false, isMatched: false },
  { id: 3, name: 'B', isFlipped: false, isMatched: false },
  { id: 4, name: 'B', isFlipped: false, isMatched: false },
  { id: 5, name: 'C', isFlipped: false, isMatched: false },
  { id: 6, name: 'C', isFlipped: false, isMatched: false },
  { id: 7, name: 'D', isFlipped: false, isMatched: false },
  { id: 8, name: 'D', isFlipped: false, isMatched: false },
];

const shuffleCards = (cards) => {
  return cards.sort(() => Math.random() - 0.5);
};

const MatchPairGame = () => {
  const [cards, setCards] = useState(shuffleCards(initialCards));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.name === secondCard.name) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.name === firstCard.name ? { ...card, isMatched: true } : card
          )
        );
        setMatchedPairs(matchedPairs + 1);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }

      setFlippedCards([]);
    }
  }, [flippedCards]);

  const handleCardClick = (card) => {
    if (card.isFlipped || flippedCards.length === 2) {
      return;
    }

    setCards((prevCards) =>
      prevCards.map((c) =>
        c.id === card.id ? { ...c, isFlipped: true } : c
      )
    );

    setFlippedCards([...flippedCards, card]);
  };

  const resetGame = () => {
    setCards(shuffleCards(initialCards));
    setFlippedCards([]);
    setMatchedPairs(0);
  };

  return (
    <div className="game-container">
      <h1>Match Pair Game</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.name}</div>
            </div>
          </div>
        ))}
      </div>
      {matchedPairs === initialCards.length / 2 && (
        <div className="win-message">
          You Win! 🎉
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default MatchPairGame;
