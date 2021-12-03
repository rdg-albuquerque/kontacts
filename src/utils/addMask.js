function addMask(str, mask) {
  console.log(str);
  let formatStr = mask;

  for (let i of str) {
    formatStr = formatStr.replace("x", i);
  }

  return formatStr;
}

export default addMask;
