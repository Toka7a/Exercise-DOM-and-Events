function search() {
   let towns = document.querySelectorAll("#town, li");
   let input = document.getElementById("searchText").value.toLowerCase();
  
   let result = document.getElementById("result");
   let matches = 0;


   for (const town of towns) {
      if((town.textContent).toLowerCase().includes(input)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches ++;
      }
      else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }
   
   result.textContent = `${matches} matches found`
}
