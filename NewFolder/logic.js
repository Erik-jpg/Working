// const entries = ["John", "Smith", "Sharik", "This is stored value"];

// // function myFunction(entries) {
    
// // }
// $(".searchSome").on("click", function search (e) {
//     addEntry ();
//     var entry =JSON.parse(localStorage.getItem('allEntries'));
//     for (let i = 0; i < entry.length; i++) {
//         $(".showSearchData").append('<p class="keywordsOnDiv">' +entry[i] + '</p>');
//     }
// });
// var existingEntries = JSON.parse(localStorage.getItem(entries));
// function addEntry () {
    
//     if (existingEntries == null) existingEntries = []; 
//     };
//     var entryTitle = $(".searchSome").val();
//     localStorage.setItem('entries',entryTitle);
//     existingEntries.push(entryTitle);
//     localStorage.setItem('allEntries', existingEntries);
// console.log(existingEntries);

// const departmentsList = [{}];

// this.group.departmentsList.push({
//     name: group.newCategoryName,
//     sortOrder: group.departmentsList.length,
//     type: "category"
// });
// function WTF () {
//     $scope.parentDepartment = [
//         {
//             departmentsList: [{}]
//         }
//     ];
// }

// this.group.departmentsList = this.group.departmentsList || [];
// this.group.departmentsList.push({
//     name: group.newCategoryName,
//     sortOrder: group.departmentsList.length,
//     type: "category"
// });


const recipeName = document.querySelector("#recipeName");
const recipeCards = document.querySelector("#recipeCards");
const saveBtn = document.querySelector("#saveBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const getBtn = document.querySelector("#getBtn");

htmlElement.body.document.addEventListener('click', function (e){});
 e.preventDefault();

saveBtn.document.addEventListener('click', (e) =>{
    handleRecipe();
    reset();
})

function handleRecipe () {
    localStorage.setItem(recipeName, recipeCards);
}

getBtn.document.addEventListener('click', function(){

})

function printItem () {
    localStorage.getItem(recipeName).value= "userCookbook";
}