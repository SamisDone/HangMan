class HangmanGame {
    constructor() {
        this.words = [
            // Animals
            'ELEPHANT', 'GIRAFFE', 'PENGUIN', 'KANGAROO', 'DOLPHIN', 'BUTTERFLY', 'RHINOCEROS',
            'CHEETAH', 'PANDAS', 'KOALA', 'OSTRICH', 'FLAMINGO', 'GORILLA', 'CHIMPANZEE',
            'LION', 'TIGER', 'BEAR', 'WOLF', 'FOX', 'DEER', 'RABBIT', 'SQUIRREL',
            'HAMSTER', 'GUINEA', 'FERRET', 'CHINCHILLA', 'HEDGEHOG', 'MEERKAT',
            'SLOTH', 'ANTEATER', 'ARMADILLO', 'PLATYPUS', 'ECHIDNA', 'WOMBAT',
            
            // Food & Drinks
            'PIZZA', 'HAMBURGER', 'SUSHI', 'PASTA', 'SALAD', 'SANDWICH', 'TACOS',
            'BURRITO', 'CURRY', 'STEAK', 'CHICKEN', 'SALMON', 'SHRIMP', 'LOBSTER',
            'APPLE', 'BANANA', 'ORANGE', 'GRAPES', 'STRAWBERRY', 'BLUEBERRY', 'WATERMELON',
            'PINEAPPLE', 'MANGO', 'AVOCADO', 'TOMATO', 'CARROT', 'BROCCOLI', 'SPINACH',
            'CHOCOLATE', 'VANILLA', 'CINNAMON', 'PEPPERMINT', 'CARAMEL', 'NUTELLA',
            'COFFEE', 'ESPRESSO', 'CAPPUCCINO', 'LATTE', 'MOCHA', 'TEA', 'LEMONADE',
            
            // Countries & Cities
            'AUSTRALIA', 'BRAZIL', 'CANADA', 'CHINA', 'EGYPT', 'FRANCE', 'GERMANY',
            'INDIA', 'ITALY', 'JAPAN', 'MEXICO', 'NETHERLANDS', 'NORWAY', 'PORTUGAL',
            'RUSSIA', 'SPAIN', 'SWEDEN', 'SWITZERLAND', 'THAILAND', 'TURKEY', 'UKRAINE',
            'LONDON', 'PARIS', 'ROME', 'TOKYO', 'SYDNEY', 'NEWYORK', 'CHICAGO',
            'TORONTO', 'MADRID', 'BARCELONA', 'AMSTERDAM', 'BERLIN', 'MUNICH',
            'VIENNA', 'PRAGUE', 'BUDAPEST', 'WARSAW', 'MOSCOW', 'STPETERSBURG',
            
            // Sports & Activities
            'FOOTBALL', 'BASKETBALL', 'BASEBALL', 'SOCCER', 'TENNIS', 'VOLLEYBALL',
            'HOCKEY', 'GOLF', 'SWIMMING', 'RUNNING', 'CYCLING', 'SKIING', 'SNOWBOARDING',
            'SURFING', 'SKATEBOARDING', 'ROCKCLIMBING', 'YOGA', 'DANCING', 'SINGING',
            'PAINTING', 'DRAWING', 'PHOTOGRAPHY', 'COOKING', 'BAKING', 'GARDENING',
            'FISHING', 'HUNTING', 'CAMPING', 'HIKING', 'MOUNTAINEERING', 'SCUBA',
            
            // Movies & Entertainment
            'AVATAR', 'TITANIC', 'JURASSIC', 'STARWARS', 'HARRYPOTTER', 'LORDOFRINGS',
            'MATRIX', 'GLADIATOR', 'BRAVEHEART', 'FORRESTGUMP', 'PULPFICTION',
            'GOODFELLAS', 'CASABLANCA', 'GODFATHER', 'SHAWSHANK', 'FIGHTCLUB',
            'INCEPTION', 'INTERSTELLAR', 'DUNKIRK', 'TENET', 'OPPENHEIMER',
            'DISNEY', 'PIXAR', 'MARVEL', 'DC', 'NETFLIX', 'YOUTUBE', 'SPOTIFY',
            
            // Nature & Environment
            'MOUNTAIN', 'OCEAN', 'RIVER', 'LAKE', 'FOREST', 'DESERT', 'JUNGLE',
            'SAVANNA', 'TUNDRA', 'GLACIER', 'VOLCANO', 'WATERFALL', 'CAVE', 'CANYON',
            'ISLAND', 'BEACH', 'CLIFF', 'VALLEY', 'MEADOW', 'PRAIRIE', 'WETLAND',
            'RAINFOREST', 'CORALREEF', 'GRASSLAND', 'MARSH', 'SWAMP', 'ESTUARY',
            
            // Technology (expanded)
            'JAVASCRIPT', 'PYTHON', 'HTML', 'CSS', 'REACT', 'NODEJS', 'DATABASE',
            'ALGORITHM', 'FUNCTION', 'VARIABLE', 'OBJECT', 'ARRAY', 'STRING',
            'PROGRAMMING', 'DEVELOPER', 'COMPUTER', 'SOFTWARE', 'INTERFACE',
            'NETWORK', 'SECURITY', 'FRAMEWORK', 'LIBRARY', 'API', 'SERVER',
            'CLIENT', 'BROWSER', 'APPLICATION', 'WEBSITE', 'MOBILE', 'DESKTOP',
            'SMARTPHONE', 'TABLET', 'LAPTOP', 'KEYBOARD', 'MOUSE', 'MONITOR',
            'PRINTER', 'SCANNER', 'CAMERA', 'MICROPHONE', 'SPEAKER', 'HEADPHONES',
            
            // Professions & Jobs
            'DOCTOR', 'TEACHER', 'ENGINEER', 'LAWYER', 'ACCOUNTANT', 'ARCHITECT',
            'DESIGNER', 'WRITER', 'JOURNALIST', 'REPORTER', 'EDITOR', 'TRANSLATOR',
            'INTERPRETER', 'CONSULTANT', 'MANAGER', 'DIRECTOR', 'EXECUTIVE',
            'ENTREPRENEUR', 'INVESTOR', 'BANKER', 'BROKER', 'ANALYST', 'RESEARCHER',
            'SCIENTIST', 'PROFESSOR', 'LECTURER', 'TUTOR', 'COACH', 'TRAINER',
            
            // Colors & Art
            'RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'ORANGE', 'PINK', 'BROWN',
            'BLACK', 'WHITE', 'GRAY', 'SILVER', 'GOLD', 'BRONZE', 'COPPER',
            'TURQUOISE', 'LAVENDER', 'MAROON', 'NAVY', 'OLIVE', 'TEAL', 'INDIGO',
            'VIOLET', 'MAGENTA', 'CYAN', 'AMBER', 'EMERALD', 'RUBY', 'SAPPHIRE',
            
            // Emotions & Feelings
            'HAPPY', 'SAD', 'ANGRY', 'EXCITED', 'NERVOUS', 'ANXIOUS', 'CALM',
            'PEACEFUL', 'JOYFUL', 'GRATEFUL', 'THANKFUL', 'BLESSED', 'LOVED',
            'CARED', 'SUPPORTED', 'ENCOURAGED', 'INSPIRED', 'MOTIVATED', 'DETERMINED',
            'CONFIDENT', 'BRAVE', 'COURAGEOUS', 'STRONG', 'POWERFUL', 'ENERGETIC',
            
            // Weather & Seasons
            'SUNNY', 'RAINY', 'CLOUDY', 'STORMY', 'WINDY', 'FOGGY', 'MISTY',
            'HUMID', 'DRY', 'WARM', 'HOT', 'COLD', 'FREEZING', 'BOILING',
            'SPRING', 'SUMMER', 'AUTUMN', 'WINTER', 'MONSOON', 'HURRICANE',
            'TORNADO', 'BLIZZARD', 'DROUGHT', 'FLOOD', 'EARTHQUAKE', 'VOLCANO',
            
            // Transportation
            'CAR', 'TRUCK', 'BUS', 'TRAIN', 'PLANE', 'HELICOPTER', 'BOAT',
            'SHIP', 'YACHT', 'SAILBOAT', 'KAYAK', 'CANOE', 'RAFT', 'SUBMARINE',
            'MOTORCYCLE', 'BICYCLE', 'SCOOTER', 'SKATEBOARD', 'ROLLERBLADES',
            'ELEVATOR', 'ESCALATOR', 'CABLE', 'GONDOLA', 'FERRY', 'TAXI',
            
            // Music & Instruments
            'GUITAR', 'PIANO', 'VIOLIN', 'DRUMS', 'BASS', 'TRUMPET', 'SAXOPHONE',
            'FLUTE', 'CLARINET', 'OBOE', 'BASSOON', 'TROMBONE', 'TUBA', 'HARP',
            'ACCORDION', 'BANJO', 'MANDOLIN', 'UKULELE', 'HARMONICA', 'XYLOPHONE',
            'TAMBOURINE', 'CYMBALS', 'GONG', 'BELLS', 'CHIMES', 'MARACAS',
            
            // Body Parts
            'HEAD', 'FACE', 'EYES', 'NOSE', 'MOUTH', 'EARS', 'NECK', 'SHOULDERS',
            'ARMS', 'HANDS', 'FINGERS', 'CHEST', 'BACK', 'STOMACH', 'WAIST',
            'LEGS', 'KNEES', 'FEET', 'TOES', 'ANKLES', 'WRISTS', 'ELBOWS',
            'THUMBS', 'PALMS', 'HEELS', 'CALVES', 'THIGHS', 'FOREHEAD',
            
            // Clothing & Fashion
            'SHIRT', 'PANTS', 'DRESS', 'SKIRT', 'JACKET', 'COAT', 'SWEATER',
            'HOODIE', 'TANKTOP', 'SHORTS', 'JEANS', 'SUIT', 'TIE', 'SCARF',
            'HAT', 'CAP', 'BEANIE', 'GLOVES', 'MITTENS', 'SOCKS', 'SHOES',
            'BOOTS', 'SANDALS', 'SNEAKERS', 'HEELS', 'FLATS', 'BELT', 'WATCH',
            
            // Home & Furniture
            'CHAIR', 'TABLE', 'BED', 'SOFA', 'COUCH', 'DESK', 'BOOKSHELF',
            'CABINET', 'DRAWER', 'CLOSET', 'WARDROBE', 'MIRROR', 'LAMP', 'LIGHT',
            'PILLOW', 'BLANKET', 'SHEET', 'TOWEL', 'CURTAIN', 'BLINDS', 'RUG',
            'CARPET', 'WALLPAPER', 'PAINT', 'TILE', 'WOOD', 'METAL', 'GLASS',
            
            // Kitchen & Cooking
            'STOVE', 'OVEN', 'MICROWAVE', 'REFRIGERATOR', 'DISHWASHER', 'SINK',
            'COUNTER', 'CABINET', 'DRAWER', 'PAN', 'POT', 'KNIFE', 'FORK',
            'SPOON', 'PLATE', 'BOWL', 'CUP', 'GLASS', 'MUG', 'BOTTLE', 'JAR',
            'CAN', 'BOX', 'BAG', 'WRAPPER', 'CONTAINER', 'LID', 'COVER',
            
            // School & Education
            'PENCIL', 'PEN', 'PAPER', 'NOTEBOOK', 'BOOK', 'TEXTBOOK', 'DICTIONARY',
            'ENCYCLOPEDIA', 'ATLAS', 'GLOBE', 'MAP', 'CHART', 'GRAPH', 'DIAGRAM',
            'CALCULATOR', 'RULER', 'COMPASS', 'PROTRACTOR', 'ERASER', 'HIGHLIGHTER',
            'MARKER', 'CRAYON', 'PAINTBRUSH', 'CANVAS', 'EASEL', 'CHALKBOARD',
            
            // Games & Toys
            'PUZZLE', 'CHESS', 'CHECKERS', 'MONOPOLY', 'SCRABBLE', 'CARDS',
            'DICE', 'DOMINOES', 'MARBLES', 'JACKS', 'HOPSCOTCH', 'HIDEANDSEEK',
            'TAG', 'DODGEBALL', 'KICKBALL', 'BASEBALL', 'SOFTBALL', 'VOLLEYBALL',
            'BADMINTON', 'TENNIS', 'GOLF', 'BOWLING', 'BILLIARDS', 'DARTS',
            
            // Holidays & Celebrations
            'CHRISTMAS', 'HALLOWEEN', 'THANKSGIVING', 'EASTER', 'VALENTINES',
            'BIRTHDAY', 'ANNIVERSARY', 'WEDDING', 'GRADUATION', 'PARTY',
            'CELEBRATION', 'FESTIVAL', 'CARNIVAL', 'PARADE', 'CONCERT', 'SHOW',
            'PERFORMANCE', 'EXHIBITION', 'MUSEUM', 'THEATER', 'CINEMA', 'STADIUM',
            
            // Space & Astronomy
            'SUN', 'MOON', 'STARS', 'PLANET', 'EARTH', 'MARS', 'VENUS', 'JUPITER',
            'SATURN', 'URANUS', 'NEPTUNE', 'MERCURY', 'PLUTO', 'ASTEROID',
            'COMET', 'METEOR', 'GALAXY', 'UNIVERSE', 'COSMOS', 'ORBIT', 'GRAVITY',
            'TELESCOPE', 'SATELLITE', 'SPACESHIP', 'ROCKET', 'ASTRONAUT', 'ALIEN',
            
            // Time & Calendar
            'SECOND', 'MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR',
            'DECADE', 'CENTURY', 'MILLENNIUM', 'MORNING', 'AFTERNOON', 'EVENING',
            'NIGHT', 'MIDNIGHT', 'NOON', 'DAWN', 'DUSK', 'SUNRISE', 'SUNSET',
            'TODAY', 'TOMORROW', 'YESTERDAY', 'WEEKEND', 'WEEKDAY', 'HOLIDAY',
            
            // Numbers & Math
            'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN',
            'EIGHT', 'NINE', 'TEN', 'HUNDRED', 'THOUSAND', 'MILLION', 'BILLION',
            'ADDITION', 'SUBTRACTION', 'MULTIPLICATION', 'DIVISION', 'EQUATION',
            'ALGEBRA', 'GEOMETRY', 'CALCULUS', 'STATISTICS', 'PROBABILITY',
            
            // Languages
            'ENGLISH', 'SPANISH', 'FRENCH', 'GERMAN', 'ITALIAN', 'PORTUGUESE',
            'RUSSIAN', 'CHINESE', 'JAPANESE', 'KOREAN', 'ARABIC', 'HINDI',
            'DUTCH', 'SWEDISH', 'NORWEGIAN', 'DANISH', 'FINNISH', 'POLISH',
            'GREEK', 'TURKISH', 'HEBREW', 'LATIN', 'GREEK', 'SANSKRIT',
            
            // Random Fun Words
            'SERENDIPITY', 'MELIFLUOUS', 'PETRICHOR', 'EPHEMERAL', 'LUMINOUS',
            'RESILIENT', 'AUTHENTIC', 'GRATEFUL', 'MINDFUL', 'AWESOME',
            'FANTASTIC', 'WONDERFUL', 'BEAUTIFUL', 'AMAZING', 'INCREDIBLE',
            'SPECTACULAR', 'MAGNIFICENT', 'GLORIOUS', 'BRILLIANT', 'EXCELLENT'
        ];
        
        this.currentWord = '';
        this.guessedLetters = new Set();
        this.lives = 6;
        this.gameOver = false;
        this.wins = 0;
        this.losses = 0;
        
        this.canvas = document.getElementById('hangmanCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.initializeGame();
        this.setupEventListeners();
        this.loadScores();
    }
    
    initializeGame() {
        this.currentWord = this.getRandomWord();
        this.guessedLetters.clear();
        this.lives = 6;
        this.gameOver = false;
        
        this.drawHangman();
        this.displayWord();
        this.createKeyboard();
        this.updateDisplay();
    }
    
    getRandomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
    
    drawHangman() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 3;
        
        // Draw base
        this.ctx.beginPath();
        this.ctx.moveTo(50, 250);
        this.ctx.lineTo(250, 250);
        this.ctx.stroke();
        
        // Draw vertical pole
        this.ctx.beginPath();
        this.ctx.moveTo(100, 250);
        this.ctx.lineTo(100, 50);
        this.ctx.stroke();
        
        // Draw top
        this.ctx.beginPath();
        this.ctx.moveTo(100, 50);
        this.ctx.lineTo(200, 50);
        this.ctx.stroke();
        
        // Draw rope
        this.ctx.beginPath();
        this.ctx.moveTo(200, 50);
        this.ctx.lineTo(200, 80);
        this.ctx.stroke();
        
        // Draw hangman based on lives remaining
        if (this.lives < 6) {
            // Head
            this.ctx.beginPath();
            this.ctx.arc(200, 100, 20, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
        
        if (this.lives < 5) {
            // Body
            this.ctx.beginPath();
            this.ctx.moveTo(200, 120);
            this.ctx.lineTo(200, 180);
            this.ctx.stroke();
        }
        
        if (this.lives < 4) {
            // Left arm
            this.ctx.beginPath();
            this.ctx.moveTo(200, 140);
            this.ctx.lineTo(170, 160);
            this.ctx.stroke();
        }
        
        if (this.lives < 3) {
            // Right arm
            this.ctx.beginPath();
            this.ctx.moveTo(200, 140);
            this.ctx.lineTo(230, 160);
            this.ctx.stroke();
        }
        
        if (this.lives < 2) {
            // Left leg
            this.ctx.beginPath();
            this.ctx.moveTo(200, 180);
            this.ctx.lineTo(170, 220);
            this.ctx.stroke();
        }
        
        if (this.lives < 1) {
            // Right leg
            this.ctx.beginPath();
            this.ctx.moveTo(200, 180);
            this.ctx.lineTo(230, 220);
            this.ctx.stroke();
        }
    }
    
    displayWord() {
        const wordContainer = document.getElementById('wordContainer');
        wordContainer.innerHTML = '';
        
        for (let letter of this.currentWord) {
            const letterDiv = document.createElement('div');
            letterDiv.className = 'letter';
            
            if (this.guessedLetters.has(letter)) {
                letterDiv.textContent = letter;
                letterDiv.classList.add('revealed');
            } else {
                letterDiv.textContent = '';
            }
            
            wordContainer.appendChild(letterDiv);
        }
    }
    
    createKeyboard() {
        const keyboardContainer = document.getElementById('keyboardContainer');
        keyboardContainer.innerHTML = '';
        
        const rows = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
        ];
        
        rows.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';
            
            row.forEach(letter => {
                const key = document.createElement('button');
                key.className = 'key';
                key.textContent = letter;
                key.dataset.letter = letter;
                
                if (this.guessedLetters.has(letter)) {
                    key.disabled = true;
                    if (this.currentWord.includes(letter)) {
                        key.classList.add('correct');
                    } else {
                        key.classList.add('incorrect');
                    }
                }
                
                key.addEventListener('click', () => this.guessLetter(letter));
                rowDiv.appendChild(key);
            });
            
            keyboardContainer.appendChild(rowDiv);
        });
    }
    
    guessLetter(letter) {
        if (this.gameOver || this.guessedLetters.has(letter)) {
            return;
        }
        
        this.guessedLetters.add(letter);
        
        if (this.currentWord.includes(letter)) {
            // Correct guess
            this.updateDisplay('Correct! Well done!', 'success');
        } else {
            // Incorrect guess
            this.lives--;
            this.updateDisplay(`Wrong! The letter "${letter}" is not in the word.`, 'error');
        }
        
        this.drawHangman();
        this.displayWord();
        this.createKeyboard();
        this.updateDisplay();
        
        this.checkGameEnd();
    }
    
    updateDisplay(message = null, type = null) {
        const livesCount = document.getElementById('livesCount');
        const messageEl = document.getElementById('message');
        
        livesCount.textContent = this.lives;
        
        if (message) {
            messageEl.textContent = message;
            messageEl.className = type === 'success' ? 'success' : type === 'error' ? 'error' : '';
        }
        
        // Update score display
        document.getElementById('wins').textContent = this.wins;
        document.getElementById('losses').textContent = this.losses;
    }
    
    checkGameEnd() {
        const wordGuessed = this.currentWord.split('').every(letter => 
            this.guessedLetters.has(letter)
        );
        
        if (wordGuessed) {
            this.gameOver = true;
            this.wins++;
            this.saveScores();
            this.showGameOverModal(true);
        } else if (this.lives <= 0) {
            this.gameOver = true;
            this.losses++;
            this.saveScores();
            this.showGameOverModal(false);
        }
    }
    
    showGameOverModal(won) {
        const modal = document.getElementById('gameOverModal');
        const title = document.getElementById('gameOverTitle');
        const message = document.getElementById('gameOverMessage');
        const correctWord = document.getElementById('correctWord');
        
        if (won) {
            title.textContent = '🎉 Congratulations!';
            title.style.color = '#28a745';
            message.textContent = 'You guessed the word correctly!';
        } else {
            title.textContent = '💀 Game Over!';
            title.style.color = '#dc3545';
            message.textContent = 'You ran out of lives!';
        }
        
        correctWord.textContent = this.currentWord;
        modal.style.display = 'block';
    }
    
    hideGameOverModal() {
        document.getElementById('gameOverModal').style.display = 'none';
    }
    
    newGame() {
        this.hideGameOverModal();
        this.initializeGame();
    }
    
    exitGame() {
        this.hideGameOverModal();
        // Reset game state without starting a new game
        this.currentWord = '';
        this.guessedLetters.clear();
        this.lives = 6;
        this.gameOver = false;
        
        // Clear the display
        this.drawHangman();
        this.displayWord();
        this.createKeyboard();
        this.updateDisplay('Click "New Game" to start playing!');
    }
    
    getHint() {
        if (this.gameOver) return;
        
        const unguessedLetters = this.currentWord.split('').filter(letter => 
            !this.guessedLetters.has(letter)
        );
        
        if (unguessedLetters.length > 0) {
            const hintLetter = unguessedLetters[0];
            this.guessLetter(hintLetter);
            this.updateDisplay(`Hint: The word contains the letter "${hintLetter}"`, 'hint');
        }
    }
    
    saveScores() {
        localStorage.setItem('hangmanWins', this.wins);
        localStorage.setItem('hangmanLosses', this.losses);
    }
    
    loadScores() {
        this.wins = parseInt(localStorage.getItem('hangmanWins')) || 0;
        this.losses = parseInt(localStorage.getItem('hangmanLosses')) || 0;
        this.updateDisplay();
    }
    
    setupEventListeners() {
        // New game button
        document.getElementById('newGameBtn').addEventListener('click', () => {
            this.newGame();
        });
        
        // Hint button
        document.getElementById('hintBtn').addEventListener('click', () => {
            this.getHint();
        });
        
        // Play again button in modal
        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.newGame();
        });
        
        // Exit button in modal
        document.getElementById('exitBtn').addEventListener('click', () => {
            this.exitGame();
        });
        
        // Keyboard input
        document.addEventListener('keydown', (e) => {
            if (this.gameOver) return;
            
            const key = e.key.toUpperCase();
            if (/^[A-Z]$/.test(key) && !this.guessedLetters.has(key)) {
                this.guessLetter(key);
            }
        });
        
        // Close modal when clicking outside
        document.getElementById('gameOverModal').addEventListener('click', (e) => {
            if (e.target.id === 'gameOverModal') {
                this.hideGameOverModal();
            }
        });
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new HangmanGame();
}); 