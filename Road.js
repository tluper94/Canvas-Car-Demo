class Road {
  constructor(texture, width) {
    this.texture = texture;
    this.width = width;
    this.height = 1000;
  }

  update(height) {
    this.height = height;
  }

  draw(ctx) {
    console.log(this.texture);
    ctx.save();
    const pat = ctx.createPattern(this.texture, 'repeat');
    ctx.fillStyle = pat;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.fill();
    ctx.restore();
  }
}
