const contactUsBtn = document.getElementById("contact-us")
const closeBtn = document.getElementById("closeBtn")
const contactModal = document.getElementById("contact-modal")

//change display to block to show the modal
contactUsBtn.addEventListener("click", () => {
    contactModal.style.display = "block"
})
//change display to none to close it
closeBtn.addEventListener("click", () => {
    contactModal.style.display = "none"
})
