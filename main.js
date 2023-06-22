const main = document.querySelector("main");
const quoteId = document.querySelector(".quote-id");
const quoteText = document.querySelector(".quote-text");
const quoteAdvice = document.querySelector(".quote-advice")
const button = document.querySelector("button");


// async await
const getApi = async () => {
        fadeOut()

    const quote = await fetch("https://api.adviceslip.com/advice");
    const response = await quote.json()

    setTimeout(() => {
        quoteId.textContent = "Advice #" + response.slip.id;
        quoteText.textContent = response.slip.advice;
        fadeIn()

    }, 1000)
}

// then
const initialApi = () => {
    const quote = fetch("https://api.adviceslip.com/advice");

    quote
        .then(res => res.json())
        .then(res => {
            quoteId.textContent = "Advice #" + res.slip.id;
            quoteText.textContent = res.slip.advice;
            main.style.opacity = 1;
        })
}
initialApi()

// animations
const fadeOut = () => {
    quoteText.classList.remove("fade-in")
    quoteAdvice.classList.remove("fade-in")
    quoteText.classList.add("fade-out")
    quoteAdvice.classList.add("fade-out")
}

const fadeIn = () => {
    quoteText.classList.remove("fade-out")
    quoteAdvice.classList.remove("fade-out")
    quoteText.classList.add("fade-in")
    quoteAdvice.classList.add("fade-in")
}

button.addEventListener("click", getApi)
