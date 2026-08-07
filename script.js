const input = document.getElementById("studentName");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const count = document.getElementById("count");

let totalStudents = 0;

addBtn.addEventListener("click", function () {

    let name = input.value.trim();

    if (name === "") {
        alert("Please enter a student name");
        return;
    }

    let li = document.createElement("li");
    li.innerText = name + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        totalStudents--;
        count.innerText = totalStudents;
    });

    li.appendChild(deleteBtn);
    studentList.appendChild(li);

    totalStudents++;
    count.innerText = totalStudents;

    input.value = "";
});