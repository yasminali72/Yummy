//validation
const namePattern = /^[a-zA-Z]{1,50}([ '-][a-zA-Z]{2,50})*$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passPattern = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; 
const AgePattern = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

export class validation {
  static validateName(signName) {
    return namePattern.test(signName);
  }

  static validateEmail(signEmail) {
    return emailPattern.test(signEmail);
  }

  static validatePhone(phoneNumber) {
    return phonePattern.test(phoneNumber);
  }
  static validateAge(signAge) {
    return AgePattern.test(signAge);
  }

  static validatepass(pass) {
    return passPattern.test(pass);
  }
  static validateRepass(pass1, pass2) {
    return pass1 === pass2;
  }


}
