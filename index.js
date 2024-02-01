

function select_x() {
    document.querySelector('.select_x').style.background = "#aabfc9";
    document.querySelector('.select_x').style.color = "#1a2b33";
    document.querySelector('.select_o').style.background = "#1a2b33";
    document.querySelector('.select_o').style.color = "#aabfc9";
    select_o_btn.style.border = "none";
    select_x_btn.style.border = "none";
    buttonclicked1 = true;
}

function select_o() {
    document.querySelector('.select_o').style.background = "#aabfc9";
    document.querySelector('.select_o').style.color = "#1a2b33";
    document.querySelector('.select_x').style.background = "#1a2b33";
    document.querySelector('.select_x').style.color = "#aabfc9";
    select_o_btn.style.border = "none";
    select_x_btn.style.border = "none";
    buttonclicked2 = true;
}


//  reload button 

function reloadd() {
    continuee();
}


// new game button if click or not and game start from here

let select_x_btn = document.querySelector('.select_x');
let select_o_btn = document.querySelector('.select_o');


let buttonclicked1 = false; 
let buttonclicked2 = false; 

let boxes = document.querySelectorAll(".box");
// let reloadbox = document.querySelector(".reload_box");

let span = document.querySelector(".turn_box_span");

let turnO = true;  

// winning pattern
const winnerpattern = [
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


let box_count = 0; 




function new_game() {
    // if MARK is not clicked by users then give alert message
    if (buttonclicked1 != true && buttonclicked2 != true) {
        // alert("start game");
        select_o_btn.style.borderColor = "red";
        select_x_btn.style.borderColor = "red";
    }
    if (buttonclicked1 == true || buttonclicked2 == true) {
        // alert(" button");

        document.querySelector('.start_box').style.display = "none";
        document.querySelector('.game').style.display = "flex";
        
        // game logic  for clicking mark on box
        boxes.forEach((box) => {
            box.addEventListener('click', () => {
                box_count++;
                if (turnO) {
                    box.style.color = "#34c4bd";
                    box.innerText = "X";
                    span.innerText = "O -";
                    turnO = false;
                } else {
                    box.style.color = "#ebb442";
                    box.innerText = "O";
                    span.innerText = "X -";
                    turnO = true;
                }
                box.disabled = true;

                checkwinner();
            });
        });

    }
}
let x = 1;
let o = 1;
let t = 1;
// checking & showing winner
const checkwinner = () => {
    for (let pattern of winnerpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                span.innerText = "";
                document.querySelector(".win_msg").style.visibility = "visible";
                document.querySelector(".winn").innerText = `Congratulation, winner is ${pos1val}`;
                disabledboxes();
                box_count = 0;
                if (pos1val === "X") {
                    document.querySelector(".result_x").innerText = x;
                    x++;
                }
                if (pos1val === "O") {
                    document.querySelector(".result_o").innerText = o;
                    o++;
                }
            }else {
                if ( box_count == 9) {
                    span.innerText = "";
                    document.querySelector(".win_msg").style.visibility = "visible";
                    document.querySelector(".winn").innerText = "Game is Tie";
                    disabledboxes();
                    document.querySelector(".result_t").innerText = t;
                    t++;
                    box_count = 0;
                }
                
            }
            
        }
        
    }
};

function continuee() {
    document.querySelector(".win_msg").style.visibility = "hidden";
    // location.reload();
    enabledboxes();
    boxes.innerText = "";
    turnO = true;
    span.innerText = "x-";
}

function exitt() {
    window.location.reload();
}
