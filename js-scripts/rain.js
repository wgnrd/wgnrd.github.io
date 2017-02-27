//Hex-Colors of
// Background    FFF0A5
// Drops         468966

var drops = new Array();
var sliders = new Array();

function setup() {
  var canvas = createCanvas(800, 600);
  canvas.parent("rainCanvas")

  for (var i = 0; i < 200; i++) {
    drops.push(new Drop());
  }

  sliders.push(createSlider(0, 255, 70, 1));
  sliders[0].parent("sliderRed");
  sliders[0].style('width', '120px');

  sliders.push(createSlider(0, 255, 137, 1));
  sliders[1].parent("sliderBlue");
  sliders[1].style('width', '120px');

  sliders.push(createSlider(0, 255, 102, 1));
  sliders[2].parent("sliderGreen")
  sliders[2].style('width', '120px');
}

function draw() {
  background('rgb(255, 240, 165)');

  var red = sliders[0].value();
  var blue = sliders[1].value();
  var green = sliders[2].value();

  for (var i = 0; i < drops.length; i++) {
    drops[i].display(red, blue, green);
    drops[i].fall();
  }
}

function Drop() {
  //higher scale = faster and bigger drop
  this.scale = random(3, 25);

  this.y = 0 - random(60, 700);
  this.x = random(width);

  this.display = function(red, blue, green) {
    fill('rgba(' + red + ', ' + blue + ', ' + green + ', 0.7)');

    noStroke();

    rect(this.x, this.y, this.scale, this.scale * 4);
  };

  this.fall = function() {
    this.y += this.scale;

    if (this.y > 660) {
      this.y = random(-150, -60);
    }

  }
}