import apiService from './apiService.js'


class EmailService extends apiService{
    constructor(){
        super('/api/email')
    }

    salvarEmail(emailInput) {
        console.log(emailInput)
        return this.post('/sending-email', emailInput)
    }
}
export default EmailService
