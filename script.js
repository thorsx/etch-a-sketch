let grid = document.querySelector('.grid-container');
createDivs(25);

grid.addEventListener('mouseover', function (e) {
    let color = bgChange();
    if (e.target.className == 'newDiv'){
        e.target.style.background = bgChange();
    }
}); 

document.addEventListener('click', function (e)
    {
        if (e.target.id == 'reset') {
            location.reload();
            return false;
        } 
        
        if (e.target.id == 'changeSize') {
            let newSize = prompt("Enter a new size (1-100)", 25);
            if (!isNaN(newSize) && (newSize>0 && newSize<101)) {
                createDivs(newSize);
            } 
            else if (newSize === null){
                return;
            }
            else {
                alert("You did not enter a number between 1 & 100");
            }
        }
    return;
});

function bgChange() {
  const rndCol = Math.floor(Math.random()*16777215).toString(16);
  return '#'+rndCol;
}

function getDivH(gridSize){
    let divH = 750/gridSize;
    return divH;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createDivs(x){
    removeAllChildNodes(grid);
    
    let divH = getDivH(x);
    let auto ="";
    for (let i = 0; i<x; i++) {
        auto += "auto ";
        for (let y = 0; y<x; y++) {
            let div = document.createElement("div");
            div.style.height = divH;
            div.classList.add('newDiv');
            grid.appendChild(div);
    }
}

    grid.style.gridTemplateColumns = auto;
}
 
  
