//consigna 1

const loginForm= document.getElementById('loginForm')
const emailInput= document.getElementById('email')
const passwordInput= document.getElementById('password')

const isEmpty = (value)=> !value.length;

const isPasswordValid = (password) =>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(
    password);

const showError= (input, message)=>{
    const formField = input.parentElement;
    const errorContainer = formField.querySelector('small')
    errorContainer.textContent=message;
}

const cleanError=(input)=>{
    const formField = input.parentElement;
    const errorContainer = formField.querySelector('small')
    errorContainer.textContent='';
}

const checkEmail = () => {
    let isValid = false;  
    if (isEmpty(emailInput.value)){
      showError(emailInput, "Esta vacio, complete")
        return;
    }
    isValid=true
    cleanError(emailInput)
    return isValid
}

const checkPassword = ()=>{
    let isValid=false;
    const password=passwordInput.value;
    if (isEmpty(password)){
        showError(passwordInput, "Esta vacia la contraseña, complete")
          return;
      }
      else if (!isPasswordValid(password)){
        showError(passwordInput,"agregale numeros, guiones, letras y letras mayusculas")
      }
      else{
        isValid=true;
        cleanError(passwordInput)     
     }
     return isValid
}


const isFormLoginValid =()=>{
    const isEmailValid= checkEmail()
    const isPasswordValid= checkPassword()

    return isEmailValid && isPasswordValid
}

loginForm.addEventListener('submit', (eventoClick)=>{
eventoClick.preventDefault();
if(isFormLoginValid()){
    console.log("formulario enviado piola");
    loginForm.reset()
}
})


//consigna 2