import ApiService from 'src/service/apiService.js'

class EmailService extends ApiService{
    constructor(){
        super('/api/email')
    }

    salvarEmail(emailInput) {
        console.log(emailInput)
        return this.post('/sending-email', emailInput)
    }
}
export default EmailService
