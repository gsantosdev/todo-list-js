var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

   function mostrarDados()
   {
       alert("O usuário mora em " + endereco.cidade +", no bairro " +endereco.bairro + ", na rua " + endereco.rua + " n°" + endereco.numero);
   }

   var botao;
   botao = document.getElementById("botao");
   botao.onclick = function(){
       mostrarDados();
   }