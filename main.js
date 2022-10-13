showTask();
let addtaskinput = document.getElementById("addtaskinput");
let addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", function () {
  addtaskinputvalue = addtaskinput.value;

  // adding items to the local srtorage
  if (addtaskinputvalue.trim() != 0) {
    let webtask = localStorage.getItem("localtask");

    if (webtask == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(webtask);
    }

    taskObj.push(addtaskinputvalue);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = "";
    showTask();
  }
});

function showTask() {
  let webtask = localStorage.getItem("localtask");

  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }
  let html = "";
  let addedTaskList = document.getElementById("addedTaskList");
  taskObj.forEach((item, index) => {
    html += `<tr class="">
    
    <th>${index + 1}</th>
    <td class="pt-[10px] ml-[10px] flex flex-wrap md:flex-wrap-reverse w-[200px]">${item}</td>
    <td><button class=" md:ml-[130px] text-sm flex flex-row md:px-8 px-2 py-[2px] font-semibold text-xs border rounded dark:border-gray-100 dark:text-gray-100" onclick="edittask(${index})">Edit</button></td>
    <td><button class="float-right flex flex-row md:px-8 px-2 py-1 text-xs font-semibold border rounded dark:border-gray-100 dark:text-gray-100" onclick="deleteitem(${index})">Delete</button></td>
    
    
    </tr>`;
  });
  addedTaskList.innerHTML = html;
}

function edittask(index) {
  let addbtn = document.getElementById("addbtn");
  let savebtn = document.getElementById("savebtn");
  let saveindex = document.getElementById("saveindex");
  saveindex.value = index;
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  addtaskinput.value = taskObj[index];
  addbtn.style.display = "none";
  savebtn.style.display = "block";
}

let savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", function () {
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  let saveindex = document.getElementById("saveindex").value;
  taskObj[saveindex] = addtaskinput.value;
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  addbtn.style.display = "block";
  savebtn.style.display = "none";
  addtaskinput.value = "";
  showTask();
});

function deleteitem(index) {
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showTask();
}

// dletteall

let btndelete = document.getElementById("btndelete");

btndelete.addEventListener("click", function () {
  let webtask = localStorage.getItem("localtask");
  let savebtn = document.getElementById("savebtn");
  let addbtn = document.getElementById("addbtn");

  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
    taskObj = [];
  }
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  addbtn.style.display = "block";
  savebtn.style.display = "none";
  showTask();
});
