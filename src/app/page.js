"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
// import pdf from 'pdf-parse';
export default function Home() {
    const [file, setFile] = useState(null);
    const [benefits, setBenefits] = useState([]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);

            // const data = await pdf(file);
            // const extractedText = data.text;


            // console.log('this is the extracted text', extractedText)

            // Now you can process the extractedText further...
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>PDF Benefits Analyzer</h1>
            <h2 className={styles.subHeader}>Upload a copy of your employment agreement and discover your benefits within seconds!</h2>

            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className={styles.uploadButton}
            />

            <div className={styles.resultsSection}>
                {benefits.map((benefit, index) => (
                    <p key={index}>{benefit}</p>
                ))}
            </div>

        </div>
    );
}
