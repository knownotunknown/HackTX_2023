"use client"
import React, { useState } from 'react';
import styles from './results.module.css';
import { Checkmark } from 'react-checkmark'

enum Color {
    Green = 'green',
    Gray = 'gray'
}

export function ResultsPopup() {
  const [keywords, setKeywords] = useState([
    'computer science', 'development', 'python', 'business analysis',
    'capital markets', 'compliance', 'derivatives', 'design', 'documentation',
    'etl', 'risk management', 'sdlc', 'self', 'source code', 'spam', 'sql',
    'test driven development', 'testing', 'unix'
  ]);

  const [checkmarkColors, setCheckmarkColors] = useState<Color[]>([]);
  
  return (
    <div className={styles.resultsPopup}>
      <h3>Apply with Simplify!</h3>
      <p>We'll help you autofill this job application with information from your Simplify profile:</p>
      <button>AUTOFILL ALL</button>
      <hr />
      <div className={styles.resumeMatch}>
        <h4>16% RESUME MATCH</h4>
        <button>TAILOR RESUME</button>
      </div>
      <hr />
      <div className={styles.keywords}>
        <p>Your resume has 3 out of 19 keywords that appear in the job description. Try to get your score above 70% to increase your chances!</p>
        <ul>
          
          {keywords.map((keyword, index) => { 
          <><Checkmark color = {checkmarkColor[index] ? checkmarkColor[index] : Color.Gray}/>
          <li key={index}>{keyword}</li></>
          }
          )}
        </ul>
      </div>
    </div>
  );
}

