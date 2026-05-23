// Fun Games Implementation
(() => {
  const funGames = {};

  // ============= SNAKE GAME =============
  funGames.snake = {
    canvas: null,
    ctx: null,
    gridSize: 20,
    snake: [],
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    food: { x: 0, y: 0 },
    score: 0,
    gameLoop: null,
    speed: 120,
    keyHandler: null,

    init() {
      this.stop(); // Stop any existing game first
      this.canvas = document.getElementById('snakeCanvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.reset();
      this.spawnFood();
      this.setupControls();
      this.start();
    },

    reset() {
      this.snake = [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 }
      ];
      this.direction = { x: 1, y: 0 };
      this.nextDirection = { x: 1, y: 0 };
      this.score = 0;
      const scoreEl = document.getElementById('snakeScore');
      const feedbackEl = document.getElementById('snakeFeedback');
      if (scoreEl) scoreEl.textContent = `Score: ${this.score}`;
      if (feedbackEl) feedbackEl.textContent = '';
    },

    setupControls() {
      if (this.keyHandler) {
        document.removeEventListener('keydown', this.keyHandler);
      }
      this.keyHandler = (e) => {
        const key = e.key;
        if (key === 'ArrowUp' && this.direction.y === 0) {
          this.nextDirection = { x: 0, y: -1 };
          e.preventDefault();
        } else if (key === 'ArrowDown' && this.direction.y === 0) {
          this.nextDirection = { x: 0, y: 1 };
          e.preventDefault();
        } else if (key === 'ArrowLeft' && this.direction.x === 0) {
          this.nextDirection = { x: -1, y: 0 };
          e.preventDefault();
        } else if (key === 'ArrowRight' && this.direction.x === 0) {
          this.nextDirection = { x: 1, y: 0 };
          e.preventDefault();
        }
      };
      document.addEventListener('keydown', this.keyHandler);
    },

    spawnFood() {
      const cells = this.canvas.width / this.gridSize;
      this.food = {
        x: Math.floor(Math.random() * cells),
        y: Math.floor(Math.random() * cells)
      };
      // Make sure food doesn't spawn on snake
      const onSnake = this.snake.some(segment => 
        segment.x === this.food.x && segment.y === this.food.y
      );
      if (onSnake) this.spawnFood();
    },

    update() {
      this.direction = this.nextDirection;
      const head = { 
        x: this.snake[0].x + this.direction.x,
        y: this.snake[0].y + this.direction.y
      };

      // Check wall collision
      const cells = this.canvas.width / this.gridSize;
      if (head.x < 0 || head.x >= cells || head.y < 0 || head.y >= cells) {
        this.gameOver();
        return;
      }

      // Check self collision
      if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        this.gameOver();
        return;
      }

      this.snake.unshift(head);

      // Check food collision
      if (head.x === this.food.x && head.y === this.food.y) {
        this.score += 10;
        const scoreEl = document.getElementById('snakeScore');
        if (scoreEl) scoreEl.textContent = `Score: ${this.score}`;
        this.spawnFood();
      } else {
        this.snake.pop();
      }
    },

    draw() {
      if (!this.canvas || !this.ctx) return;
      this.ctx.fillStyle = '#f0f0f0';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Draw snake
      this.snake.forEach((segment, i) => {
        this.ctx.fillStyle = i === 0 ? '#2d5' : '#4d8';
        this.ctx.fillRect(
          segment.x * this.gridSize + 1,
          segment.y * this.gridSize + 1,
          this.gridSize - 2,
          this.gridSize - 2
        );
      });

      // Draw food
      this.ctx.fillStyle = '#f44';
      this.ctx.beginPath();
      this.ctx.arc(
        this.food.x * this.gridSize + this.gridSize / 2,
        this.food.y * this.gridSize + this.gridSize / 2,
        this.gridSize / 2 - 2,
        0,
        Math.PI * 2
      );
      this.ctx.fill();
    },

    start() {
      if (this.gameLoop) clearInterval(this.gameLoop);
      this.gameLoop = setInterval(() => {
        this.update();
        this.draw();
      }, this.speed);
    },

    gameOver() {
      this.stop();
      const feedbackEl = document.getElementById('snakeFeedback');
      if (feedbackEl) {
        feedbackEl.textContent = `Game Over! Final Score: ${this.score} 🐍`;
        feedbackEl.className = 'feedback try';
      }
    },

    stop() {
      if (this.gameLoop) {
        clearInterval(this.gameLoop);
        this.gameLoop = null;
      }
      if (this.keyHandler) {
        document.removeEventListener('keydown', this.keyHandler);
        this.keyHandler = null;
      }
    }
  };

  // ============= CATCH GAME =============
  funGames.catch = {
    canvas: null,
    ctx: null,
    basket: { x: 0, width: 60, height: 20 },
    items: [],
    score: 0,
    timeLeft: 60,
    gameLoop: null,
    spawnTimer: null,
    countdownTimer: null,
    mouseHandler: null,
    keyHandler: null,

    init() {
      this.stop(); // Stop any existing game first
      this.canvas = document.getElementById('catchCanvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.reset();
      this.setupControls();
      this.start();
    },

    reset() {
      this.basket.x = this.canvas.width / 2 - this.basket.width / 2;
      this.items = [];
      this.score = 0;
      this.timeLeft = 60;
      const scoreEl = document.getElementById('catchScore');
      const timeEl = document.getElementById('catchTime');
      const feedbackEl = document.getElementById('catchFeedback');
      if (scoreEl) scoreEl.textContent = `Score: ${this.score}`;
      if (timeEl) timeEl.textContent = `Time: ${this.timeLeft}s`;
      if (feedbackEl) feedbackEl.textContent = '';
    },

    setupControls() {
      if (this.mouseHandler) {
        this.canvas.removeEventListener('mousemove', this.mouseHandler);
      }
      this.mouseHandler = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.basket.x = e.clientX - rect.left - this.basket.width / 2;
        this.basket.x = Math.max(0, Math.min(this.canvas.width - this.basket.width, this.basket.x));
      };
      this.canvas.addEventListener('mousemove', this.mouseHandler);

      if (this.keyHandler) {
        document.removeEventListener('keydown', this.keyHandler);
      }
      this.keyHandler = (e) => {
        if (e.key === 'ArrowLeft') {
          this.basket.x = Math.max(0, this.basket.x - 20);
          e.preventDefault();
        } else if (e.key === 'ArrowRight') {
          this.basket.x = Math.min(this.canvas.width - this.basket.width, this.basket.x + 20);
          e.preventDefault();
        }
      };
      document.addEventListener('keydown', this.keyHandler);
    },

    spawnItem() {
      const isBomb = Math.random() < 0.15; // 15% chance of bomb
      this.items.push({
        x: Math.random() * (this.canvas.width - 30),
        y: 0,
        speed: 2 + Math.random() * 2,
        type: isBomb ? 'bomb' : 'apple',
        size: 25
      });
    },

    update() {
      this.items = this.items.filter(item => {
        item.y += item.speed;

        // Check collision with basket
        if (item.y + item.size >= this.canvas.height - this.basket.height &&
            item.x + item.size > this.basket.x &&
            item.x < this.basket.x + this.basket.width) {
          if (item.type === 'apple') {
            this.score += 10;
          } else {
            this.score = Math.max(0, this.score - 20);
          }
          const scoreEl = document.getElementById('catchScore');
          if (scoreEl) scoreEl.textContent = `Score: ${this.score}`;
          return false;
        }

        // Remove if off screen
        return item.y < this.canvas.height;
      });
    },

    draw() {
      if (!this.canvas || !this.ctx) return;
      this.ctx.fillStyle = '#87CEEB';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Draw basket
      this.ctx.fillStyle = '#8B4513';
      this.ctx.fillRect(
        this.basket.x,
        this.canvas.height - this.basket.height,
        this.basket.width,
        this.basket.height
      );

      // Draw items
      this.ctx.font = '25px Arial';
      this.items.forEach(item => {
        this.ctx.fillText(item.type === 'apple' ? '🍎' : '💣', item.x, item.y);
      });
    },

    start() {
      this.gameLoop = setInterval(() => {
        this.update();
        this.draw();
      }, 1000 / 60);

      this.spawnTimer = setInterval(() => {
        this.spawnItem();
      }, 1000);

      this.countdownTimer = setInterval(() => {
        this.timeLeft--;
        const timeEl = document.getElementById('catchTime');
        if (timeEl) timeEl.textContent = `Time: ${this.timeLeft}s`;
        if (this.timeLeft <= 0) {
          this.gameOver();
        }
      }, 1000);
    },

    gameOver() {
      this.stop();
      const feedbackEl = document.getElementById('catchFeedback');
      if (feedbackEl) {
        feedbackEl.textContent = `Time's up! Final Score: ${this.score} 🎯`;
        feedbackEl.className = 'feedback good';
      }
    },

    stop() {
      if (this.gameLoop) {
        clearInterval(this.gameLoop);
        this.gameLoop = null;
      }
      if (this.spawnTimer) {
        clearInterval(this.spawnTimer);
        this.spawnTimer = null;
      }
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer);
        this.countdownTimer = null;
      }
      if (this.mouseHandler) {
        this.canvas.removeEventListener('mousemove', this.mouseHandler);
        this.mouseHandler = null;
      }
      if (this.keyHandler) {
        document.removeEventListener('keydown', this.keyHandler);
        this.keyHandler = null;
      }
    }
  };

  // ============= BALLOON POP SPEED GAME =============
  funGames.balloonPopSpeed = {
    area: null,
    score: 0,
    timeLeft: 30,
    gameTimer: null,
    spawnTimer: null,

    init() {
      this.stop(); // Stop any existing game first
      this.area = document.getElementById('balloonPopArea');
      if (!this.area) return;
      this.reset();
      this.start();
    },

    reset() {
      this.score = 0;
      this.timeLeft = 30;
      this.area.innerHTML = '';
      const scoreEl = document.getElementById('balloonPopScore');
      const timeEl = document.getElementById('balloonPopTime');
      if (scoreEl) scoreEl.textContent = `Score: ${this.score}`;
      if (timeEl) timeEl.textContent = `Time: ${this.timeLeft}s`;
    },

    spawnBalloon() {
      if (!this.area) return;
      const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff922b', '#cc5de8'];
      const balloon = document.createElement('div');
      balloon.className = 'speed-balloon';
      balloon.textContent = '🎈';
      balloon.style.left = Math.random() * 80 + '%';
      balloon.style.top = Math.random() * 80 + '%';
      balloon.style.color = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.fontSize = (20 + Math.random() * 30) + 'px';
      
      balloon.addEventListener('click', () => {
        this.score += 5;
        const scoreEl = document.getElementById('balloonPopScore');
        if (scoreEl) scoreEl.textContent = `Score: ${this.score}`;
        balloon.remove();
      });

      this.area.appendChild(balloon);

      // Remove after 2 seconds if not clicked
      setTimeout(() => {
        if (balloon.parentElement) balloon.remove();
      }, 2000);
    },

    start() {
      this.spawnTimer = setInterval(() => {
        this.spawnBalloon();
      }, 500);

      this.gameTimer = setInterval(() => {
        this.timeLeft--;
        const timeEl = document.getElementById('balloonPopTime');
        if (timeEl) timeEl.textContent = `Time: ${this.timeLeft}s`;
        if (this.timeLeft <= 0) {
          this.gameOver();
        }
      }, 1000);
    },

    gameOver() {
      this.stop();
      if (this.area) {
        this.area.innerHTML = `<div style="text-align:center; padding:50px; font-size:24px;">
          Game Over!<br>Final Score: ${this.score} 🎈
        </div>`;
      }
    },

    stop() {
      if (this.spawnTimer) {
        clearInterval(this.spawnTimer);
        this.spawnTimer = null;
      }
      if (this.gameTimer) {
        clearInterval(this.gameTimer);
        this.gameTimer = null;
      }
    }
  };

  // Export for use in app.js
  globalThis.funGames = funGames;
})();
