const axios = require("axios").default;
const dotenv = require("dotenv").config();

// Random Joke API. https://rapidapi.com/LemmoTresto/api/joke3
const joke = {
	method: "GET",
	url: "https://joke3.p.rapidapi.com/v1/joke",
	params: { nsfw: "true" },
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "joke3.p.rapidapi.com",
	},
};

// Love Calculator API. https://rapidapi.com/ajith/api/love-calculator
const love = {
	method: "GET",
	url: "https://love-calculator.p.rapidapi.com/getPercentage",
	params: { fname: "Nsovo", sname: "Tino" },
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
	},
};

// Quotes API. https://rapidapi.com/martin.svoboda/api/quotes15/endpoints
const quote = {
	method: "GET",
	url: "https://quotes15.p.rapidapi.com/quotes/random/",
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
	},
};

// The Office API. https://rapidapi.com/lakshyasri/api/the-office/endpoints
const office = {
	method: "GET",
	url: "https://the-office.p.rapidapi.com/3",
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "the-office.p.rapidapi.com",
	},
};

// Airports API. https://rapidapi.com/sujayvsarma/api/ourairport-data-search
const airport = {
	method: "GET",
	url:
		"https://ourairport-data-search.p.rapidapi.com/nearest/-25.668501,27.242371",
	params: { maxResults: "1" },
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "ourairport-data-search.p.rapidapi.com",
	},
};

// Bible API. https://rapidapi.com/ajith/api/holy-bible
const bible = {
	method: "GET",
	url: "https://ajith-holy-bible.p.rapidapi.com/GetVerses",
	params: { Book: "Luke", chapter: "1", VerseFrom: "5", VerseTo: "8" },
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
	},
};

// Random message API. https://rapidapi.com/ajith/api/messages
const message = {
	method: "GET",
	url: "https://ajith-messages.p.rapidapi.com/getMsgs",
	params: { category: "love" },
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "ajith-messages.p.rapidapi.com",
	},
};

// WikiHow Random steps API. https://rapidapi.com/hargrimm/api/wikihow
const steps = {
	method: "GET",
	url: "https://hargrimm-wikihow-v1.p.rapidapi.com/steps",
	params: { count: "3" },
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
	},
};

// Numbers facts API. https://rapidapi.com/divad12/api/numbers-1
const numbers = {
	method: "GET",
	url: "https://numbersapi.p.rapidapi.com/6/21/date",
	params: { fragment: "true", json: "true" },
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
	},
};

// Chatbot API. https://rapidapi.com/Acobot/api/brainshop-ai/endpoints
const bot = {
	method: "GET",
	url: "https://acobot-brainshop-ai-v1.p.rapidapi.com/get",
	params: {
		bid: "178",
		key: "sX5A2PcYZbsN5EY6",
		uid: "mashape",
		msg: "I'm hungry",
	},
	headers: {
		"x-rapidapi-key": process.env.RAPID_KEY,
		"x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
	},
};

// END OF RAPID-API

// Another Joke API. https://sv443.net/jokeapi/v2/
const joke2 = {
	method: "GET",
	url:
		"https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single",
};

// Bored API. https://www.boredapi.com/
const bored = {
	method: "GET",
	url: "http://www.boredapi.com/api/activity?minprice=0&maxprice=0.1",
};

axios
	.request(bored)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
