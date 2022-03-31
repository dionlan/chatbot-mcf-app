import ApiService from './apiService'

class PreDiagnosticoService extends ApiService{
    constructor(){
        super('/api/previadiagnostico')
    }

    salvarPreDiagnostico(preDiagnostico) {
        return this.post('/salvar', preDiagnostico)
    }

    buscarResultadoPrevio(email) {
        return this.get(`/${email}`)
    }
}
export default PreDiagnosticoService
