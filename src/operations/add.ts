export default function add (matrixA, matrixB) {
  if (!Array.isArray(matrixA) || !Array.isArray(matrixB)) return null;
  if (matrixA.length !== matrixB.length || matrixA.some((row, i) => row.length !== matrixB[i].length)) {
    return null;
  }

  return matrixA.map((row, i) =>
    row.map((value, j) => value + matrixB[i][j])
  );
}
