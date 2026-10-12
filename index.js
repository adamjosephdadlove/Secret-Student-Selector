const DOMinput = document.querySelector("#user-content");
const resultBox = document.getElementById("random-results");
const studentList = document.getElementById("student-list");

const userNames = [];

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
