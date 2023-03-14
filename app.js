const sectionMenu = document.querySelectorAll(".sections");

sectionMenu.forEach(sections =>{
    sections.addEventListener("click", () => {
        sections.classList.toggle("active");
    })
})