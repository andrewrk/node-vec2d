var v = require('./')
  , Vec2d = v.Vec2d
  , assert = require('assert')

describe("v()", function() {
  it("no args", function() {
    var v1 = v();
    assert.strictEqual(v1.x, 0);
    assert.strictEqual(v1.y, 0);
  });
  it("x, y", function() {
    var v1 = v(-1, 5);
    assert.strictEqual(v1.x, -1);
    assert.strictEqual(v1.y, 5);
  });
  it("array", function() {
    var v1 = v([4, 5]);
    assert.strictEqual(v1.x, 4);
    assert.strictEqual(v1.y, 5);
  });
  it("object", function() {
    var v1 = v({x: 9, y: 8});
    assert.strictEqual(v1.x, 9);
    assert.strictEqual(v1.y, 8);
  });
  it("string coords", function() {
    var v1 = v("1", "-1.5");
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, -1.5);
  });
  it("deserialize", function() {
    var v1 = v(v(1, -3.5).toString());
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, -3.5);
    var v2 = v(v(-111, 9876543210.123456789).toString());
    assert.strictEqual(v2.x, -111);
    assert.strictEqual(v2.y, 9876543210.123456789);
  });
  it("invalid deserialize", function() {
    assert.throws(function() {
      return v("lol hax");
    }, /cannot parse/);
  });
});
describe("Vec2d", function() {
  it("offset", function() {
    var v1 = new Vec2d(1, 2);
    var v2 = v1.offset(10, -10);
    v1.x = -100;
    assert.strictEqual(v2.x, 11);
    assert.strictEqual(v2.y, -8);
  });
  it("add", function() {
    var v1 = new Vec2d(1, 2);
    var v2 = new Vec2d(-1, -2);
    var v3 = v1.add(v2);
    assert.strictEqual(v3, v1);
    assert.strictEqual(v1.x, 0);
    assert.strictEqual(v1.y, 0);
  });
  it("sub", function() {
    var v1 = new Vec2d(1, 2);
    var v2 = new Vec2d(-1, -2);
    var v3 = v1.sub(v2);
    assert.strictEqual(v3, v1);
    assert.strictEqual(v1.x, 2);
    assert.strictEqual(v1.y, 4);
  });
  it("plus", function() {
    var v1 = new Vec2d(1, 2);
    var v2 = new Vec2d(-1, 0);
    var v3 = v1.plus(v2);
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, 2);
    assert.strictEqual(v2.x, -1);
    assert.strictEqual(v2.y, 0);
    assert.strictEqual(v3.x, 0);
    assert.strictEqual(v3.y, 2);
  });
  it("minus", function() {
    var v1 = new Vec2d(1, 2);
    var v2 = new Vec2d(-1, 0);
    var v3 = v1.minus(v2);
    assert.strictEqual(v1.x, 1);
    assert.strictEqual(v1.y, 2);
    assert.strictEqual(v2.x, -1);
    assert.strictEqual(v2.y, 0);
    assert.strictEqual(v3.x, 2);
    assert.strictEqual(v3.y, 2);
  });
  it("neg", function() {
    var v1 = new Vec2d(1, -2);
    var v2 = v1.neg();
    assert.strictEqual(v1, v2);
    assert.strictEqual(v1.x, -1);
    assert.strictEqual(v1.y, 2);
  });
  it("mult", function() {
    var v1 = new Vec2d(-1, 1);
    var v2 = new Vec2d(2, -3);
    var v3 = v1.mult(v2);
    assert.strictEqual(v1, v3);
    assert.strictEqual(v3.x, -2);
    assert.strictEqual(v3.y, -3);
  });
  it("times", function() {
    var v1 = new Vec2d(-1, 1);
    var v2 = new Vec2d(2, -3);
    var v3 = v1.times(v2);
    assert.notStrictEqual(v1, v3);
    assert.strictEqual(v3.x, -2);
    assert.strictEqual(v3.y, -3);
  });
  it("div", function() {
    var v1 = new Vec2d(6, 4);
    var v2 = new Vec2d(3, 2);
    var v3 = v1.div(v2);
    assert.strictEqual(v3, v1);
    assert.strictEqual(v1.x, 2);
    assert.strictEqual(v1.y, 2);
    assert.strictEqual(v2.x, 3);
    assert.strictEqual(v2.y, 2);
  });
  it("divBy", function() {
    var v1 = new Vec2d(6, 4);
    var v2 = new Vec2d(3, 2);
    var v3 = v1.divBy(v2);
    assert.strictEqual(v1.x, 6);
    assert.strictEqual(v1.y, 4);
    assert.strictEqual(v3.x, 2);
    assert.strictEqual(v3.y, 2);
    assert.strictEqual(v2.x, 3);
    assert.strictEqual(v2.y, 2);
  });
  it("scale");
  it("scaled");
  it("clone");
  it("apply");
  it("applied");
  it("equals");
  it("toString");
  it("length");
  it("lengthSqrd");
  it("angle");
  it("normalize");
  it("normalized");
  it("boundMin");
  it("boundMax");
  it("floor");
  it("floored");
  it("ceil");
  it("ceiled");
  it("project");
  it("dot");
  it("rotate", function() {
    var v1 = v(0, 1);
    var v2 = v(1, 1);
    var v3 = v2.rotate(v1);
    assert.strictEqual(v3, v2);
    assert.strictEqual(v2.x, -1);
    assert.strictEqual(v2.y, 1);
  });
  it("rotated");
  it("distance");
  it("distanceSqrd");
});
