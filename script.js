const searchForm=document.querySelector('form');
const searchButton=document.querySelector('#topnav');
const resultList=document.querySelector('#results');
const model_cont=document.querySelector(".modal-content")



searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchRecipes();
})
function displayRecipes(data){
    console.log(data);
    data.meals.forEach((meals)=>{
        const displayRecipes=document.getElementById("results");
  const modelCont=document.querySelector(".modal-content")
        displayRecipes.innerHTML=`
        <img id = "img" src="${meals.strMealThumb}">
        <h3 id="txt">${meals.strMeal}<h3>`
     
      modelCont.innerHTML=`
      <img id = "img1" src="${meals.strMealThumb}">
      <h3 id="txt">${meals.strMeal}<h3>
      <h6 id="txt1">${meals.strInstructions}<h6>
      <span  onclick="closeModal()" style="cursor: pointer; color: black; " > close </span>


      `

})}




async function searchRecipes(){
    const searchValue=searchButton.value.trim();
    const response=await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue} `)
    const data=await response.json();
    displayRecipes(data)
}





function openModal() {
    document.getElementById('myModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';}

















const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
const dishlistEl = document.getElementById("dish-list");

function updateDOM(data) {
 
    data.meals.forEach((meals)=>{
        const displayRecipes=document.getElementById("dish-list");
        const modelCont=document.querySelector(".modal-content")
        displayRecipes.innerHTML=`
        <img id = "img" src="${meals.strMealThumb}">
        <h3 id="txt">${meals.strMeal}<h3>`
        modelCont.innerHTML=`
      <img id = "img1" src="${meals.strMealThumb}">
      <h3 id="txt">${meals.strMeal}<h3>
      <h6 id="txt1">${meals.strInstructions}<h6>
      <span  onclick="closeModal()" style="cursor: pointer; color: black; " > close </span>


      `

        
    })
};


fetch(API_URL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        updateDOM(data)
    })