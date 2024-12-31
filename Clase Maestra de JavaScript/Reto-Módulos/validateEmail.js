export function validateEmail(email) {
  if(email.includes('@') && email.includes('.')) {
    return console.log('Email valido');
  }else {
    return console.log('Email invalido');
  }
}