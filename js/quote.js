const quotecontent = [
    {
        quote: "Tomorrow becomes never. No matter how small the task, take the first step now",
        author: "Tim Ferris",
    },
    {
        quote: "If the challenge we face doesn’t scare us, then it’s probably not that important.",
        author: "Tim Ferris",
    },
    {
        quote: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.",
        author: "James Cameron",
    },
    {
        quote: "You are more powerful than you think you are. Act accordingly.",
        author: "Seth Godin",
    },
    {
        quote: "Creativity is an infinite resource. The more you spend, the more you have",
        author: "Chase Jarvis",
    },
    {
        quote: "Free education is abundant, all over the internet. It’s the desire to learn that’s scarce.",
        author: "Naval Ravikant",
    },
    {
        quote: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
        author: "John Wooden",
    },
    {
        quote: "Don’t let yesterday take up too much of today",
        author: "Will Rogers",
    },
    {
        quote: "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
        author: "Joe Girard",
    },
    {
        quote: "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
        author: "Zig Ziglar",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotecontent[Math.floor(Math.random() * quotecontent.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;