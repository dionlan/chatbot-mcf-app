import ApiService from '../apiService.js'

class PessoaService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    salvarPessoa(personInput) {
        return this.post('/salvar', personInput)
    }

    atualizarPessoa(personInput) {
        return this.put(`/${personInput.id}`, personInput)
    }

    buscarResultadoPrevio(email) {
        return this.get(`/${email}`)
    }
}
export default PessoaService
