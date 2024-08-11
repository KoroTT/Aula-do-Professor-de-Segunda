const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas/";
const url2 = "/modelos"

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const opcao = document.querySelector(".Marcas");
    // console.log(data);
    for(let criacao of data){
        console.log(criacao)
        let novaOpcao = document.createElement("option");
        novaOpcao.text = criacao.nome;
        novaOpcao.value = criacao.codigo;
        opcao.appendChild(novaOpcao);
    }
    opcao.addEventListener("change", atualizar);

  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });

  function atualizar(){
    const pai = document.querySelector(".Marcas");
    const lista = document.querySelector('.Lista');
    const itens = lista.querySelectorAll('li');   
    itens.forEach(item => lista.removeChild(item));
    
    var id = pai.options[pai.selectedIndex].value

    fetch(url+id+url2)
        .then(response => {
            if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(modelos=>{
            const listaTot = document.querySelector(".Lista");
            console.log(modelos);
            for (var modelo of modelos.modelos){
                let lista = document.createElement("li");
                lista.value = modelo["codigo"];
                lista.innerHTML = modelo["nome"];
                listaTot.appendChild(lista);
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
          });
  }