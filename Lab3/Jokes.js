// Array containing some light-hearted jokes with authors
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
        
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
        
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
        
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
        
        "author": "Nature Lover"
    }
];

function getRandomJokeIndex() {
    //get the randomNumber
    return Math.floor(Math.random() * jokesArray.length-1);
}
//make sure the number is between 0 to 1 and * to jokeArray(0~9) to get the random joke.
function displayRandomJoke() {
    const jokeDiv = document.getElementById("jokes-text");
    const authorDiv = document.getElementById("jokes-author");

    const randomIndex = getRandomJokeIndex();
    const randomJoke = jokesArray[randomIndex];

    jokeDiv.innerText = randomJoke.joke;
    authorDiv.innerText = randomJoke.author;
}
const newJokeButton = document.getElementById("button");
newJokeButton.addEventListener("click", displayRandomJoke);


window.addEventListener("load", displayRandomJoke);
