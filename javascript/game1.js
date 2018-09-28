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
    $(".expose").text("Jadwiga meets you outside your precinct to discuss her sister's murder");
  }
);

//inventory, charisma and repulsiveness at top character changes to bloody if 50 repulsive 100 Q and As 2 each

const fram = "junk"
const startgame =() => {
    // $('.startgame').empty()
    //.attr('src', 'image source')
    console.log(fram);
    $('.pic').on('click' , () => {
        $('.dialogue').text("Thank you for meeting me, detective.  Someone killed my sister and I need your help finding out which one of my neighbors did it!   Click")
        dialogueOne()
    
    });
const dialogueOne =()=>{
    $('.dialogue').on('click' , () => {
        $('.dialogue').text("My first neighbor, Jeff, is from WI, and usually hangs out with boys only, but I saw my sister at his house not long before she died.")
    dialogueTwo()
    })}
const dialogueTwo=()=>{
    $('.dialogue').on('click' , () => {
        $('.dialogue').text("My other neighbor, John, is from IL, and is a community leader, but he likes clowns too much and can't be trusted.")
    dialogueThree()
    })}
const dialogueThree=()=>{
    $('.dialogue').on('click' , () => {
        $('.dialogue').text("My neighbor across the way, Ed, is also from WI, and mostly keeps to himself, working in his crafting shop.")
    dialogueFour()
})}
const dialogueFour=()=>{
    $('.dialogue').on('click' , () => {
        $('.dialogue').text("And finally my neighbor Ted, from VT.  I think he's a cop and he's really nice but maybe a little too nice.  Click Jadwiga ->")
        meetJeff();
    })
}
const meetJeff=()=>{
        $('.pic').on('click' , () => {
        $('.dialogue').text("Oh look, here's Jeff now!")
        $('#killer').append('<img src = "https://i.pinimg.com/originals/e2/c3/a2/e2c3a29e1d33e50e5a0df33e3d650792.png"></img>')
    $("#killer").on('click',()=>{ 
        $('.dialogue').append("Oh hey, what are you doing here?")
    })
        
    });
    


}


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


