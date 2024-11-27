// require('dotenv').config();
// const { API_URL, API_KEY } = process.env
const API_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_59SgqndOaDCSJmv9q1BgqG9I10pY41Q3lT1DXYl6ia0mmpBzjIrX8uBOjYOHOdDG";


const userSearch = document.getElementById("search").value.trim();
const searchBtn = document.getElementById("searchBtn");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

async function initialLoad() {
    const response = await fetch(`${API_URL}/breeds`);
    const data = await response.json();
    // console.log(data)
    const catBreeds = data.map(breed => {
        console.log(breed.name)
    })
}

initialLoad();