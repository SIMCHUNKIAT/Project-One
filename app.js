console.log('Gobble Up Tic Tac Toe');

const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    // let element = document.getElementById(data);
    let target = ev.target;
    if (ev.target.tagName === "DIV") {
        if (target.childNodes.length === 0) {
            target.appendChild(document.getElementById(data));
        }
    } else if (ev.target.tagName === "IMG") {
        const existingPieceSize = ev.target.getAttribute("size");
        // console.log(existingPieceSize);
        const draggedPieceSize = document.getElementById(data).getAttribute("size");
        // console.log(draggedPieceSize);
        if (existingPieceSize < draggedPieceSize) {
            // console.log(ev.target.parentElement);   // checking for parentElement
            target.parentElement.appendChild(document.getElementById(data));
            ev.target.remove();
            // console.log(ev.target.parentElement); // checking the parent element which tells me null, therefore, need to somehow select the yellow box Div again and append the new piece
        }
    }
    
const checkDiv1 = document.getElementById("div1").childNodes[0]?.getAttribute("player");
// console.log(checkDiv1);
const checkDiv2 = document.getElementById("div2").childNodes[0]?.getAttribute("player");
// console.log(checkDiv2);
const checkDiv3 = document.getElementById("div3").childNodes[0]?.getAttribute("player");
// console.log(checkDiv3);
const checkDiv4 = document.getElementById("div4").childNodes[0]?.getAttribute("player");
// console.log(checkDiv4);
const checkDiv5 = document.getElementById("div5").childNodes[0]?.getAttribute("player");
// console.log(checkDiv5);
const checkDiv6 = document.getElementById("div6").childNodes[0]?.getAttribute("player");
const checkDiv7 = document.getElementById("div7").childNodes[0]?.getAttribute("player");
const checkDiv8 = document.getElementById("div8").childNodes[0]?.getAttribute("player");
const checkDiv9 = document.getElementById("div9").childNodes[0]?.getAttribute("player");

if (checkDiv1 !== undefined && checkDiv1 === checkDiv2) {
    if (checkDiv2 === checkDiv3) {
        setTimeout(()=>alert("Player " + checkDiv1 + " wins!"),500);
    }
}

if (checkDiv4 !== undefined && checkDiv4 === checkDiv5) {
    if (checkDiv5 === checkDiv6) {
        setTimeout(()=>alert(`Player ${checkDiv4} wins!`),500);
    }
}

if (checkDiv7 !== undefined && checkDiv7 === checkDiv8) {
    if (checkDiv8 === checkDiv9) {
        setTimeout(()=>alert(`Player ${checkDiv7} wins!`),500)
    }
}

if (checkDiv1 !== undefined && checkDiv1 === checkDiv4) {
    if (checkDiv4 === checkDiv7) {
        setTimeout(()=>alert("Player " + checkDiv1 + " wins!"),500);
    }
}

if (checkDiv2 !== undefined && checkDiv2 === checkDiv5) {
    if (checkDiv5 === checkDiv8) {
        setTimeout(()=>alert(`Player ${checkDiv5} wins!`),500);
    }
}

if (checkDiv3 !== undefined && checkDiv3 === checkDiv6) {
    if (checkDiv6 === checkDiv9) {
        setTimeout(()=>alert(`Player ${checkDiv6} wins!`),500);
    }
}

if (checkDiv1 !== undefined && checkDiv1 === checkDiv5) {
    if (checkDiv5 === checkDiv9) {
        setTimeout(()=>alert(`Player ${checkDiv1} wins!`),500);
    }
}

if (checkDiv3 !== undefined && checkDiv3 === checkDiv5) {
    if (checkDiv5 === checkDiv7) {
        setTimeout(()=>alert(`Player ${checkDiv5} wins!`),500);
    }
}
}