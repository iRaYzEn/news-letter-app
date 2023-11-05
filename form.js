const form = document.querySelector(".form")
const input = document.querySelector(".input")
const errorElemnt = document.querySelector(".error-elemnt")

function error(errorHolder, input) {
    errorHolder.textContent = "Valid email required"
    input.style.borderColor = "var(--Tomato)"
    input.style.color = "var(--Tomato)"
    input.style.backgroundColor = "#fffafa"
}


input.addEventListener("focus", () => {
    errorElemnt.textContent = ""
    input.style.borderColor = ""
    input.style.color = ""
    input.style.backgroundColor = ""
})

form.addEventListener("submit", (e) => {
    e.preventDefault()


    const inputValue = [...input.value]

    const filterAT = inputValue.some(let => let == "@")
    const filterDot = inputValue.some(let => let == ".")

    if (filterAT && filterDot) {
        localStorage.setItem("input-value", inputValue.join(""))
        window.location.href = "next.html"

    } else {
        error(errorElemnt, input)
    }

})
