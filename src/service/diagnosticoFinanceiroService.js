import ApiService from './apiService'

class DiagnisticoFinanceiroService extends ApiService{
    constructor(){
        super('/api/diagnostico')
    }

    cadastrarDiagnosticoFinanceiro (diagnosticoInput) {
        console.log('SERVIÇO diagnóstico financeiro: ',  diagnosticoInput)
        //return this.post('/salvar', diagnosticoInput)
    }
}
export default DiagnisticoFinanceiroService
