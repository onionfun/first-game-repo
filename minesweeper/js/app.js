for(let y = 1; y < 11; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 10; x > 0; x--){
        const gameSquare = $('<div/>');
        gameSquare.addClass('square');
        gameSquare.addClass(`square-${y}-${x}`);
        $(`.game-column-${y}`).append(gameSquare);
        //if div has x and y attr you can grab it using .attr
        gameSquare.attr('x', x);
        gameSquare.attr('y', y);
    }
}
$('.square').on('click', (e)=>{
    console.log(e.currentTarget)
    $(e.currentTarget).css('background-color', 'black')

});

gameBoard =[
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
}}
console.log(gameBoard)

//userX = gameBoard.length - 1 - userY
//if row[i] == 1 alert ("mine"


















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
