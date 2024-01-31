export const isEmail = (input = "") => {
  const shouldContain = ["@", ".com"];
  const slicedInput = input.slice();

  for (let i = 0; i < shouldContain.length; i++) {
    if (!slicedInput.includes(shouldContain[i])) return false;
  }
  const addressSignIndex = slicedInput.indexOf("@");
  if (slicedInput[0] === "@" || slicedInput[addressSignIndex + 1] === ".")
    return false;
  return true;
};

export const isLength = (input = "", min = 6, max = 10) => {
  if (input === null) return;
  if (input.length >= min && input.length <= max) return true;
  return false;
};

export const isMin = (input = "", val = 3) => {
  if (input === null) return;
  if (input.length >= val) return true;
  return false;
};

export const isMax = (input = "", val = 16) => {
  if (input === null) return;
  if (input.length <= val) return true;
  return false;
};
