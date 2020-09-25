async function exibirPosts() {
    const response = await fetch("https://foodgram-back.herokuapp.com/posts");
    const arrayDeFotos = await response.json();
  

  var secaoFotos = document.querySelector("section");
  for (var i = 0 ; i < arrayDeFotos.length ; i++){
        
    var post = `
    <div class="post">
    <p>Por : ${arrayDeFotos[i].user} </p>
    <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}" >
    </div>
    `;

    
    secaoFotos.insertAdjacentHTML("afterbegin" , post);
  }
}
exibirPosts();
setTimeout(function(){ location.reload(); }, 60000)

  