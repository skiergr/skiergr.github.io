const game = () => {
    let pScore = 0;
    let cScore = 0;
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const backButton = document.querySelector('.back-button')
        const match = document.querySelector('.match');
        const choose = document.querySelector('.winner');
        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            introScreen.classList.remove('fadeIn');
            backButton.classList.add('fadeIn');
            backButton.classList.remove('fadeOut');
            match.classList.add('fadeIn');
            match.classList.remove('fadeOut');
        });
        backButton.addEventListener('click', () =>{
            introScreen.classList.add('fadeIn');
            introScreen.classList.remove('fadeOut');
            backButton.classList.add('fadeOut');
            backButton.classList.remove('fadeIn');
            match.classList.add('fadeOut');
            match.classList.remove('fadeIn');
            pScore = 0;
            cScore = 0;
            choose.textContent = 'Choose an option'
            updateScore ();
        });
    };
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });
        const computerOptions = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        options.forEach(options => {
            options.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = () => {
        const playerScore  = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice) {
            winner.textContent = 'Tie!';
            return;
        }
        if(playerChoice === 'Rock'){
            if(computerChoice === 'Scissors'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Lizard'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Paper'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Spock'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'Scissors'){
            if(computerChoice === 'Paper'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Lizard'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Rock'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Spock'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'Paper'){
            if(computerChoice === 'Rock'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Spock'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Scissors'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Lizard'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'Lizard'){
            if(computerChoice === 'Spock'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Paper'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Rock'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Scissors'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'Spock'){
            if(computerChoice === 'Scissors'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Rock'){
                winner.textContent = 'You Win!'
                pScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Lizard'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
            if(computerChoice === 'Paper'){
                winner.textContent = 'You Lose!';
                cScore++;
                updateScore();
                return;
            }
        }
    }
    startGame ();
    playMatch ();
};
game ();