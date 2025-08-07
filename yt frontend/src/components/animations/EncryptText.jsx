// src/components/EncryptText.jsx
import React, { useState, useEffect } from 'react';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";

function EncryptText({ targetText, onComplete }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    if(!targetText) return

    let iteration = 0;
    
    const interval = setInterval(() => {
      const newText = targetText
        .split("")
        .map((letter, index) => {
          // If we've already revealed this letter, keep it
          if (index < iteration) {
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            }
            return targetText[index];
          // Otherwise, show a random character
        })
        .join("");

      setDisplayText(newText);

      // Stop the animation when all characters are revealed
      if (iteration >= targetText.length) {
        clearInterval(interval);
        // Notify the parent component that the animation is finished
        if (onComplete) {
          onComplete();
        }
      }

      iteration += 1 / 7; // Controls the speed of the reveal
    }, 30); // Controls the speed of the scrambling

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(interval);
  }, [targetText, onComplete]);

  return <span className="font-mono text-green-400">{displayText}</span>;
}

export default EncryptText;