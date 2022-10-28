class ClassProduct {
  compareProduct(A, B) {
    if (A._id == B._id && A.memory == B.memory && A.color == B.color) {
      return true;
    }
    return false;
  }
}

module.exports = new ClassProduct();
