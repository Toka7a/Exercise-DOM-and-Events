function solve() {
  let textInput = document.getElementById("text").value.toLowerCase();
  let convInput = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if(convInput === "Camel Case"){
    let wordArr = textInput.split(" ");
    let word = wordArr[0];
    

    for (let index = 1; index < wordArr.length; index++) {
      
      word += wordArr[index][0].toUpperCase() + wordArr[index].slice(1);
    }

    result.textContent = word;
  }
  else if (convInput === "Pascal Case"){
    let wordArr = textInput.split(" ");
    let word = "";
    

    for (let index = 0; index < wordArr.length; index++) {
      
      word += wordArr[index][0].toUpperCase() + wordArr[index].slice(1);
    }

    result.textContent = word;
  }
  else{
    result.textContent = "Error!"
  }
  
}

