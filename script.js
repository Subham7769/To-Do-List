/*******************************Global Accessing the elements************************* */
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("task-list");
const tasks = document.getElementById("tasks");
const DueDate = document.getElementById("DueDate");
const priority = document.getElementById("priority");
let prioritySelected = false;

/********************************Priority Checker Function****************************** */
priority.addEventListener("click", (e) => {
  if (prioritySelected) {
    e.target.style.color = `#878787`;
    prioritySelected = false;
  } else {
    e.target.style.color = `#ff1100`;
    prioritySelected = true;
  }
});


/********************************Task Creator Function****************************** */
taskInput.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "white";
});
addTask.addEventListener("click", () => {
  if (taskInput.value == "") {
    taskInput.style.backgroundColor = `rgba(255, 0, 0, 0.219)`;
    return;
  } 
  else {
    let newTask = document.createElement("li");

    newTask.innerHTML = `
        <h2>${taskInput.value}</h2>
        <span>
            <b>Due Date : ${DueDate.value}</b>
            <b>Priority : <span style="color:${prioritySelected ? "Red" : "Green"};">${prioritySelected ? "High" : "Low"}</span></b>
            <button onclick="CompletedTask(this)" class="Completed">Completed</button>
            <button onclick="DeleteTask(this)" class="delete">Delete</button>
        </span>`;

    tasks.appendChild(newTask);
    taskInput.value = "";
    DueDate.value = "";
    prioritySelected = true;
    priority.click();
  }
});


/********************************Completed Task Function****************************** */
function CompletedTask(myBtn) {
  let parentSpan = myBtn.parentElement; // get the parent element of button clicked on it will be li tag
  let li = parentSpan.parentElement; // get the parent element of Span tag that is li
    let h2 = li.getElementsByTagName("h2");
  console.log(h2[0]);
  h2[0].style.textDecoration = "line-through";
  li.style.backgroundColor = "lightGrey";
  li.style.borderColor = "darkGray";
  myBtn.style.backgroundColor = "DarkGray";
  myBtn.disabled = true;
}

/********************************Deleted Task Function****************************** */
function DeleteTask(myBtn) {
  let parentSpan = myBtn.parentElement; // get the parent element of button clicked on it will be li tag
  let li = parentSpan.parentElement; // get the parent element of Span tag that is li
  li.remove();
}















/***************************random color changing******************************* */
// const body = document.getElementsByTagName("body");
// function bgRandom(){
//     var r = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var a = 0.2;
//     body[0].style.backgroundColor = `rgba(`+ r +`,`+ g +`,`+ b +`,`+ a +`\)`;
// }
// setInterval(bgRandom,1000);