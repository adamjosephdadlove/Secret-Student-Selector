const DOMinput = document.querySelector("#user-content");
const resultBox = document.getElementById("random-results");
const studentList = document.getElementById("student-list");
const savedSection = document.querySelector("#saved-section-wrapper");

let userNames = [];
let storedList = {};
let cardIsOpen = false;
let cardKey = "";

const savedData = localStorage.getItem("studentList");
if(savedData) {
     userNames = JSON.parse(savedData);
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
    userNames.splice(0);
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
     /*
    let listInput = currentCardKey;

    if (!cardIsOpen) {
        listInput = prompt("Enter the list name:");
        if (!listInput) return; 
        currentCardKey = listInput;
        cardIsOpen = true;
    }
    
    let date = new Date();
    let cardDate = date.toLocaleDateString();
     
    storedList[listInput] = {
         student: [...userNames],
         date: cardDate
    };
     
    localStorage.setItem("studentList", JSON.stringify(userNames));
    localStorage.setItem("savedStudentGrid", JSON.stringify(storedList));

    cardGridDisplay();
     */
     localStorage.setItem("studentList", JSON.stringify(userNames));
};

function cardGridDisplay() {
  /*
     savedSection.innerHTML = `
        <h2 class="saved-list-header"> My Lists </h2>
        <div class="card-grid" id="card-grid"> 
            
        </div>
     `;

     let gridInsertPort = document.getElementById("card-grid");

     let objectIteration = Object.keys(storedList);
     
     objectIteration.forEach((index, value) => {
        let card = document.createElement("div");
        card.classList.add(grid-card);

        let cardText = document.createElement("h4");
        cardText.textContent = value.student[index];

        let listItemAmount = document.createElement("div");
        let listItemAmountPara = document.createElement("p");
        listItemAmount.classList.add("liAmountDiv");
        listItemAmountPara.classList.add("liAmountText");
     });
   */
}

updateScreen();
