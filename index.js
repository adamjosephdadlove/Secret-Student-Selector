/* Accessing HTML DOM and creating global variables */

const DOMinput = document.querySelector("#user-content");
const resultBox = document.getElementById("random-results");
const studentList = document.getElementById("student-list");

const userNames = [];

const textToArray = () => {
  const user = DOMinput.value.trim();

  if (user !== "") {
    const rawMessage = user
      .split(",")
      .map(item => item.trim())
      .filter(item => item !== "");

    userNames.push(...rawMessage);

    studentList.innerHTML = "";

    userNames.forEach(name => {
      const listItem = document.createElement("li");
      listItem.textContent = name;
      studentList.append(listItem);
    });

    resultBox.textContent = userNames.join(", ");

    DOMinput.value = "";
  }
};
