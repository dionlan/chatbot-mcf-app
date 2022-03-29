import ApiService from './apiService'

class PreDiagnosticoService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    buscarResultadoPrevio (email) {
        return this.get(`/${email}`)
    }
}
export default PessoaService
