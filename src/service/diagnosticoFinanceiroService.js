import ApiService from './apiservice'

class DiagnisticoFinanceiroService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    cadastrarDiagnosticoFinanceiro (diagnosticoInput) {
        return this.post('/salvar', diagnosticoInput)
    }
}
export default DiagnisticoFinanceiroService
