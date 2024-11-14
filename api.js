let searchBox = document.querySelector(".searchBox");
let searchBtn = document.querySelector(".searchBtn");
let recipeContainer = document.querySelector(".recipe-container");

const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipe...</h2>";
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
const  respones = await data.json();

recipeContainer.innerHTML = "";
respones.meals.forEach(meal => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
     recipeDiv.innerHTML = `
     <img src="${meal.strMealThumb}">
     <h3>${meal.strMeal}</h3>
     <p><span>${meal.strArea}</span>  Dish</p>
     <p>Belongs to <span>${meal.strCategory}</span> Category</p>
     `

     const button = document.createElement('button')
     button.textContent = "View Recipe";
     recipeDiv.appendChild(button);
     
     recipeContainer.appendChild(recipeDiv);
    //   console.log(meal);
});
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
  // console.log("btn was clicked");
});
