/* Accessing HTML DOM and creating global variables */

const DOMinput = document.querySelector("#user-content");
const resultBox = document.getElementById("random-results");
const studentList = document.getElementById("student-list");

const userNames = [];

const updateScreen = () => {
    studentList.textContent= "";

    userNames.forEach((value, index) => {
          const listItem = document.createElement("li");
          listItem.textContent = value + " ";
          const delBtn = document.createElement("button");
          delBtn.textContent = "del";

          delBtn.onclick = () => {
             userNames.splice(index, 1);

             updateScreen();
          };
      
      listItem.append(delBtn);
      studentList.append(listItem);
    });
  
  resultBox.textContent = userNames.join(", ");
};

const textToArray = () => {
  const user = DOMinput.value.trim();

  if (user !== "") {
    const rawMessage = user
      .split(",")
      .map(item => item.trim())
      .filter(item => item !== "");

    userNames.push(...rawMessage);

    updateScreen();
    DOMinput.value = "";
  }
};
