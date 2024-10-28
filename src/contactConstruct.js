import { emptyContainer } from "./emptyTab.js";

export function contactConstruct() {
    emptyContainer();

    const titleFragment = document.createDocumentFragment();
    const title = titleFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h2"));
    title.textContent = "Contact";

    content.appendChild(titleFragment);

    const fredBoy = new kittyCreator("fred", "kitty has no phone!", "123 kitty kat lane");
    const dougBoy = new kittyCreator("doug", "again!", "456 kitty kat lane");
    const hagen = new kittyCreator("hagen", "actually a dog?", "doggy daycare");

}

function kittyCreator(name, phone, address){
    this.name = name;
    this.phone = phone;
    this.address = address;

    const contactContainer = document.createElement("div");
    content.appendChild(contactContainer);
    contactContainer.className = "kitty";

    const contactFragment = document.createDocumentFragment();
    const contact = contactFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h3"));
    contact.textContent = this.name;
    contact.className = "contactName";

    const infoContact = contactFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("ul"));
    const contactPhone = infoContact.appendChild(document.createElement("li"));
    contactPhone.textContent = this.phone;

    const contactAddress = infoContact.appendChild(document.createElement("li"));
    contactAddress.textContent = this.address;

    infoContact.className = "contactInfo";

    contactContainer.appendChild(contactFragment);
}