class Contact {

    //Constructors
    constructor(name, contactNumber, emailAddress){
        this.Name = name
        this.ContactNumber =  contactNumber
        this.EmailAddresss - emailAddress
    }

    // Getters and Setters

// NAME
    get Name() {
        return this.m_name
    }

    set Name(name) {
        this.m_name = name
    }

// CONTACT NAUMNBER
    get ContactNumber() {
        return this.m_contactNumber
    }

    set ContactNumber(contactNumber) {
        this.m_contactNumber = contactNumber
    }
// EMAIL ADDRESS
    get EmailAddresss() {
        return this.m_emailAddress
    }

    set EmailAddresss(emailAddress) {
        this.m_emailAddress = emailAddress
    }
    
   // Public Override 
   toString(){
    return `Full Name is ${this.Name}\nContact Information is ${this.ContactNumber}\nEmail Address is ${this.EmailAddresss}`
   }
}
