export default function (matrixA, matrixB) {
  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) return null;

  if (matrixB.some(row => row.some(value => value === 0))) {
    return null;
  }

  return matrixA.map((row, i) =>
    row.map((value, j) => value / matrixB[i][j])
  );
}
