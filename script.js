const popup = document.querySelector(".popup-overlay")
document.getElementById("show-popup").onclick=function(){
popup.classList.add("popup--show")}
document.getElementsByClassName("popup-close")[0].onclick=function(){
popup.classList.remove("popup--show")}





const accordionHeaders = document.querySelectorAll('.accordion-header')

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        if (header.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px'
        } else {
            content.style.maxHeight = null
        }
        if()
    })
})