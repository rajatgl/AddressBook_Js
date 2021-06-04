class Contact {

    constructor(firstName,lastName,address,city,state,zip,phone,email) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.phoneNumber = phone
        this.email = email
    }

    get firstName(){ return this._firstName }
    firstName(firstName){
        this._firstName=firstName
    }
    get lastName(){ return this._lastName }
    lastName(lastName){
        this._lastName=lastName
    }
    get address(){ return this._address }
    address(address){
        this._address=address
    }
    get city(){ return this._city }
    city(city){
        this._city=city
    }
    get state(){ return this._state }
    state(state){
        this._state=state
    }
    get zip(){ return this._zip }
    zip(zip){
        this._zip=zip
    }
    get phoneNumber(){ return this._phoneNumber }
    phoneNumber(phoneNumber){
        this._phoneNumber=phoneNumber
    }
    get email(){ return this._email }
    email(email){
        this._email=email
    }

    toString(){
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+", City = "+this.city+", State = "+this.state+", PIN = "+this.zip+", Phone = "+this.phoneNumber+", Email = "+this.email;
    }

}
//ability to create new contact for address-book
let contact = new Contact("Rajat","G.L.","zoppur,mahadox","kop","Maharashtra",416005,8496942467,"glrajat@xyz.com")
console.log(contact.toString())
