import { emptyContainer } from "./emptyTab.js";

export function contactConstruct() {
    //call function to clear page from previously generated content
    emptyContainer();

    //page title
    const titleFragment = document.createDocumentFragment();
    const title = titleFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h2"));
    title.textContent = "Contact";
    title.classList = "contactTitle";
    content.appendChild(titleFragment);

    /*                      */
    /* create contacts here */
    /*                      */
    const fredBoy = new kittyCreator("fred", "manager", "555-555-5554", "fred@kittymail.com");
    const dougBoy = new kittyCreator("doug", "barista", "555-555-5555", "doug@kittymail.com");
    const hagen = new kittyCreator("hagen", "pastry chef", "555-555-5556", "hagen@doggymail.com");

}

//object constructor to create contacts to minimize code
function kittyCreator(name, position, phone, email){
    this.name = name;
    this.position = position;
    this.phone = phone;
    this.email = email;

    //container for contact
    const contactContainer = document.createElement("div");
    content.appendChild(contactContainer);
    contactContainer.className = "kitty";

    //contact name
    const contactFragment = document.createDocumentFragment();
    const contact = contactFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h3"));
    contact.textContent = this.name;
    contact.className = "contactName";
    

    //container for contact information
    const infoContact = contactFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("ul"));
    infoContact.className = "contactInfo";

    //contact position
    const contactPosition = infoContact.appendChild(document.createElement("li"));
    contactPosition.textContent = this.position;
    contactPosition.classList = "contactPosition";

    //contact phone number
    const contactPhone = infoContact.appendChild(document.createElement("li"));
    contactPhone.textContent = this.phone;

    //contact email address
    const contactAddress = infoContact.appendChild(document.createElement("li"));
    contactAddress.textContent = this.email;

    contactContainer.appendChild(contactFragment);
}