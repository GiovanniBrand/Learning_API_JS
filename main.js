async function searchAdress(CEP){
    let errorMsg = document.querySelector('#erro')
    errorMsg.innerHTML = ""
    try{
        let consultaCEP = await fetch(`http://viacep.com.br/ws/${CEP}/json/`)
        let convertCEP = await consultaCEP.json()
        if(convertCEP.erro){
            errorMsg.innerHTML = `<p>CEP não existente!</p>`
        }
        let city = document.querySelector('#cidade')
        let rua = document.querySelector('#endereco')
        let state = document.querySelector('#estado')

        city.value = convertCEP.localidade
        rua.value = convertCEP.logradouro
        state.value = convertCEP.uf

        console.log(convertCEP)
        return convertCEP
    } catch(erro){
        errorMsg.innerHTML = `<p>CEP inválido!</p>`
    }
}

let CEP = document.querySelector('#cep')
CEP.addEventListener("focusout", () => searchAdress(CEP.value))