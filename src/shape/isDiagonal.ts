export default function (matrix) {
  return matrix.every((row, i) =>
    row.every((value, j) => (i === j ? true : value === 0))
  );
}
