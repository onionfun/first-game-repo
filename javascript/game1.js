/* Point click adventure game Zugg Island. You play as Detective (name), investigating Jadwiga's sister's death, her neighbors are:
Jeffrey Dahmer, Ed Gein, John Wayne Gacy, Ted Bundy
Point and click on them to talk to them have arrow image to click on to go to a different location*/

//GLOBAL VARS
//=======================================================
// let sceneIndex = 0;
const dialogue = ['Thank you for meeting me, detective.  Someone killed my sister and I need your help finding out which one of my neighbors did it!   Click',
 'My first neighbor, Jeff, is from WI, and usually hangs out with boys only, but I saw my sister at his house not long before she died.', 
 "My other neighbor, John, is from IL, and is a community leader, but he likes clowns too much and can't be trusted.", "My neighbor across the way, Ed, is also from WI, and mostly keeps to himself, working in his crafting shop.",
 "And finally my neighbor Ted, from VT.  I think he's a cop and he's really nice but maybe a little too nice.  Click Jadwiga ->", "Oh hey, what are you doing here?", `Hi Jeff, this is the detective helping me with some family stuff...`,
 `Nice to meet you.  Is this about your sister? Tragic stuff... welp gotta go!`, ];
let charisma = 0;
let repulsion = 0;
let progress = 0;
const $nameInput = $('input').val();
////=======================================================
$('.pic').append('<img src = "main-character.png"></img>')
// startGame();
$('button').on('click', () => {
    startgame();
    $('.title').append($nameInput);
    $('input').remove();
    $('button').remove(); 
    $(".expose").text("Jadwiga meets you outside your precinct to discuss her sister's murder");
  }
);


//^^^^^^^^^^^^^Make an array over which to iterate the dialogue
//inventory, charisma and repulsiveness at top character changes to bloody if 50 repulsive 100 Q and As 2 each

const fram = "junk"
const startgame =() => {
    // charisma = charisma +1
    // $('.charisma').html(`${charisma}`)    ^^^^^^STILL USING^^^^^^^^^
    
    //.attr('src', 'image source')
    console.log(fram);
    $('.pic').on('click' , () => {
        $('.dialogue').text(`${dialogue[0]}`);
        dialogueOne();
    })
};
const dialogueOne =()=>{
    console.log('.startgame')
    $('.startgame').empty()
    $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[1]}`);
    dialogueTwo()
    })
}
const dialogueTwo=()=>{
    $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[2]}`);
    dialogueThree()
    })
}
const dialogueThree=()=>{
    repulsion++;
    console.log(repulsion)
    $('.repulsion').html(`${repulsion}`)
    $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[3]}`)
    dialogueFour()
})

}
const dialogueFour=()=>{
    console.log(dialogueThree())
    $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[4]}`)
        meetJeff();
    })
}
const meetJeff=()=>{
        $('.pic').on('click' , () => {
        $('.dialogue').text(`${dialogue[5]}`)
        $('#killer').append('<img src = "https://i.pinimg.com/originals/e2/c3/a2/e2c3a29e1d33e50e5a0df33e3d650792.png"></img>')
        jeffTalk()
    });
}

const jeffTalk=()=>{
    console.log('#killer')
        $('.dialogue').on('click', ()=>{
            $('.dialogue').text("Oh hey, what are you doing here?")
        replyOne()
    });
}
const replyOne=()=>{
    $('#killer').empty();
    $('.dialogue').on('click', ()=>{
        $('.dialogue').text(`Hi Jeff, this is ${$nameInput}, they're helping me out with some family stuff...`)
        jeffReplyOne()
        $('.dialogue').empty()
    });
}
const jeffReplyOne=()=>{
    $("#killer").on('click',()=>{
        $('.dialogue').text(`Nice to meet you ${$nameInput}.  Is this about your sister? Tragic stuff... welp gotta go!`)
        suspicionOne()
    });
}

const suspicionOne=()=>{
    $(".pic").on('click',()=>{
        $('#killer').remove()
        $('.dialogue').text(`~He seemed really strange and apathetic about the death~`)
        $('.dialogue')
        //CLICK OPTIONS 1 OR 2

});
}
/*

const events = {
        1: function(){
                someStat++;
                otherStat--;
        }
        3: anotherFunction();
}



if (button is clicked) {
        sceneIndex++;
        (HTMLElement).showtext(dialogue[sceneindex]);


        if (sceneIndex in events) {
                events.sceneIndex();
        }
}
*/
