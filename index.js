module.exports = v;
v.Vec2 = Vec2;

var re = /\((-?[.\d]+), (-?[.\d]+)\)/;

function Vec2(x, y) {
  this.x = x;
  this.y = y;
}

function v(xOrPair, y){
  if (xOrPair == null) {
    return new Vec2(0, 0, 0);
  } else if (Array.isArray(xOrPair)) {
    return new Vec2(parseFloat(xOrPair[0], 10), parseFloat(xOrPair[1], 10));
  } else if (typeof xOrPair === 'object') {
    return new Vec2(parseFloat(xOrPair.x, 10), parseFloat(xOrPair.y, 10));
  } else if (typeof xOrPair === 'string' && y == null) {
    var match = xOrPair.match(re);
    if (match) {
      return new Vec2(parseFloat(match[1], 10), parseFloat(match[2], 10));
    } else {
      throw new Error("vec2: cannot parse: " + xOrPair);
    }
  } else {
    return new Vec2(parseFloat(xOrPair, 10), parseFloat(y, 10));
  }
}

Vec2.prototype.offset = function(dx, dy){
  return new Vec2(this.x + dx, this.y + dy);
};
Vec2.prototype.add = function(other){
  this.x += other.x;
  this.y += other.y;
  return this;
};
Vec2.prototype.sub = function(other){
  this.x -= other.x;
  this.y -= other.y;
  return this;
};
Vec2.prototype.plus = function(other){
  return this.clone().add(other);
};
Vec2.prototype.minus = function(other){
  return this.clone().sub(other);
};
Vec2.prototype.neg = function(){
  this.x = -this.x;
  this.y = -this.y;
  return this;
};
Vec2.prototype.mult = function(other){
  this.x *= other.x;
  this.y *= other.y;
  return this;
};
Vec2.prototype.times = function(other){
  return this.clone().mult(other);
};
Vec2.prototype.div = function(other){
  this.x /= other.x;
  this.y /= other.y;
  return this;
};
Vec2.prototype.divBy = function(other){
  return this.clone().div(other);
};
Vec2.prototype.scale = function(scalar){
  this.x *= scalar;
  this.y *= scalar;
  return this;
};
Vec2.prototype.scaled = function(scalar){
  return this.clone().scale(scalar);
};
Vec2.prototype.clone = function(){
  return new Vec2(this.x, this.y);
};
Vec2.prototype.apply = function(func){
  this.x = func(this.x);
  this.y = func(this.y);
  return this;
};
Vec2.prototype.applied = function(func){
  return this.clone().apply(func);
};
Vec2.prototype.distanceSqrd = function(other){
  var dx = other.x - this.x;
  var dy = other.y - this.y;
  return dx * dx + dy * dy;
};
Vec2.prototype.distance = function(other){
  return Math.sqrt(this.distanceSqrd(other));
};
Vec2.prototype.equals = function(other){
  return this.x === other.x && this.y === other.y;
};
Vec2.prototype.toString = function(){
  return "(" + this.x + ", " + this.y + ")";
};
Vec2.prototype.lengthSqrd = function(){
  return this.x * this.x + this.y * this.y;
};
Vec2.prototype.length = function(){
  return Math.sqrt(this.lengthSqrd());
};
Vec2.prototype.angle = function(){
  if (this.lengthSqrd() === 0) {
    return 0;
  } else {
    return Math.atan2(this.y, this.x);
  }
};
Vec2.prototype.normalize = function(){
  var length;
  length = this.length();
  if (length === 0) {
    return this;
  } else {
    return this.scale(1 / length);
  }
};
Vec2.prototype.normalized = function(){
  return this.clone().normalize();
};
Vec2.prototype.boundMin = function(other){
  if (this.x < other.x) {
    this.x = other.x;
  }
  if (this.y < other.y) {
    return this.y = other.y;
  }
};
Vec2.prototype.boundMax = function(other){
  if (this.x > other.x) {
    this.x = other.x;
  }
  if (this.y > other.y) {
    return this.y = other.y;
  }
};
Vec2.prototype.floor = function(){
  return this.apply(Math.floor);
};
Vec2.prototype.floored = function(){
  return this.applied(Math.floor);
};
Vec2.prototype.ceil = function(){
  return this.apply(Math.ceil);
};
Vec2.prototype.ceiled = function(){
  return this.applied(Math.ceil);
};
Vec2.prototype.project = function(other){
  this.scale(this.dot(other) / other.lengthSqrd());
  return this;
};
Vec2.prototype.dot = function(other){
  return this.x * other.x + this.y * other.y;
};
Vec2.prototype.rotate = function(other){
  this.x = this.x * other.x - this.y * other.y;
  this.y = this.x * other.y + this.y * other.x;
  return this;
};
