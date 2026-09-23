// selectors
const idinput = document.querySelector(".input-id");
const nameinput = document.querySelector(".input-name");
const phoneinput = document.querySelector(".input-phone");
const month9input = document.querySelector(".input-9");
const month10input = document.querySelector(".input-10");
const month11input = document.querySelector(".input-11");
const month12input = document.querySelector(".input-12");
const month1input = document.querySelector(".input-1");
const bookinput = document.querySelector(".input-book");
const createBtn = document.querySelector(".btn-create");
const form = document.querySelector("form");
const tableBody = document.querySelector(".tableBody");




// vars

let students = JSON.parse(localStorage.getItem("student")) || [];
let updateIndex = null;
let editing = false;
showstudent() 
// function

function createstudent() {
  const student = {
    id: idinput.value,
    name: nameinput.value,
    phone: phoneinput.value,
    month9: month9input.value,
    month10:month10input.value,
    month11:month11input.value,
    month12:month12input.value,
    month1:month1input.value,
    book:bookinput.value,

  };

  students.push(student);

  localStorage.setItem("student", JSON.stringify(students));

  clearinput();
  showstudent();
}


function showstudent() {
     tableBody.innerHTML ="";
    students.forEach((student,i) => {
 tableBody.innerHTML  +=
                `
                 <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.phone}</td>
        <td>${student.month9}</td>
        <td>${student.month10}</td>
        <td>${student.month11}</td>
        <td>${student.month12}</td>
        <td>${student.month1}</td>
        <td>${student.book}</td>
         <td class="bg-success"><svg 
         onclick ="editstudent(${i})"
         class="text-light"
         xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12">
	<path d="M0 0h12v12H0z" fill="none" />
	<path fill="currentColor" d="M8 6h3V4H8Zm-7 6h1V8H1Zm4 0h1v-2H5ZM0 7h3V5H0Zm4 2h3V7H4ZM1 4h1V1H1Zm8 8h1V7H9ZM5 6h1V1H5Zm4-3h1V1H9Zm0 0" />
</svg>
</td>
<td class="bg-danger "><svg
   onclick="deletestudent(${i})"
   class="text-light"
xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28">
	<path d="M0 0h28v28H0z" fill="none" />
	<path fill="currentColor" d="M11.5 6h5a2.5 2.5 0 0 0-5 0M10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zM7.772 21.978a2.75 2.75 0 0 0 2.74 2.522h6.976a2.75 2.75 0 0 0 2.74-2.522L21.436 7.5H6.565zM11.75 11a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m5.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z" />
</svg>
</td>
    </tr>


                `;
            
});
};


// function displayFilteredStudents(arr) {
//     let cartona = "";
//     for (let i = 0; i < arr.length; i++) {
//         cartona += `
//             <div class="card p-3 m-2">
//                 <h2>${arr[i].name}</h2>
//                 <p>Price: ${arr[i].price}</p>
//                 <p>Level: ${arr[i].level}</p>
//                 <button onclick="deletestudent(${i})" class="btn btn-danger">Delete</button>
//                 <button onclick="editstudent(${i})" class="btn btn-warning">Edit</button>
//             </div>
//         `;
//     }
//     cards.innerHTML = cartona;
// }

function updatestudent() {
    const student = {
        id: idinput.value,
        name: nameinput.value,
        phone: phoneinput.value,
        month9: month9input.value,
        month10: month10input.value,
        month11: month11input.value,
        month12: month12input.value,
        month1: month1input.value,
        book: bookinput.value
    };

    students.splice(updateIndex, 1, student);
    localStorage.setItem("students", JSON.stringify(students));
    showstudent();
    clearinput();
    createBtn.textContent = "Create";
    updateIndex = null;
    editing = false;
}

function clearinput(){
    idinput.value = "";
    nameinput.value = "";
    phoneinput.value = "";
    month9input.value = "";
    month10input.value = "";
    month11input.value = "";
    month12input.value = "";
    month1input.value = "";
    bookinput.value = "";
}

function editstudent(index) {
    idinput.value = students[index].id;
    nameinput.value = students[index].name;
    phoneinput.value = students[index].phone;
    month9input.value = students[index].month9;
    month10input.value = students[index].month10;
    month11input.value = students[index].month11;
    month12input.value = students[index].month12;
    month1input.value = students[index].month1;
    bookinput.value = students[index].book;

    createBtn.textContent = "Update";
    updateIndex = index;
    editing = true;
}

function deletestudent(index) {
  students.splice(index, 1);
  localStorage.setItem("student", JSON.stringify(students));
  showstudent();
}

function deleteAllStudent() {
  localStorage.clear();
  students = [];
  showstudent();
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (editing) {
    updatestudent();
  } else {
    createstudent();
  }
});