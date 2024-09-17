const { expect } = require('chai');
import addMatrices from '../src/operations/add';
import multiplyMatrices from '../src/operations/multiply';
import divideMatrices from '../src/operations/divide';
import determinant from '../src/operations/det';


describe('Matrix operations', () => {
  describe('determinant()', () => {
    it('should return null for non-square matrices', () => {
      const matrix = [[1, 2, 3], [4, 5, 6]];
      expect(determinant(matrix)).to.be.null;
    });

    it('should return the correct determinant for a 1x1 matrix', () => {
      const matrix = [[5]];
      expect(determinant(matrix)).to.equal(5);
    });

    it('should return the correct determinant for a 2x2 matrix', () => {
      const matrix = [[1, 2], [3, 4]];
      expect(determinant(matrix)).to.equal(-2);
    });

    it('should return the correct determinant for a 3x3 matrix', () => {
      const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      expect(determinant(matrix)).to.equal(0); // Матрица вырожденная (singular)
    });

    it('return null, if accept a not-Square matrix', () => {
      const matrix = [[2, 2, 4], [15, 12, 48]];

      expect(determinant(matrix)).to.be.null;
    })
  });

  describe('divideMatrices()', () => {
    it('should divide matrix elements by corresponding elements from another matrix', () => {
      const matrixA = [[10, 20], [30, 40]];
      const matrixB = [[2, 5], [3, 4]];

      const result = divideMatrices(matrixA, matrixB);
      expect(result).to.deep.equal([[5, 4], [10, 10]]);
    });

    it('should return null if the matrices are invalid for division', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 0], [7, 8]]; // Деление на 0

      const result = divideMatrices(matrixA, matrixB);
      expect(result).to.be.null;
    });
  });

  describe('addMatrices()', () => {
    it('should add two matrices correctly', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6], [7, 8]];

      const result = addMatrices(matrixA, matrixB);
      expect(result).to.deep.equal([[6, 8], [10, 12]]);
    });

    it('should return null if the matrices are invalid for addition', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6]];

      const result = addMatrices(matrixA, matrixB);
      expect(result).to.be.null;
    });
  });

  describe('multiplyMatrices()', () => {
    it('should multiply two matrices correctly', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[2, 0], [1, 2]];

      const result = multiplyMatrices(matrixA, matrixB);
      expect(result).to.deep.equal([[4, 4], [10, 8]]);
    });

    it('should return null if the matrices are invalid for multiplication', () => {
      const matrixA = [[1, 2], [3, 4]];
      const matrixB = [[5, 6]];

      const result = multiplyMatrices(matrixA, matrixB);
      expect(result).to.be.null;
    });
  });
});
