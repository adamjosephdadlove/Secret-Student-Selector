const DOMinput = document.querySelector("#user-content");
const resultBox = document.getElementById("random-results");
const studentList = document.getElementById("student-list");

let userNames = [];

let storedList = {};

const savedData = localStorage.getItem("studentList");
if(savedData) {
     userNames = JSON.parse(savedData);
}

const storedListRender = localStorage.getItem("savedStudentGrid");
if(storedListRender) {
     storedList = JSON.parse(storedListRender);
}

const updateScreen = () => {
    studentList.textContent = "";

    userNames.forEach((value, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("student-card");

        const listItem = document.createElement("li");
        listItem.classList.add("student-item");
        listItem.textContent = value;

        const delBtn = document.createElement("button");
        delBtn.textContent = "del";
        delBtn.classList.add("delete-btn");

        delBtn.onclick = () => {
            userNames.splice(index, 1);
            updateScreen();
        };

        cardDiv.append(listItem);
        cardDiv.append(delBtn);
        studentList.append(cardDiv);
    }); 
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

const clearEntireList = () => {
    userNames.splice();
    updateScreen();
};

const pickRandomName = () => {
    if(userNames.length > 0) {
        const randomidx = Math.floor(Math.random() * userNames.length);
        const winner = userNames[randomidx];
        resultBox.textContent = "Winner: " + winner;
    } else {
        resultBox.textContent = "Winner: No Students Added";
    }
};

const saveToStorage = () => {
    if(userNames.length === 0) return;
     
    const listInput = prompt("Enter your list name:")
    const dateToday = new Date();
    const savedListTimestamp = dateToday.toLocaleDateString();

     storedList[listInput] = {
          student: [...userNames],
          date: savedListTimestamp
     }
     
     localStorage.setItem("studentList", JSON.stringify(userNames));
     localStorage.setItem("savedStudentGrid", JSON.stringify(storedList));
};

updateScreen();
