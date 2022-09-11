const quotes = [
    {
        quote: "The future depends on what we do in the present.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "The greater the obstacle, the more glory in overcoming it.",
        author: "Moliere",
    },
    {
        quote: "Be nice to nerds. Chances are you'll end up working for one.",
        author: "Bill Gates",
    },
    {
        quote: "He that can have patience can hace what he will.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
        author: "Charlie Chaplin",
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "Malala Yousafzai",
    },
    {
        quote: "Spread love everywhere you go.",
        author: "Mother Teresa",
    },
    {
        quote: "Although the world is full of suffering, it is full also of the overcoming of it.",
        author: "Helen Keller",
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey",
    },
    {
        quote: "You have to have confidence in your ability, and then be tough enough to follow through.",
        author: "Rosalynn Carter",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;