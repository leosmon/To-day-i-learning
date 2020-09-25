function login(){
    var inputElement = document.querySelector("#inputNome").value;
    
    if(inputElement === ""){
        
         return alert("Digite um nome primeiro")
         

    }  
        sessionStorage.setItem("nomeUsuario", 'inputElement');
        location.href = "/../../feed.html"

    
    var btnAdd = document.querySelector("#btnLogin");
    btnAdd.addEventListener("click", login); 



}