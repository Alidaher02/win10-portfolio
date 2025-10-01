const WindowsBtn = document.getElementById("Windowsbtn");
const SideBar = document.getElementById("SideBar");
const recycleBin = document.getElementById("recycle-bin");
const Projects = document.getElementById("Projects")
 const myProjects = document.getElementById("myProjects")
 const video = document.getElementById("loadingVideo")
 const loader = document.getElementById("loader")
recycleBin.addEventListener("click", () => {
  recycleBin.classList.toggle("press")
  
});
Projects.addEventListener("click", () => {
  Projects.classList.toggle("press")
  

});

Projects.addEventListener("dblclick" , () =>{
  myProjects.classList.toggle("hidden")
})

WindowsBtn.addEventListener("click" , () =>{
    SideBar.classList.toggle("hidden")
})

video.onended = () =>{
  loader.style.display = "none";
}

