/* Accessing HTML DOM and creating global variables */

const DOMinput = document.querySelector("#user-content");
const resultBox = document.getElementById("random-results");
const userNames = [];

// Starting Arrow Function
let textToArray = () => {
  
 const user = DOMinput.value;
  
  if(user !== "") {
     let rawMessage = user.split(",").map(item => item.trim());
     userNames.push(...rawMessage);
     resultBox.textContent = userNames;
  }
  
};
