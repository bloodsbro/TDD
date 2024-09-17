import {expect} from "chai";
import isDiagonal from "../src/shape/isDiagonal";
import isSquare from "../src/shape/isSquare";
import isSingular from "../src/shape/isSingular";


describe('isDiagonal()', () => {
  it('should return true if the matrix is diagonal', () => {
    const matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];

    const result = isDiagonal(matrix);
    expect(result).to.be.true;
  });

  it('should return false if the matrix is not diagonal', () => {
    const matrix = [[1, 0, 2], [0, 2, 0], [0, 0, 3]];

    const result = isDiagonal(matrix);
    expect(result).to.be.false;
  });
});

describe('isSquare', () => {
  it('should return true for square matrices', () => {
    const matrix = [[1, 2], [3, 4]];

    expect(isSquare(matrix)).to.be.true;
  });

  it('should return false for non-square matrices', () => {
    const matrix = [[1, 2, 3], [4, 5, 6]];

    expect(isSquare(matrix)).to.be.false;
  });

  it('should return true for a 1x1 matrix', () => {
    const matrix = [[1]];

    expect(isSquare(matrix)).to.be.true;
  });
});

describe('isSingular()', () => {
  it('should return null for non-square matrices', () => {
    const matrix = [[1, 2, 3], [4, 5, 6]];

    expect(isSingular(matrix)).to.be.null;
  });

  it('should return true for singular matrices', () => {
    const matrix = [[1, 2], [2, 4]];

    expect(isSingular(matrix)).to.be.true;
  });

  it('should return false for non-singular matrices', () => {
    const matrix = [[1, 2], [3, 4]];

    expect(isSingular(matrix)).to.be.false;
  });
});
