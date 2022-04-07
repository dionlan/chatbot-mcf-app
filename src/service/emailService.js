import ApiService from './apiService'

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
