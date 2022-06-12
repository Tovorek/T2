function userObjectCreator(id) {
  const obj = {};

  Object.defineProperty(obj, "userid", {
    value: id,
    writable: false,
  });

  return obj;
}

const obj = userObjectCreator(1);
