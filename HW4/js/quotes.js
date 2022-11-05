export function correctQuotes(){
    let container = document.querySelector(".marquez-text");
    let text = container.textContent;

    const quotesBeginning = /\s'/g;
    const quotesEnd = /'[^A-Za-z]/g;
    const apostrophe = /[A-Za-z]"[a-z]/;

    text = text.replace(quotesBeginning, '</br>"');
    text = text.replace(quotesEnd, '"</br>');

    container.innerHTML = `<p class=".marquez-text">${text}</p>`;
}