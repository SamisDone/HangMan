# 🎯 Interactive Hangman Game

A modern, interactive hangman game built with HTML, CSS, and JavaScript. Features a beautiful UI, smooth animations, and engaging gameplay.

## 🎮 Features

- **Visual Hangman Drawing**: Watch the hangman being drawn piece by piece as you make wrong guesses
- **Interactive Keyboard**: Click on letters or use your physical keyboard to make guesses
- **Word Categories**: Programming and technology-themed words
- **Score Tracking**: Persistent win/loss counter saved in local storage
- **Hint System**: Get help when you're stuck
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient background, smooth animations, and clean design
- **Game Over Modal**: Elegant end-game screen with results

## 🚀 How to Play

1. **Open the Game**: Simply open `index.html` in any modern web browser
2. **Start Guessing**: Click on letters or type on your keyboard to guess letters
3. **Watch the Hangman**: The hangman drawing appears progressively with each wrong guess
4. **Win or Lose**: 
   - Win by guessing all letters in the word before the hangman is complete
   - Lose if the hangman is fully drawn (6 wrong guesses)
5. **Use Hints**: Click the "Hint" button if you need help
6. **Track Progress**: Your wins and losses are automatically saved

## 🎯 Game Rules

- You have **6 lives** (wrong guesses) before the game ends
- Correct guesses reveal all instances of that letter in the word
- Wrong guesses add a body part to the hangman
- You can't guess the same letter twice
- The game automatically detects when you've won or lost

## 🛠️ Technical Features

- **Canvas Drawing**: Smooth hangman illustrations using HTML5 Canvas
- **Local Storage**: Persistent score tracking across browser sessions
- **Event Handling**: Both mouse clicks and keyboard input supported
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Animations**: Smooth transitions and hover effects
- **ES6 Classes**: Clean, object-oriented JavaScript code

## 📱 Responsive Design

The game adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side hangman and game controls
- **Tablet**: Optimized spacing and touch-friendly buttons
- **Mobile**: Single-column layout with larger touch targets

## 🎨 Customization

You can easily customize the game by:
- Adding new words to the `words` array in `script.js`
- Modifying colors and styling in `styles.css`
- Adjusting game difficulty by changing the number of lives
- Adding new features like difficulty levels or categories

## 🚀 Getting Started

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start playing immediately!

No installation or dependencies required - it's a pure HTML/CSS/JavaScript application.

## 📁 File Structure

```
HangMan/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Game logic and functionality
└── README.md       # This file
```

## 🎯 Word Categories

The game includes programming and technology-themed words such as:
- Programming Languages: JavaScript, Python, HTML, CSS
- Frameworks: React, NodeJS
- Concepts: Algorithm, Function, Variable, Object
- Technology: Database, Network, Security, API

Enjoy playing! 🎮 