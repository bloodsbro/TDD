import determinant from "../operations/det";

export default function (matrix) {
  if (matrix.length !== matrix[0].length) return null;

  const det = determinant(matrix);

  return det === 0;
}
