const truncate = (s, n = 15) => {
  let x = s;
  let noOfCharactersToDisplay = n;
  if (x.length > noOfCharactersToDisplay) {
    return x.slice(0, noOfCharactersToDisplay) + "...";
  } else {
    return x + "...";
  }
};

export default truncate;
