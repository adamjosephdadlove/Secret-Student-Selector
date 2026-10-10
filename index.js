/* Accessing HTML DOM and creating global variables */

const DOMinput = document.querySelector("#user-content");
const resultBox = document.getElementById("random-results");
const userNames = [];

// Starting Arrow Function
let textToArray = () => {
  
 const user = DOMinput.value.trim;
  
  if(user !== "") {
    
     let rawMessage = user
       .split(",")
       .map(item => item.trim();
       .filter(item => item !== "");
    
       userNames.push(...rawMessage);
       resultBox.textContent = userNames;
  }
  
};
