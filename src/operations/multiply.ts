export default function (matrixA, matrixB) {
  if (matrixA[0].length !== matrixB.length) return null;

  return matrixA.map((row, i) =>
    matrixB[0].map((_, j) =>
      row.reduce((sum, elm, k) => sum + elm * matrixB[k][j], 0)
    )
  );
}
