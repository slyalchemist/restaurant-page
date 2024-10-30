import { emptyContainer } from "./emptyTab.js";

export function menuConstruct() {
    //call function to clear page from previously generated content
    emptyContainer();

    //page title
    const titleFragment = document.createDocumentFragment();
    const title = titleFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h2"));
    title.textContent = "Menu";
    content.appendChild(titleFragment);
    title.classList = "menuTitle";

    //food menu subsection title
    const sweetFragment = document.createDocumentFragment();
    const sweetMenu = sweetFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h3"));
    sweetMenu.textContent = "Sweet Treats";
    content.appendChild(sweetFragment);
    sweetMenu.classList = "menuSubTitle";

    /*                              */
    /* create food menu items here  */
    /*                              */
    const croissant = new menuItemCreator("croissant", "3", "a classic pastry");
    const almondCroissant = new menuItemCreator("almond croissant", "4", "a classic pastry with a twist");
    const savoryCroissant = new menuItemCreator("ham and cheese croissant", "5", "a savory croissant");

    //drink menu subsection title
    const drinkFragment = document.createDocumentFragment();
    const drinkMenu = drinkFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h3"));
    drinkMenu.textContent = "Cafe Drinks";
    content.appendChild(drinkFragment);
    drinkMenu.classList = "menuSubTitle";

    /*                              */
    /* create drink menu items here */
    /*                              */
    const matcha = new menuItemCreator("matcha", "4", "an earthy green drink");
    const latte = new menuItemCreator("classic latte", "4", "a drink with espresso and milk");
    const hojicha = new menuItemCreator("hojicha latte", "4", "a latte with roasted tea leaves and milk");

}

//constructor to create menu items to minimize code
function menuItemCreator(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;

    //container for entire menu item
    const menuItemContainer = document.createElement("div");
    content.appendChild(menuItemContainer);
    menuItemContainer.className = "menuItemContainer";

    //menu item title
    const menuFragment = document.createDocumentFragment();
    const menuItemName = menuFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h4"));
    menuItemName.textContent = this.name;
    menuItemContainer.appendChild(menuFragment);
    menuItemName.classList = "menuItemName";

    //container for menu item price and description
    const itemContainer = document.createElement("div");
    menuItemContainer.appendChild(itemContainer);

    //menu item price
    const itemPrice = document.createElement("p");
    itemPrice.innerHTML = `$${this.price}`;
    itemPrice.classList = "menuItemPrice";
    menuItemContainer.appendChild(itemPrice);

    //menu item description
    const itemDescription = document.createElement("p");
    itemDescription.textContent = this.description;
    itemDescription.classList = "menuItemDescription";
    menuItemContainer.appendChild(itemDescription);
}