"use client"
import React, { useState } from 'react';
import styles from './results.module.css';
//import { Checkmark } from 'react-checkmark';
import CheckIcon from '@mui/icons-material/Check';

/*enum Color {
    Green = 'green',
    Gray = 'gray'
}*/

const COLOR_GREEN = "success";
const COLOR_GRAY = "primary";

export function ResultsPopup() {
  const [keywords, setKeywords] = useState([
    'computer science', 'development', 'python', 'business analysis',
    'capital markets'
  ]);

  const [checkmarkColors, setCheckmarkColors] = useState(Array(keywords.length).fill(COLOR_GRAY));
  
  return (
    <div className={styles.resultsPopup}>
      <h3>Matches found...</h3>
      <ul>
        {keywords.map((keyword, index) => { 
        return <div className = {styles.entry}>{<CheckIcon size = '24px' color={checkmarkColors[index] || COLOR_GREEN}/>}
        <li key={index}>{keyword}</li></div>
        }
        )}
      </ul>
    </div>
  );
}

