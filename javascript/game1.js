/* Point click adventure game Zugg Island. You play Billy Jean, new to the land of Sudden Valley land your neighbors are:
Jeffrey Dahmer, Ed Gein, John Wayne Gacy, Ted Bundy
Point and click on them to talk to them have arrow image to click on to go to a different location*/


$('.pic').append('<img src = "main-character.png"></img>')


// startGame();

$('button').on('click', () => {
    startgame();
    const $nameInput = $('input').val();
    $('.title').append($nameInput);
    $('input').remove();
    $('button').remove();
  }
);

const startgame =() => {
    // $('.startgame').empty()
    console.log(name);
    
    $('.pic').on('click', (e) => {
        $(e.currentTarget)

        $('.col-4').innerHTML(`${name}`)
      }
    );}
    
// neighbors = [
//     {
//         name: "Jeffey Dahmer",
//         age: 34 
//     },{
//         name: "Ed Gein",
//         age: 77
//     },{
//         name: "John Wayne Gacy",
//         age: 52

//     },{
//         name: "Ted Bundy",
//         age: 42
//     } ]


