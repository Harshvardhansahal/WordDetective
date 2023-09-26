import React, { useState } from 'react';
import './WordSearchGame.css';
import { Button, message } from 'antd';

function WordSearchGame({ validWords }) {
  const grid = [
    ['A', 'K', 'S', 'H', 'A', 'Y', 'G', 'H'],
    ['B', 'A', 'H', 'U', 'B', 'A', 'L', 'I'],
    ['C', 'S', 'A', 'L', 'M', 'A', 'N', 'R'],
    ['D', 'A', 'N', 'G', 'A', 'L', 'G', 'U'],
    ['E', 'A', 'R', 'P', 'H', 'A', 'S', 'T'],
    ['E', 'W', 'A', 'B', 'B', 'A', 'R', 'P'],
    ['P', 'I', 'K', 'A', 'L', 'Y', 'T', 'S'],
  ];

  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedWord, setSelectedWord] = useState('');

  const handleMouseDown = (rowIndex, colIndex) => {
    setSelectedLetters([{ rowIndex, colIndex }]);
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    if (selectedLetters.length > 0) {
      const lastSelected = selectedLetters[selectedLetters.length - 1];
      const isAdjacent =
        Math.abs(rowIndex - lastSelected.rowIndex) <= 1 &&
        Math.abs(colIndex - lastSelected.colIndex) <= 1;

      if (isAdjacent) {
        setSelectedLetters((prevSelected) => [
          ...prevSelected,
          { rowIndex, colIndex },
        ]);
      }
    }
  };

  const handleMouseUp = () => {
    const word = selectedLetters
      .map((coords) => grid[coords.rowIndex][coords.colIndex])
      .join('');
    setSelectedWord(word);
    setSelectedLetters([]);
  };

  const handleCheckWord = () => {
    if (validWords.includes(selectedWord)) {
      message.success(`"${selectedWord}" is a Right Answer!`);
    } else {
      message.error(`"${selectedWord}" is a Wrong Answer.`);
    }
  };
  return (
    <div className="word-search-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((letter, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`grid-cell ${selectedLetters.find(
                (item) =>
                  item.rowIndex === rowIndex && item.colIndex === colIndex
              )
                  ? 'selected'
                  : ''
                }`}
              onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onMouseUp={handleMouseUp}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
      <div className="selected-word"><span>Selected-word:  {selectedWord}</span></div>
      <Button type='primary' onClick={handleCheckWord}>Check</Button>
    </div>
  );
}
export default WordSearchGame;
