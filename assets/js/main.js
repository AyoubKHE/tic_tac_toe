
let allCells = document.querySelectorAll(".cell");

let playerTurn = "x";

let isGameEnded = false;

let spanTurn = document.getElementById("span-turn");

function handleCellClick(event) {

    if(isGameEnded) {
        return;
    }

    function winCheck() {

        function winCheckHelp(c1, c2, c3) {

            let cell1 = allCells[c1].children[0].getAttribute("src");
            let cell2 = allCells[c2].children[0].getAttribute("src");
            let cell3 = allCells[c3].children[0].getAttribute("src");

            if (cell1 === "images/question-mark-96.png" || cell2 === "images/question-mark-96.png" ||
                cell3 === "images/question-mark-96.png") {

                return false;

            }
            if (cell1 === cell2 && cell1 === cell3) {
                allCells[c1].style.backgroundColor = allCells[c2].style.backgroundColor = allCells[c3].style.backgroundColor = "green";
                return true;
            }
            
            return false;
        }

        return winCheckHelp(0, 1, 2) || winCheckHelp(3, 4, 5) || winCheckHelp(6, 7, 8) || winCheckHelp(0, 3, 6) ||
            winCheckHelp(1, 4, 7) || winCheckHelp(2, 5, 8) || winCheckHelp(0, 4, 8) || winCheckHelp(2, 4, 6);
    }

    if (window.getComputedStyle(event.target).cursor === "default") {
        return;
    }

    event.currentTarget.style.cursor = "default";

    let currentCellImage = event.target;

    if (playerTurn === "x") {
        currentCellImage.setAttribute("src", "images/X.png");
        if (winCheck()) {
            setTimeout(() => {
                alert("X win");
            }, 0);
            isGameEnded = true;
            spanTurn.textContent = "";
            return;
        }
        playerTurn = "o";
        spanTurn.textContent = "O";
    } else {
        currentCellImage.setAttribute("src", "images/O.png");
        if (winCheck()) {
            setTimeout(() => {
                alert("O win");
            }, 0);
            isGameEnded = true;
            spanTurn.textContent = "";
            return;
        }
        playerTurn = "x";
        spanTurn.textContent = "X";
    }
}

for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", handleCellClick);
}

document.getElementById("btn-restart-game").addEventListener("click", function () {
    location.reload();
})