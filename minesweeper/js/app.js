const gameBoard =[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i]; 
    for (let i = 0; i < gameBoard.length; i++) {
        let choice = Math.random();
    if(choice < .15){
        row.push(1);
    } else {
        row.push(0);
    }
    $('.square').data(gameBoard, 1)
}}
console.log(gameBoard)

for(let y = 1; y < 11; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 10; x > 0; x--){
        const gameSquare = $('<div/>');
        gameSquare.addClass('square');
        gameSquare.addClass(`square-${y}-${x}`);
        $(`.game-column-${y}`).append(gameSquare);
        //if div has x and y attr you can grab it using .attr
        gameSquare.attr('x', y);
        gameSquare.attr('y', x);
    }
}

$('.square').on('click', (e)=>{
    console.log(e.currentTarget)
    let userX = $(e.currentTarget).attr('x') //grabbing coordinates when I click square
    let userY = parseInt($(e.currentTarget).attr('y'))
    console.log(`user clicked ${userX} and ${userY}`)
    gameBoard[gameBoard.length - 0 - userY][userX]


    if(gameBoard === 1){
        console.log("ham");
    }
    $(e.currentTarget).css('background-color', 'black')
    console.log(gameBoard)
//find the appropriate square in the js gameboard, comparing virtual gameboard with what they just clicked, see whether x,y is a 1 or 0
//x coord can stay the same. x can be the same but y has to start at the bottom gameboard.length-1(if you want fow 0) userY
});


$('button').on('click', () => {
  let seconds = 99;
const timePassing = setInterval (()=>{
    seconds--;
    if(seconds<=0){
        alert("Ya burnt");
    seconds = 99;
    }
    $('button').remove();
console.log(seconds)
$('.timer').text(`Timer: ${seconds}`)  
}, 1000)
}
);




//userX = gameBoard.length - 1 - userY
//if row[i] == 1 alert ("mine"
//when square is clicked con


















// $(`.square-5-1`).attr('id', 'ship')
// $('body').keydown((event)=>{
//     if(event.which == 37){
//         moveLeft();
//     }else if(event.which == 39){
//         moveRight()
//     }else if(event.which == 32){
//         ship.fireLaser();
//     }
// })

// class Laser{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     move(){
//         if(this.y < 11){
//             $(`.square-${this.x}-${this.y}`).removeClass('laser');
//             this.y++;
//             $(`.square-${this.x}-${this.y}`).addClass('laser');
//             setTimeout(()=>{
//                 this.move();
//             }, 100)
//         }   
//     }
// }
// const ship = {
//     x: 5,
//     y: 1,
//     fireLaser(){
//         const laser = new Laser(this.x, this.y+1)
//         $(`.square-${laser.x}-${laser.y}`).addClass('laser')
//         setTimeout(()=>{
//             laser.move();
//         }, 100)
        
//     }
// }
// const moveLeft = () => {
//     if(ship.x > 1){
//         const currentSquare = $('#ship');
//         currentSquare.removeAttr('id');
//         ship.x--;
//         $(`.square-${ship.x}-1`).attr('id', 'ship');
//     }
// }
// const moveRight = () => {
//     if(ship.x < 10){
//         const currentSquare = $('#ship');
//         currentSquare.removeAttr('id');
//         ship.x++;
//         $(`.square-${ship.x}-1`).attr('id', 'ship');
//     }
// }
