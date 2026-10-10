/* Accessing HTML DOM and creating global variables */

const DOMinput = document.querySelector("#user-content");
const user = DOMinput.value;
const resultBox = document.getElementById("random-results");
const userNames = [];

// Starting Arrow Function
let textToArray = () => {

  if(user !== "") {
     let rawMessage = user.split(",").map(item => item.trim());
     userNames.push(rawMessage);
     resultBox.text = userNames;
  }
  
};
