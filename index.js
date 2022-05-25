const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const grassTexture = new Image(500, 500);
grassTexture.onload = imageLoaded;

grassTexture.src =
  './seamless_tileable_grass_texture_by_demolitiondan_d4u41a9.jpg';

const roadTexture = new Image(500, 500);
roadTexture.onload = imageLoaded;

roadTexture.src = './road_road_0021_01_tiled.jpg';

const carTexture = new Image(60, 45);
carTexture.onload = imageLoaded;

carTexture.src = './Topdown_vehicle_sprites_pack/Audi.png';

let car;
let road;

function imageLoaded() {
  car = new Player(carTexture, 100, 500);
  road = new Road(roadTexture, 600);
  animate();
}

function drawGrass() {
  ctx.save();
  ctx.drawImage();
  ctx.restore();
}

function animate() {
  road.update(canvas.height);
  car.update();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  grassTexture.width = canvas.width;
  grassTexture.height = canvas.height;
  var pat = ctx.createPattern(grassTexture, 'repeat');
  ctx.fillStyle = pat;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}
