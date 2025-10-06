const WindowsBtn = document.getElementById("Windowsbtn");
const SideBar = document.getElementById("SideBar");
const recycleBin = document.getElementById("recycle-bin");
const Projects = document.getElementById("Projects")
 const myProjects = document.getElementById("myProjects")
 const video = document.getElementById("loadingVideo")
 const loader = document.getElementById("loader")
 const desktop = document.getElementById("desktop")
 const maxMize = document.getElementById("max")
 const close = document.getElementById("close")
 const mini = document.getElementById("mini")
 const maxMize1 = document.getElementById("max1")
 const close1 = document.getElementById("close1")
 const mini1 = document.getElementById("mini1")
 const folder = document.getElementById("folder")
 const Taskify = document.getElementById("Taskify")
 const Task = document.getElementById("Task")
 const closeTask = document.getElementById("closeTask")
 const inputBox = document.getElementById("inputBox")
 const AddTask = document.getElementById("AddTask")
 const toDo = document.getElementById("toDo")
 const ToDoList = document.getElementById("ToDoList")
 const taski = document.getElementById("taski")
 const fornite = document.getElementById("fortnite")
 const ImgFort = document.getElementById("ImgFort")
 const Time = document.getElementById("Time")

 

 recycleBin.addEventListener("click", (e) => {
 e.stopPropagation();
 recycleBin.classList.add("press")
 Projects.classList.remove("press")
 ToDoList.classList.remove("press")
});

Projects.addEventListener("click", (e) => {
  e.stopPropagation();
  Projects.classList.add("press")
  recycleBin.classList.remove("press")
  Taskify.classList.add("hidden")
  ToDoList.classList.remove("press")
 });
 
 ToDoList.addEventListener("click" , (e)=>{
  e.stopPropagation();
  ToDoList.classList.add("press")
  recycleBin.classList.remove("press")
  Projects.classList.remove("press")
  
  
 })



desktop.addEventListener("click" , function(e){
  e.stopPropagation();
  recycleBin.classList.remove("press")
  Projects.classList.remove("press")
  ToDoList.classList.remove("press")
})
  

ToDoList.addEventListener("dblclick" , () =>{
  Taskify.classList.toggle("hidden")
  myProjects.classList.add("hidden")
  taski.classList.add("taskPress")
  ImgFort.classList.add("hidden")
})

Projects.addEventListener("dblclick" , () =>{
  myProjects.classList.toggle("hidden")
  folder.classList.add("taskPress")
  ImgFort.classList.add("hidden")
})

WindowsBtn.addEventListener("click" , () =>{
    SideBar.classList.toggle("hidden")
})

maxMize.addEventListener("click" , () => {
myProjects.classList.toggle("maxMize")
Taskify.classList.toggle("maxMize")
}) 

close.addEventListener("click" , () =>{
  myProjects.classList.add("hidden")
  Taskify.classList.add("hidden")
  folder.classList.remove("taskPress")
  

})

mini.addEventListener("click" , ()=>{
  myProjects.classList.add("hidden")
  folder.classList.add("taskPress")
  Taskify.classList.add("hidden")
})
maxMize1.addEventListener("click" , () => {
  Taskify.classList.toggle("maxMize")
  toDo.classList.toggle("min")
  toDo.classList.add("taskMax")
  }) 
  
  close1.addEventListener("click" , () =>{
    Taskify.classList.add("hidden")
    taski.classList.remove("taskPress")
  
  })
  
  mini1.addEventListener("click" , ()=>{
    Taskify.classList.add("hidden")
  })

folder.addEventListener("click" , ()=>{
  myProjects.classList.remove("hidden")
  folder.classList.remove("taskPress")
  Taskify.classList.add("hidden")
  ImgFort.classList.add("hidden")

})

taski.addEventListener("click" , () => {
  Taskify.classList.remove("hidden")
  myProjects.classList.add("hidden")
  ImgFort.classList.add("hidden")

})

fornite.addEventListener("click" , () =>{
    ImgFort.classList.remove("hidden");
  Taskify.classList.add("hidden")
  myProjects.classList.add("hidden")
  fornite.classList.add("taskPress")

})

ImgFort.addEventListener("click" , () =>{
  ImgFort.classList.add("hidden")
  fornite.classList.remove("taskPress")

})

  const now = new Date();


var showDate = document.createElement("p")
showDate.innerHTML += `<p>
${now.getMonth() + 1}/
${now.getDate()}/
${now.getFullYear()}
</p>
`

Time.appendChild(showDate)




 

function AddingTask(){
  if(inputBox.value == ""){
    alert("Please Add a Task!")
  }else{
    var tsk = document.createElement("div")
    tsk.classList.add("task")
    
    tsk.innerHTML += `<div id="Task" class=" flex gap-5">
              <div  class="w-full h-fit flex items-center px-5 rounded-md  bg-[#2D2D2D] text-white py-3">
                <h1>${inputBox.value}</h1>
              </div>
              <button id="closeTask" class=" deleteBtn bg-red-600 h-fit py-3   px-5 rounded-md text-white text-sm">Delete</button>
             </div>`;


             toDo.appendChild(tsk);

             var deleteBtn = tsk.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function() {
        tsk.remove(); // remove only THIS task
    });
             inputBox.value = "";
  }
}

AddTask.addEventListener("click" , AddingTask)
inputBox.addEventListener("keydown" ,  function(event){
if(event.key === "Enter"){
  AddingTask();
}
})





video.onended = () =>{
  loader.style.display = "none";
}

