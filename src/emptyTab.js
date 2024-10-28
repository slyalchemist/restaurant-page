//Empty the parent content div

export function emptyContainer() {
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}