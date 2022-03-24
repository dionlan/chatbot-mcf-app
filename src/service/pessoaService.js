import ApiService from './apiService'

class PessoaService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    salvarPessoa (personInput) {
        return this.post('/salvar', personInput)
    }

    atualizarPessoa (personInput) {
        console.log('PERSON EMAIL: ', personInput.email)
        return this.put(`/${personInput.email}`, personInput)
        //return this.put('/atualizar', personInput)
    }
}
export default PessoaService
