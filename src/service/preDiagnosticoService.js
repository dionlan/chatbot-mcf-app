import ApiService from './apiService.js'

class PreDiagnosticoService extends ApiService{
    constructor(){
        super('/api/previa-diagnostico')
    }

    salvarPreDiagnostico(preDiagnostico) {
        return this.post('/salvar', preDiagnostico)
    }

    buscarResultadoPrevio(id) {
        return this.get(`/${id}`)
    }
}
export default PreDiagnosticoService
