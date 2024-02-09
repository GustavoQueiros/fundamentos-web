let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

function validaNome(){
    console.log(nome.value)
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txt.innerHTML = "Nome Invalido"
        txt.style.color = "red"
        }else {
            txt.innerHTML = "Nome Valido"
            txt.style.color = "green"
        }

}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1|| email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.style.color = "green"
    }
}