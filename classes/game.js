class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../images/Bar_Background.jpeg";
    this.player = new Glass();
    this.ingredientsArray = [];
    //this.ingredientsArray = [new Ingredient(), new Ingredient()];
    this.isGameOn = true;
    this.canvas = {
      height: 600,
      width: 600,
    };
    this.score = 0;
    this.gameLost = false;
    this.gameWon = false;
    this.ingredientGenerationSpeed = 5000;
    this.levelSpeed = 10000;
  }

  drawScore = () => {
    ctx.fillStyle = "white";
    ctx.font = "24px serif";
    ctx.fillText(this.score, 10, 50);
  };

  drawIngredients = () => {
    this.ingredientsArray.forEach((ingredient) => ingredient.drawIngredient());
  };

  removeIngredientsOnTheGround = () => {
    this.ingredientsArray.forEach((ingredient) => {
      if (ingredient.ingredientHasHittedTheGround()) {
        const index = this.ingredientsArray.indexOf(ingredient);
        this.ingredientsArray.splice(index, 1);
        if (ingredient.isGood) {
          this.score -= 1;
        }
      }
    });
  };

  checkGameOver = () => {
    if (this.score <= -10) {
      this.gameLost = true;
      canvas.style.display = "none";
      gameOverScreen.style.display = "block";
    }
  };

  checkGameWon = () => {
    if (this.score >= 10) {
      this.gameWon = true;
      canvas.style.display = "none";
      gameWonScreen.style.display = "block";
    }
  };

  generateIngredient = () => {
    // create a new ingredient
    let ingredient = new Ingredient();
    //add the ingredient to the array
    this.ingredientsArray.push(ingredient);
  };

  ingredientsGlassCollisions = () => {
    this.ingredientsArray.forEach((ingredient) => {
      if (this.player.checkCollision(ingredient)) {
        if (ingredient.isGood) {
          this.score += 1;
        } else {
          this.score = this.score - 1;
        }
        const index = this.ingredientsArray.indexOf(ingredient);
        this.ingredientsArray.splice(index, 1);
      }
    });
  };

  clearEverything() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  moveEverything = () => {
    this.player.glassMove();
    this.ingredientsArray.forEach((eachIngredient) => {
      eachIngredient.ingredientMove();
    });
    this.removeIngredientsOnTheGround();
  };

  checkCollisions = () => {
    this.ingredientsGlassCollisions();
    this.checkGameOver();
    this.checkGameWon();
  };

  drawEverything = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    //console.log ("drawing")
    //ctx.fillStyle = "green";
    //ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawIngredients();

    this.player.drawGlass();
    this.drawScore();

    //this.ingredientsArray[0].drawIngredient();
    /*this.ingredientsArray.forEach(eachIngredient =>{
            eachIngredient.drawIngredient() })*/
  };

  gameLoop = (ingredientStamp = 0, levelStamp = 0) => {
    //console.log ("game running!")

    //clearing canvas
    this.clearEverything();
    //movement
    this.moveEverything();
    //collision
    this.checkCollisions();
    //drawing elements
    this.drawEverything();
    // if gameLost stop Loop + screen
    // if gameWon stop Loop + screen

    requestAnimationFrame((timestamp) => {
      if (timestamp - ingredientStamp > this.ingredientGenerationSpeed) {
        this.generateIngredient();
        ingredientStamp = timestamp;
      }
      if (timestamp - levelStamp > this.levelSpeed) {
        this.ingredientGenerationSpeed *= 0.5;
        levelStamp = timestamp;
      }
      this.gameLoop(ingredientStamp, levelStamp);
    });
  };
}
