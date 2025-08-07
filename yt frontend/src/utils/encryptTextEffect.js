// src/utils/encryptTextEffect.js
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";

export function encryptTextEffect(targetText, onUpdate, onComplete) {
  let iteration = 0;

  const interval = setInterval(() => {
    const newText = targetText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return targetText[index]; // reveal real letter
        }
        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      })
      .join("");

    onUpdate(newText); // send scrambled text back

    if (iteration >= targetText.length) {
      clearInterval(interval);
      if (onComplete) onComplete(); // finished animation
    }

    iteration += 1 / 7;
  }, 30);

  return () => clearInterval(interval); // optional: manual cancel
}
