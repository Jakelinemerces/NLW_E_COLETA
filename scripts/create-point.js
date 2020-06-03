//document
  //  .querySelector("select[name=uf]")
    //.addEventListener("change", () => {
     //   console.log("mudei")        
     //})

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estado")
        .then( res => res.json())
        .then(states => {


            for(state  of states ) {
                
            }

            ufSelect.innerHTML += `<option value"1">Valor</option>`
        } )
}     


populateUFs()