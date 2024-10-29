import { emptyContainer } from "./emptyTab.js";

export function homeConstruct() {
    //call function to clear page from previously generated content
    emptyContainer();

    const homeContainer = document.createElement("div");
    homeContainer.classList = "homeContainer";
    
    //title of the restaurant
    const cafeFragment = document.createDocumentFragment();
    const cafe = cafeFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h2"));
    cafe.textContent = "The Kitty Cafe";
    homeContainer.appendChild(cafeFragment);
    cafe.classList = "cafeTitle";

    //cafe hook and author 
    const cafeHookContainer = homeContainer.appendChild(document.createElement("div"));
    const cafeHook = cafeHookContainer.appendChild(document.createElement("p"));
    cafeHook.textContent = "Don't dive into the nitty gritty, come enjoy a drink with a kitty.";
    cafeHook.classList = "cafeHook";
    const cafeHookAuthor = cafeHookContainer.appendChild(document.createElement("h4"));
    cafeHookAuthor.textContent = "Steph";
    cafeHookAuthor.classList = "cafeHookAuthor";

    //cafe hours
    const cafeHoursContainer = homeContainer.appendChild(document.createElement("div"));
    cafeHoursContainer.classList = "cafeHoursContainer";
    const cafeHoursTitle = cafeHoursContainer.appendChild(document.createElement("h3"));
    cafeHoursTitle.textContent = "Hours";
    cafeHoursTitle.classList = "cafeHoursTitle";
    const cafeHoursFragment = document.createDocumentFragment();
    const cafeHours = cafeHoursFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("ul"));
    cafeHoursContainer.appendChild(cafeHoursFragment);
    const cafeHoursMF = cafeHours.appendChild(document.createElement("li"));
    const cafeHoursSS = cafeHours.appendChild(document.createElement("li"));
    cafeHoursMF.textContent = "Monday - Friday: 9am - 9pm";
    cafeHoursSS.textContent = "Saturday - Sunday: 10am - 8pm";
    cafeHoursMF.classList = "cafeHours";
    cafeHoursSS.classList = "cafeHours";

    //cafe location
    const cafeLocationContainer = homeContainer.appendChild(document.createElement("div"));
    cafeLocationContainer.classList = "cafeLocationContainer";
    const cafeLocationTitle = cafeLocationContainer.appendChild(document.createElement("h3"));
    cafeLocationTitle.textContent = "Location";
    cafeLocationTitle.classList = "cafeLocationTitle";
    const cafeLocation = cafeLocationContainer.appendChild(document.createElement("p"));
    cafeLocation.textContent = "123 Kitty Kat Lane";
    cafeLocation.classList = "cafeLocation";



    content.appendChild(homeContainer);
}