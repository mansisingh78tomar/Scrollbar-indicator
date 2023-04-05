const scrolls = document.getElementById("scrollIndicator");
const height = window.document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () =>{
    {
        const percent = (window.scrollY / height) * 100;
        scrolls.style.width = percent + "%";
    }
})