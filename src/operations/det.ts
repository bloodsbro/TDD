export default function determinant (matrix) {
  if (matrix.length !== matrix[0].length) return null;

  const size = matrix.length;

  // Базовий випадок для матриці 1x1
  if (size === 1) return matrix[0][0];

  // Базовий випадок для матриці 2x2
  if (size === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  // Розкладання за першим рядком для матриць більшого розміру
  let det = 0;
  for (let i = 0; i < size; i++) {
    const subMatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
    det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * determinant(subMatrix);
  }

  return det;
}
