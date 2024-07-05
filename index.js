const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartbtn = document.querySelector("#restartbtn");
//winning conditions
const winConditions = [
    [0, 1, 2]
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
];

let options = ["", "", "", "", "", "", "", "", ""]; 
let currentPlayer = "X"; 
let running =  flase; 

initilizeGame(); 

function initilizeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartbtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex"); 

    if(options[cellIndex] != "" || !running){
        return;
        
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer (){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"; 
    statusText.textContent = `${currentPlayer}'s turn`;
    
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const conditions = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condittion[2]];

        // check if there are empty spaces 
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }

        // make sure they all the same characters
        if(cellA == cellB && cellB == cellC){
            roundWon = ture;
            break;
        }

    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} WINS`;
        running = false;
    }else if(!options.includes("")){
        statusText.textContent = `DRAW!`;
        running = false;
    }else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X"; 
    options = ["", "", "", "", "", "", "", "", ""]; 
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}