module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
    // the catch next will pass the error
    // to the global error handle
  };
};
