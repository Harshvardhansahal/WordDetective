import React, { useState } from 'react';
import './WordSearchGame.css';
import { Button, Tag } from 'antd';

function WordSearchGame({ validWords }) {
  const grid = [
    ['A', 'K', 'S', 'H', 'A', 'Y', 'L', 'H'],
    ['B', 'A', 'H', 'U', 'B', 'A', 'S', 'I'],
    ['C', 'S', 'A', 'L', 'M', 'A', 'N', 'R'],
    ['D', 'A', 'N', 'G', 'H', 'L', 'G', 'U'],
    ['E', 'A', 'R', 'B', 'A', 'A', 'S', 'T'],
    ['E', 'W', 'A', 'B', 'B', 'A', 'R', 'P'],
    ['P', 'R', 'K', 'A', 'L', 'Y', 'T', 'S'],
    ['P', 'I', 'K', 'A', 'L', 'Y', 'T', 'S']
  ];

  const [selectedLetters, setSelectedLetters] = useState({});
  const [selectedWord, setSelectedWord] = useState("");
  const [tagColor, setTagColor] = useState("gray");
  const [canSelect, setCanSelect] = useState(true);

  const handleMouseDown = (rowIndex, colIndex) => {
    setSelectedLetters({ [`${rowIndex}-${colIndex}`]: true });
    setCanSelect(true);
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    if (canSelect) {
      if (Object.keys(selectedLetters).length > 0) {
        const lastSelected = Object.keys(selectedLetters).pop();
        const [lastRowIndex, lastColIndex] = lastSelected.split("-");

        const isAdjacent =
          Math.abs(rowIndex - lastRowIndex) <= 1 &&
          Math.abs(colIndex - lastColIndex) <= 1;

        if (isAdjacent) {
          setSelectedLetters({
            ...selectedLetters,
            [`${rowIndex}-${colIndex}`]: true
          });
        }
      }
    }
  };

  const handleMouseUp = () => {
    const word = Object.keys(selectedLetters)
      .map((coords) => grid[coords.split("-")[0]][coords.split("-")[1]])
      .join("");
    setSelectedWord(word);
    setCanSelect(false);
  };

  const handleCheckWord = () => {
    if (validWords.includes(selectedWord)) {
      setTagColor("green");
    } else {
      setTagColor("red");
    }
  };

  return (
    <div className="word-search-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((letter, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`grid-cell ${
                selectedLetters[`${rowIndex}-${colIndex}`] ? "selected" : ""
              }`}
              onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onMouseUp={handleMouseUp}
            >
              <span className="span">{letter}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="selected-word">
        <span>
          Selected word: <Tag color={tagColor}>{selectedWord}</Tag>
        </span>
      </div>
      <Button type="primary" onClick={handleCheckWord}>
        Check
      </Button>
    </div>
  );
}

export default WordSearchGame;
