export const atLetters = /^[a-zA-Z]+ [a-zA-Z]+$/;

export const atLeastOneUppercase  =  /[A-Z]/g;
export const atLeastOneLowercase = /[a-z]/g;
export const atLeastOneNumeric = /[0-9]/g; 
export const atLeastOneSpecialChar = /[#?!@$%^&*-]/g;
export const eightCharsOrMore= /.{8,}/g;

export const passwordValidRegex = new RegExp(`^(?=${[
    atLeastOneUppercase,
    atLeastOneLowercase,
    atLeastOneNumeric,
    atLeastOneSpecialChar,
    eightCharsOrMore
  ].join(")(?=")}).*$`);