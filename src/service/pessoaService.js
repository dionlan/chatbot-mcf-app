import ApiService from './apiService'

class PessoaService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    salvarPessoa (inputPessoa) {
        console.log('SERVIÇO => salvarPessoa: ',  inputPessoa)
        //return this.post('/salvar', diagnosticoInput)
    }
}
export default PessoaService
