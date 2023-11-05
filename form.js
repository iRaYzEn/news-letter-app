const form = document.querySelector(".form")
const input = document.querySelector(".input")
const errorElemnt = document.querySelector(".error-elemnt")

function error(errorHolder, input) {
    errorHolder.textContent = "Valid email required"
    input.style.borderColor = "var(--Tomato)"
    input.style.color = "var(--Tomato)"
    input.style.backgroundColor = "rgb(255, 201, 201)"
}


input.addEventListener("focus", () => {
    errorElemnt.textContent = ""
    input.style.borderColor = ""
    input.style.color = ""
    input.style.backgroundColor = ""
})

form.addEventListener("submit", (e) => {
    e.preventDefault()


    const inputValue = input.value

    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputValue.match(filter)) {
        localStorage.setItem("input-value", inputValue)
        window.location.href = "next.html"
    } else {
        error(errorElemnt, input)
    }

})
