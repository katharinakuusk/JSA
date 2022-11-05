export class Validator {
    constructor(){
        this.patterns = {
            email: /^([A-Za-z0-9\._\-]+)@([A-Za-z\d\._\-]+)\.([A-Za-z]+)/,
            tel: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            name:  /^[A-Za-zА-Яа-я]+/
        };
        this.errorMessages = {
            email: "input the e-mail address in the following format: example@box.com",
            tel: "input the phone number in the following format: +7(XXX)XXX-XXXX",
            name: "input the name in the following format: Name"
        };
    }

    validateElem(element){
        let value = element.value;
        let patternName= element.id;
        let pattern = this.patterns[patternName];
        let container = element.parentNode;
        container = container.querySelector(".error_message");

        if (!value.match(pattern)){
            let errorMessage = this.errorMessages[patternName];
            container.innerHTML = errorMessage;
        } else {
            container.innerHTML = ""
        }
    }
}