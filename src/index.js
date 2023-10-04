
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2  !== 0) {
            matrix[i] = matrix[i].reverse();
        }
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }
    console.log(arr);
  return arr;
}
