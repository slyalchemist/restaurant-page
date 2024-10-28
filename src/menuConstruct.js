import { emptyContainer } from "./emptyTab.js";

export function menuConstruct() {
    emptyContainer();
    const titleFragment = document.createDocumentFragment();
    const title = titleFragment
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("h2"));
    title.textContent = "Menu";

    content.appendChild(titleFragment);

}