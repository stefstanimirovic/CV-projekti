let inputs = document.querySelectorAll('input');
let errors = {
  "ime_prezime" : [],
  "korisnicko_ime" : [],
  "email" : [],
  "lozinka" : [],
  "ponovi_lozinku" : []
};
inputs.forEach(element => {
  element.addEventListener('change', e => {
    let currentInput = e.target;
    let inputValue = currentInput.value;
    let inputName = currentInput.getAttribute('name');
    
    if(inputValue.length > 4) {
        errors[inputName] = [];  //ispraznimo sve greske 
      switch(inputName) {
        case 'ime_prezime':
          let validation = inputValue.trim();
          validation = validation.split(" ");
          if(validation.length < 2){
            errors[inputName].push('Moras ime i prezime');
          }
          break;
        case 'email':
          if(!(validateEmail(inputValue))){
            errors[inputName].push("Nije dobar email");
          } 
          break;
        case 'ponovi_lozinku':
          let lozinka = document.querySelector('input[name="lozinka"]');
          if(inputValue !== lozinka ){
            errors[inputName].push("Lozinke se ne poklapaju");
          }
          break;
      }
    } else {
      errors[inputName] = ['Polje ne moze imati manje od 5 karaktera'];
    }
    populateErrors();
     // document.querySelector('div').innerHTML = `<ul><li>${errors[inputName][0]}</li></ul>`;
  });
});

const populateErrors = () => {
  for(let elem of document.querySelectorAll('ul')){
    elem.remove();
  }
  for(let key of Object.keys(errors)) {
    let input = document.querySelector(`input[name="${key}"]`)
    let parentElement = input.parentElement;
    let errorsElement = document.createElement('ul');
    parentElement.appendChild(errorsElement);

    errors[key].forEach(error => {
        let li = document.createElement('li');
        li.innerText = error;
        errorsElement.appendChild(li);
    });
  }


}
const validateEmail = email => {
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return true;
  }
return false;
}
