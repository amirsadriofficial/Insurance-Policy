// DESC: Validates if the given national id is a valid Iranian national id
export const validateNationalId = (code: string): boolean => {
  const length = code.length;
  if (length < 8 || parseInt(code, 10) == 0) return false;
  code = ("0000" + code).substr(length + 4 - 10);
  if (parseInt(code.substr(3, 6), 10) == 0) return false;
  const c = parseInt(code.substr(9, 1), 10);
  let s = 0;
  for (let i = 0; i < 9; i++) s += parseInt(code.substr(i, 1), 10) * (10 - i);
  s = s % 11;
  return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
};

// DESC: Validates if the given phone number is a valid Iranian mobile number
export const validatePhoneNumber = (phone: string): boolean => {
  // DESC: Phone number should start with 09 or 9 and the length of the number should be 10 or 11
  const regex = /^(09\d{9}|9\d{9})$/;
  return regex.test(phone);
};
