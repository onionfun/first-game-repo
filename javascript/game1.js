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
    $(".expose").text("Jadwiega meets you outside your precinct to discuss her sister's murder");
  }
);
const fram = "fart"
const startgame =() => {
    // $('.startgame').empty()
    console.log(fram);
    $('.pic').on('click' , () => {
        $('.dialogue').text("Thank you for meeting me, detective.  Someone killed my sister and I need your help finding out which one of my neighbors did it!")
    })
}

// const talking = (event) =>{

    //when click on picture dialogue appears in dialogue bos
    //$(event.currentTarget).off('click').on()
// }
    
    // $('.pic').on('click', (e) => {
    //     $(e.currentTarget)
    //     // $('.pic').click(function( event ) {
    //     //     alert( event.currentTarget ); // true
    //     //   });
    //   }
    // )}
    

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


