import ApiService from './apiService'

class PessoaService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    salvarPessoa (personInput) {
        return this.post('/salvar', personInput)
    }

    atualizarPessoa (personInput) {
        return this.put(`/${personInput.email}`, personInput)
    }
}
export default PessoaService
