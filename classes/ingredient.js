class Ingredient {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.speed = 1;
    this.y = 0;
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    /*this.image = new Image();
    this.image.src = srcURL;*/
    this.isGood = Math.round(Math.random());

    this.celery = new Image();
    this.celery.src = "./images/celery1.png";

    this.bacon = new Image();
    this.bacon.src = "./images/bacon.png";

    this.cucumber = new Image();
    this.cucumber.src = "./images/cucumber4.png";

    this.basil = new Image();
    this.basil.src = "./images/basil.png";

    this.chili = new Image();
    this.chili.src = "./images/chili.png";

    this.clam = new Image();
    this.clam.src = "./images/clam.png";

    this.coke = new Image();
    this.coke.src = "./images/coke2.png";

    this.lemon = new Image();
    this.lemon.src = "./images/lemon.png";

    this.orange = new Image();
    this.orange.src = "./images/orange2.png";

    this.pineapple = new Image();
    this.pineapple.src = "./images/pineapple.png";

    this.rum = new Image();
    this.rum.src = "./images/rum.png";

    this.tomato = new Image();
    this.tomato.src = "./images/tomato.png";

    this.vodka = new Image();
    this.tomato.src = "./images/vodka.png";

    this.worcester = new Image();
    this.worcester.src = "./images/worcester.png";

    this.goodIngredients = [
      this.celery,
      this.bacon,
      this.clam,
      this.lemon,
      this.tomato,
      this.vodka,
      this.worcester,
    ];
    this.badIngredients = [
      this.cucumber,
      this.basil,
      this.chili,
      this.coke,
      this.orange,
      this.pineapple,
      this.rum,
    ];

    const arraySelection = this.isGood
      ? this.goodIngredients
      : this.badIngredients;
    const randomIndex = Math.floor(Math.random() * arraySelection.length);
    this.image = arraySelection[randomIndex];
  }

  drawIngredient = () => {
    //ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  /*ingredientGravity = () => {
    this.y++;
  };*/

  ingredientMove = () => {
    this.y += this.speed;
  };

  ingredientHasHittedTheGround = () => {
    return this.y + this.height > canvas.height;
  };
}
