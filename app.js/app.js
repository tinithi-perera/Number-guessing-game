let num = Math.random() * 10 + 1;


let randomNum = Math.floor(num);
let chances = 3;
console.log(randomNum);
function random() {


    let numinput = Number(document.getElementById("inputnum").value);
    let heading = document.getElementById("heading");

    if (numinput > randomNum) {
        heading.innerText = "too high";
    }
    if (numinput < randomNum) {
        heading.innerText = "too low"
    }
    if (numinput === randomNum) {
        Swal.fire({
            title: "Congratulations, you are correct!",
            text: " ",
            imageUrl: "images/win.jpg",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
        document.getElementById("inputnum").disabled = true;
        return;

    }

    chances--;
    if (chances === 0) {
        heading.innerText = `😢 Game Over! The correct number was ${randomNum}.`;
        document.getElementById("inputnum").disabled = true;
        return;
    }
    else if (numinput > randomNum) {
        heading.innerText = `Too High! ${chances} chance(s) left.`;
    }
    else {
        heading.innerText = `Too Low! ${chances} chance(s) left.`;
    }

}

function btnclickonaction() {
    Swal.fire({
        title: "Keep going! Great players never quit.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#ffffff url(images\retry.jpg)",
        backdrop: `
    rgba(0,0,123,0.4)
    url(images/retry.jpg)
    left top
    no-repeat
  `
    });
    randomNum = Math.floor(Math.random() * 10) + 1;
    chances = 3;

    document.getElementById("inputnum").value = "";
    document.getElementById("inputnum").disabled = false;

    document.getElementById("heading").innerText =
        "Guess a number between 1 and 10";

    console.log(randomNum);


}
