const getArgs = (args) => {
  const result = {};

  const [exec, file, ...restArgs] = args;
  restArgs.forEach((el, index, arr) => {
    if (el[0] == "-") {
      //next element is not the last one
      if (index != arr.length - 1) {
        //next element doesn't start with -
        if (arr[index + 1][0] != "-") {
          result[el[1]] = arr[index + 1];
        } else {
          result[el[1]] = true;
        }
      } else {
        result[el[1]] = true;
      }
    }
  });

  return result;
};

export { getArgs };
