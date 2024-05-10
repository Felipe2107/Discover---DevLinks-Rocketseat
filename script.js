function toggleMode () {
   //Se constrói o modo escuro e modo claro na página por interação no botão, através de duas maneiras por condicional:
    const html= document.documentElement    
    html.classList.toggle("light")
    
    //Pegar a Tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
} else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")       
    }
 
//Ou por uma configuração que já existe na ferramenta VS Code, pois já existe a função Toggle que verifica se o tema está claro , ele tira e se não estiver claro ele põe:


  
}

