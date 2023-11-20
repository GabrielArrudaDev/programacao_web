async function consulta(event) {
            event.preventDefault()
            let cep = document.querySelector('#cep').value
            let dados = await consultaCEP(cep)
            document.querySelector('#rua').value = dados.logradouro
            document.querySelector('#bairro').value = dados.bairro
            document.querySelector('#cidade').value = dados.localidade
        }
        async function consultaCEP(cep) {
            //https://viacep.com.br/ws/18015066/json/
            cep = cep.replace('.', '').replace('-', '')
            let url = `https://viacep.com.br/ws/${cep}/json/`
            
            let resposta = await fetch(url)
            console.log(resposta)

            let data = await resposta.json()
            return data
        }