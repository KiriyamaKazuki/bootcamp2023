const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

//インポート先で使用できるようにする
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;
// -------------------------------------
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// };
// module.exports.mathBlock = math;

// moduleを省くこともできる。
exports.PI = PI;
exports.square = square;
//modules自体を書き換えるとエラーになる。
//modules = 'kenkumakitya';→✗
//暗黙的にmodules = module.exportsが入っているため。