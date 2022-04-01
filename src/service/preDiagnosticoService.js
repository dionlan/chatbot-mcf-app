import ApiService from './apiService'

class PreDiagnosticoService extends ApiService{
    constructor(){
        super('/api/previadiagnostico')
    }

    salvarPreDiagnostico(preDiagnostico) {
        return this.post('/salvar', preDiagnostico)
    }

    buscarResultadoPrevio(id) {
        return this.get(`/${id}`)
    }
}
export default PreDiagnosticoService
