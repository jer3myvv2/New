/* ================= SPLASH SCREEN ================= */

function openMain(){

    document.getElementById("splash-screen").style.display = "none";

    document.getElementById("main-content").style.display = "block";
}

/* ================= PASSCODE SYSTEM ================= */

let enteredPass = "";

const correctPass = "1234";

function addNum(num){

    if(enteredPass.length < 4){

        enteredPass += num;

        updateDisplay();
    }

    if(enteredPass.length === 4){

        if(enteredPass === correctPass){

            nextScreen(2);

        }else{

            alert("Wrong Passcode");

            enteredPass = "";

            updateDisplay();
        }
    }
}

function updateDisplay(){

    let display = "";

    for(let i = 0; i < 4; i++){

        if(i < enteredPass.length){

            display += "● ";

        }else{

            display += "_ ";
        }
    }

    document.getElementById("pass-display").innerText = display;
}

/* ================= SCREEN NAVIGATION ================= */

function nextScreen(screenNumber){

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById("screen" + screenNumber)
    .classList.add("active");
}

/* ================= NO BUTTON ================= */

function handleNo(){

    alert("Too bad 😆 You have to continue!");
}