/* by Natan de Souza Cunha's. 2023 Form

Get Events manipulations script, pegando o relacionamento de cada input,
obtener la relación de cada entrada*/
const form = document.getElementById("form"); 
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation"); 




/* Event for formulary, eu quero colocar um evento dentro do formulario,
quiero poner un evento dentro del formulario*/
form.addEventListener("submit", (event) => {
event.preventDefault();



/* Check input para validações dos inputs. Check validations of inputs
ele vai decidir se vai deixar passar ou não o registro*/
checkForm();
})



/*(Evento para tirar o foco de cada input.)

/* Comando de Evento para tirar o foco de cada input - USERNAME*/ 
username.addEventListener ("blur", () => {
    checkInputUsername();
})


/* Comando de Evento para tirar o foco de cada input - EMAIL*/
email.addEventListener ("blur", () => {
    checkInputEmail();
})


/* Comando de Evento para tirar o foco de cada input - EMAIL*/
password.addEventListener ("blur", () => {
    checkInputPassword();
})


/* Comando de Evento para tirar o foco de cada input - EMAIL*/
passwordConfirmation.addEventListener ("blur", () => {
    checkInputPasswordConfirmation();
})




/* Validation of events, validação dos eventos, Validación de los eventos*/
 function checkInputUsername(){
    const usernameValue = username.value; 

    console.log (usernameValue)



    //Aviso de Caixa do UserName, notice box UserName.
    if(usernameValue === ""){
        //Comando para mostrar o aviso de mensagem de erro, Command to show error message warning..
        errorInput (username, "Enter or username!");
            
        // Comando Para Tirar o aviso de erro caso registre novamente, Command to remove the warning if you register again...
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
 }
 
 
 
 //Aviso de caixa do Email. notice box Email.
function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Email is required!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}



//Aviso de caixa da Senha. notice box Password.

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Password is required!")
        //Aviso de caixa de Senha para no minumo 8 caracteres. notice box Password.
    }else if(passwordValue.length < 8){
        errorInput(password, "The password must have at least 8 characters...")

    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}


//Aviso de caixa da confirmação de senha. notice box password confirmation.

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value; 

    //Aviso de caixa do confirmação das duas senhas. notice box for two password confirmation.

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "Password confirmation is mandatory!")

    //Aviso de erro para: senhas diferentes. notice box password no confirmation.
    }else if (confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "The passwords are not the same!")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}



// Função para não registrar formulario caso tenha algum erro. 
//Só deixar passar formulario se respeitar todas as diretrizes.

function checkForm(){
checkInputUsername();
checkInputEmail();
checkInputPassword();
checkInputPasswordConfirmation();



//Verificação para pegar todos os elementos que tiver com a classe para validar.
const formItems = form.querySelectorAll(".form-content")

//Comando Every passa por cada function para validar.
const isValid = [...formItems].every( (item) =>{
    return item.className === "form-content"
});

if(isValid){
    alert("Registered successfully!")
}

}
 



function errorInput( input, message){
    const formItem = input.parentElement;

    const textMessagem = formItem.querySelector("a")

    textMessagem.innerText = message;
    formItem.className = "form-content error"
 }