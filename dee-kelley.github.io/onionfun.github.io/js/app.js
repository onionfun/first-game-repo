

$('button').on('click', () => {
    const music = $('<audio autoplay id="myAudio"> <source src="megaman.mp3"></audio>');
    $('button').append(music)
    let seconds = 99;
  const timePassing = setInterval (()=>{
      seconds--;
      if(seconds<=0){
        $('.youDied').modal();
        $('.dedRestartBtn').on('click', ()=>{
            window.location.reload(true);
        })
      seconds = 99;
      }
      $('.fart').remove();
  console.log(seconds)
  $('.timer').text(`Timer: ${seconds}`)  
  }, 1000)
  }
  );


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
for (let j = 1; j < 11; j++) { 
    for (let i = 1; i < 11; i++) {
        let choice = Math.random();
    if(choice < .15){
    $(`.square-${j}-${i}`).addClass('mine');   
}
}};


$('.square').on('click', (e)=>{
    console.log(e.currentTarget)
    let userX = Number($(e.currentTarget).attr('x')); //grabbing coordinates when I click square
    let userY = Number(($(e.currentTarget).attr('y')));
    console.log(`user clicked ${userX} and ${userY}`)
    // console.log(`corresponds with row ${gameBoard.length - userY}`)
    // const clicked = gameBoard[gameBoard.length - userY][userX - 1]
    //if(clicked === 1){
        if($(e.currentTarget).hasClass('mine')){
        $(e.currentTarget).css('background-color', 'red')
        $('.youDied').modal();
        $('.dedRestartBtn').on('click', ()=>{
            window.location.reload(true);
        })
        
    } else {
    // console.log(clicked);
    $(e.currentTarget).css('border-style', 'inset').css('background-color', 'darkgray')
    }
    clickCheck(userX, userY);
    //if total board clicked -mines  = 0, winner
    if(((userX * userY)-$('.mine'))===(userX * userY)){
        alert("you won");
    }
});



const clickCheck = (x, y) =>{
    //look at surrounding square to see if there's a 1 in them add one to count of mines
    let mines = 0; //append mines to the buttons
    if($(`.square-${x+1}-${y+1}`).hasClass('mine')){
        mines++
    }if($(`.square-${x+1}-${y}`).hasClass('mine')){
        mines++
    }if($(`.square-${x+1}-${y-1}`).hasClass('mine')){
    mines++
    }if($(`.square-${x}-${y+1}`).hasClass('mine')){
    mines++
    }if($(`.square-${x}-${y-1}`).hasClass('mine')){
    mines++
    }if($(`.square-${x-1}-${y+1}`).hasClass('mine')){
    mines++
    }if($(`.square-${x-1}-${y}`).hasClass('mine')){
    mines++
    }if($(`.square-${x-1}-${y-1}`).hasClass('mine')){
    mines++
    }
    $(`.square-${x}-${y}`).text(mines);
}
















//draw gameBoard location to corresponding grid piece
//$(`square-${y}-${x}`).data(gameBoard[i][i]) given square at x,y find the corresponding array value at [i][i]
//get coordinates from the div and set them equal to the value of the corresponding array
//set array value to bomb if 1
//well you can get the element you click at, then you need a good way to reference if there is a mine there
//if e.target is touching 1>mine gamesquare.text(1)



// const gameBoard =[
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
// ]






//     if(gameBoard[11-y][x-1]){   //x and y are mirrored
//     if(gameBoard[11-y][x-1]===1){
//         mines++;
//     }
//     }
//     if(gameBoard[10-y][x-1]){   //x and y are mirrored
//         if(gameBoard[10-y][x-1]===1){
//             mines++;
//         }
//         }  
//     if(gameBoard[11-y][x-2]){   //x and y are mirrored
//     if(gameBoard[11-y][x-2]===1){
//         mines++;
//     }
//     }
//     if(gameBoard[11-y][x]){   //x and y are mirrored
//         if(gameBoard[11-y][x]===1){
//             mines++;
//         }
//     }
//     if(gameBoard[10-y][x]){   //x and y are mirrored
//         if(gameBoard[10-y][x]===1){
//             mines++;
//         }
//     console.log(`MINES ARE ${mines}`);
//     }  
// }
//     // if(clicked + 1 === 1 && clicked - 1 === 1){
//     //     console.log("TWO");
//     // }
// //find the appropriate square in the js gameboard, comparing virtual gameboard with what they just clicked, see whether x,y is a 1 or 0
// //x coord can stay the same. x can be the same but y has to start at the bottom gameboard.length-1(if you want fow 0) userY


// //if neighbors look at gameboard array and look at all the neighbors  up down left right to see if it's a one






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
