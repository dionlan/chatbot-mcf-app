import ApiService from './apiService'

class PessoaService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    salvarPessoa (personInput) {
        console.log('SERVIÇO => salvarPessoa: ',  personInput)
        return this.post('/salvar', personInput)
    }
}
export default PessoaService
