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
    content.appendChild(titleFragment);

    /*                      */
    /* create contacts here */
    /*                      */
    const fredBoy = new kittyCreator("fred", "kitty has no phone!", "123 kitty kat lane");
    const dougBoy = new kittyCreator("doug", "again!", "456 kitty kat lane");
    const hagen = new kittyCreator("hagen", "actually a dog?", "doggy daycare");

}

//object constructor to create contacts to minimize code
function kittyCreator(name, phone, address){
    this.name = name;
    this.phone = phone;
    this.address = address;

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
    contactContainer.appendChild(contactFragment);

    //container for contact information
    const infoContact = contactFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("ul"));
    infoContact.className = "contactInfo";

    //contact phone number
    const contactPhone = infoContact.appendChild(document.createElement("li"));
    contactPhone.textContent = this.phone;

    //contact address
    const contactAddress = infoContact.appendChild(document.createElement("li"));
    contactAddress.textContent = this.address;

}