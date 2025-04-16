const username = document.querySelector(".username");
const password = document.querySelector(".password");
const registerButton = document.querySelector("button");
const clearButton = document.querySelector(".clear");
const displayResult = document.querySelector(".display-data");

registerButton.addEventListener("click", registerData);

clearButton.addEventListener("click", clearRegisterData);

function registerData() {
  const usernameData = username.value;
  const passwordData = password.value;

  const registerArray = JSON.parse(localStorage.getItem("register")) || [];

  registerArray.push({
    username: usernameData,
    password: passwordData,
  });

  localStorage.setItem("register", JSON.stringify(registerArray));

  loadRegisterData();

  username.value = "";
  password.value = "";
}

function loadRegisterData() {
  const registeredData = JSON.parse(localStorage.getItem("register")) || [];

  const sortData = registeredData.sort((a, b) =>
    a.username.localeCompare(b.username)
  );

  displayResult.innerHTML = "";

  if (sortData.length === 0) {
    const noData = document.createElement("p");
    noData.innerHTML = "No Registered data";
    displayResult.appendChild(noData);
  } else {
    const divElement = document.createElement("div");
    const tableData = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    const theadOne = document.createElement("th");
    const theadTwo = document.createElement("th");

    theadOne.innerHTML = "Username";
    theadTwo.innerHTML = "Password";

    sortData?.forEach((rowData) => {
      const tableRow = document.createElement("tr");

      const tableRowDataOne = document.createElement("td");
      const tableRowDataTwo = document.createElement("td");

      tableRowDataOne.innerHTML = rowData.username;
      tableRowDataTwo.innerHTML = rowData.password;

      tableRow.appendChild(tableRowDataOne);
      tableRow.appendChild(tableRowDataTwo);
      tableBody.appendChild(tableRow);
    });

    tableData.appendChild(tableHead);
    tableHead.appendChild(theadOne);
    tableHead.appendChild(theadTwo);
    tableData.appendChild(tableBody);
    divElement.appendChild(tableData);
    displayResult.appendChild(divElement);
  }
}

function clearRegisterData() {
  localStorage.clear();
  loadRegisterData();
}

loadRegisterData();
