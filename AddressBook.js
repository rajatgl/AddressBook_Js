class Contact {
    constructor(/*firstName,lastName,address,city,state,zip,phone,email*/...args) {
        this.firstName = args[0]
        this.lastName = args[1]
        this.address = args[2]
        this.city = args[3]
        this.state = args[4]
        this.zip = args[5]
        this.phoneNumber = args[6]
        this.email = args[7]
    }

    get firstName(){ return this._firstName }
    set firstName(firstName){
        const NAME_REGEX = /^[A-Z]{1}[a-z]{2,}$/
        if(NAME_REGEX.test(firstName))
            this._firstName = firstName
        else throw "Invalid first name"
    }
    get lastName(){ return this._lastName }
    set lastName(lastName){
        const NAME_REGEX = /^[A-Z]{1}[a-z]{2,}$/
        if(NAME_REGEX.test(lastName)){
            this._lastName=lastName
            return
        }
        else throw "Invalid last name"
    }
    get address(){ return this._address }
    set address(address){
        const ADDRESS_REGEX = /^[A-Za-z0-9]{4,}/
        if(ADDRESS_REGEX.test(address))
            this._address=address
        else throw "Invalid address"
    }
    get city(){ return this._city }
    set city(city){
        const ADDRESS_REGEX = /^[A-Za-z0-9]{4,}/
        if(ADDRESS_REGEX.test(city))
            this._city=city
        else throw "Invalid city name"
    }
    get state(){ return this._state }
    set state(state){
        const ADDRESS_REGEX = /^[A-Za-z0-9]{4,}/
        if(ADDRESS_REGEX.test(state))
            this._state=state
        else throw "Invalid state name"
    }
    get zip(){ return this._zip }
    set zip(zip){
        const ZIP_REGEX = /^[1-9]{1}[0-9]{2}\s?[0-9]{3}/
        if(ZIP_REGEX.test(zip))
            this._zip=zip
        else throw "Invalid PIN"
    }
    get phoneNumber(){ return this._phoneNumber }
    set phoneNumber(phoneNumber){
        const PHONE_REGEX = /^[1-9]{1}[0-9]{9}/
        if(PHONE_REGEX.test(phoneNumber))
            this._phoneNumber=phoneNumber
        else throw "Invalid mobile number"
    }
    get email(){ return this._email }
    set email(email){
        const EMAIL_REGEX = /^[a-zA-Z0-9+-._]+@[a-zA-Z0-9.-]+$/
        if(EMAIL_REGEX.test(email))
            this._email=email
        else throw "Invalid email"
    }

    toString(){
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+", City = "+this.city+", State = "+this.state+", PIN = "+this.zip+", Phone = "+this.phoneNumber+", Email = "+this.email;
    }

}
//ability to create new contact for address-book
try{
    let contact = new Contact("Rajat","Gundi","zoppur,mahadox","kopa","Maharashtra",416004,8496942465,"glrajat")  //invalid email
    console.log(contact.toString())
}catch(e){console.error(e)}


//insert multiple contact into the address-book and check for duplication
function insert(arr, ...items) {
    items.forEach(item => {
        if(!addressBook.some(contact => contact.firstName == item.firstName))
            arr.push(item)
        else
            return
    })
}  

//address-book array
let addressBook = new Array()
try{
    var contact1 = new Contact("Rajat","Gundi","zoppur,mahadox","kopa","Maharashtra",416004,8496942465,"glrajat@xyz.com")
}catch(e){console.error("contact1: "+e)}
try{
    var contact2 = new Contact("Rakshit","Gundi","zoppur,mahadox","kopa","Maharashtra",416004,8496942465,"glrakshit@xyz.com")
}catch(e){console.error("contact2: "+e)}

insert(addressBook,contact1,contact2)
console.log("AddressBook: ")
console.log(addressBook)

//function to check if contact exist
function findContact(name){ 
    const contact = addressBook.find( addressbook  => addressbook.firstName === name )
    if(contact == undefined){
        throw "Contact not found"
    }
    else
        return contact
}

//find and edit contact 
try{
    let contact = findContact("Rajat")
    contact.phoneNumber = 8975755112
    console.log(contact.toString())
}catch(e){console.error(e)}

//find and delete contact using array splice
// try{
//     let contact = findContact("Rakshit")
//     const index = addressBook.indexOf(contact)
//     addressBook.splice(index)
//     console.log(addressBook)
// }catch(e){console.error(e)}

//function to find number of contacts using array reduce
function contactCount(){
    const count = (accumulator) => { return accumulator + 1;}
    return addressBook.reduce(count,0)
}
console.log("NUMBER_OF_CONTACTS: "+contactCount())

function findContactsByCity(city){
    console.log(addressBook.filter(contact => contact._city == city))
}
findContactsByCity("kopa") //returns 2 contacts