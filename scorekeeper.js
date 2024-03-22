let leftScore = document.querySelector('#left_score');
leftScore.innerText = 0;

let rightScore = document.querySelector('#right_score');
rightScore.innerText = 0;

let dropDown = document.querySelector('#selectOne');

let buttonLeft = document.querySelector('#update_leftScore');
let buttonRight = document.querySelector('#update_rightScore');
let buttonReset = document.querySelector('#resetScore');

function buttonStyles () {
    buttonLeft.style.backgroundColor = "#b0b0b0";
    buttonLeft.style.color = "gray";
    buttonRight.style.backgroundColor = "#b0b0b0";
    buttonRight.style.color = "gray";
}


buttonLeft.addEventListener('click', () => {
    if (leftScore.innerText < parseInt(dropDown.value) && rightScore.innerText < parseInt(dropDown.value)) {
        leftScore.innerText = parseInt(leftScore.innerText) + 1;
    }
         if (leftScore.innerText == parseInt(dropDown.value)) {
            leftScore.style.color = "green";
            rightScore.style.color = "red";
            buttonStyles();

        }
    }
);


buttonRight.addEventListener('click', () => {
    if (rightScore.innerText < parseInt(dropDown.value) && leftScore.innerText < parseInt(dropDown.value)) {
        rightScore.innerText = parseInt(rightScore.innerText) + 1;
    }
         if (rightScore.innerText == parseInt(dropDown.value)) {
            leftScore.style.color = "red";
            rightScore.style.color = "green";
            buttonStyles();

        }
    }
)

buttonReset.addEventListener('click', () => {

    leftScore.innerText = 0;
    rightScore.innerText = 0;
    leftScore.style.color = "";
    rightScore.style.color = "";
    buttonLeft.style.color = "";
    buttonRight.style.color = "";
    buttonRight.style.backgroundColor = "";
    buttonLeft.style.backgroundColor = "";

})




