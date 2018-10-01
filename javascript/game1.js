// /* Point click adventure game Zugg Island. You play as Detective (name), investigating Jadwiga's sister's death, her neighbors are:
// Jeffrey Dahmer, Ed Gein, John Wayne Gacy, Ted Bundy
// Point and click on them to talk to them have arrow image to click on to go to a different location*/

// //GLOBAL VARS
// //=======================================================
// let sceneIndex = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option6'];
const dialogue = ['Thank you for meeting me, detective.  Someone killed my sister and I need your help finding out which one of my neighbors did it!',
 "My first neighbor, Jeff, is from WI, and usually hangs out with boys only, but I saw my sister at his house not long before she died.", 
 "My second neighbor, John, is from IL, and is a community leader, but he likes clowns too much and can't be trusted.", 
 "My third neighbor, Ed, is also from WI, and mostly keeps to himself, working in his crafting shop.", 
 "Jeff: Oh hey, what are you doing here?", 
 'Hi Jeff, this is the detective helping me with some family stuff...',
 'Jeff: Nice to meet you.  Is this about your sister? Tragic stuff... welp gotta go!', 
 '~He seemed really strange and apathetic about the death~',
'dialogue9', 
'dialogue10', 
'dialogue11', 
'dialogue12', 
'dialogue13', 
'dialogu14', 
'dialogue15', 
'dialogue16'];
let stage = 0;
onClick=() =>{
    if($('.pic').on('click')){
    stage += 1;
    document.getElementById("progress").innerHTML = stage;
    }

};
// document.getElementsByClassName("dialogue"),
// count = 0;
// $('.pic').onclick = ()=> {
// count +=1;
// };

let charisma = 0;
let repulsion = 0;
let progress = 0;
const $nameInput = $('input').val();
// ////=======================================================
$('.pic').append('<img src = "main-character.png"></img>')
// startGame();
$('button').on('click', () => {
    events.startgame();
    $('.title').append($nameInput);
    $('input').remove();
    $('button').remove(); 
    $(".expose").text("Jadwiga meets you outside your precinct to discuss her sister's murder");
  }
);
// button.innerHTML = "Click me: " + count;
//^^^^^^^^^^^^^Make an array over which to iterate the dialogue
//inventory, charisma and repulsiveness at top character changes to bloody if 5 repulsive 10 Q and As 2 each

const fram = "junk"

const events = {    
startgame: () => {
    $('.pic').on('click' , () => {
        $('.dialogue').text(`${dialogue[0]}`)
        events.advanceDialogue();
        console.log(stage)
        onClick();
    })
     
    // charisma = charisma +1
    // $('.charisma').html(`${charisma}`)    ^^^^^^STILL USING^^^^^^^^^
    //.attr('src', 'image source')
    console.log(fram);
},

advanceDialogue: ()=>{
    dialogue.shift();
    $('.pic').on('click' , () => {
        $('.dialogue').text(`${dialogue[0]}`);
        if(stage ===5){
            $("#killer").append('<img src = "https://i.pinimg.com/originals/e2/c3/a2/e2c3a29e1d33e50e5a0df33e3d650792.png"></img>')
        }
        if(stage===8){
            $("#killer").remove('<img src = "https://i.pinimg.com/originals/e2/c3/a2/e2c3a29e1d33e50e5a0df33e3d650792.png"></img>')
        }
    })

},

endgame: ()=>{
        if(repulsion === 6){
            $('.body').append('<img src = "https://www.pixelcrumb.com/wp-content/uploads/2017/05/GAME-OVER-MAN-still.jpg"></img>')
    window.alert("YOU DIED");
    $('.container-fluid').empty()
        }
}
};




/*events ={
    startgame: ()=>{
 //$pic.on(click ){
       // this.advancegialogue()
    }
}
//advanceDialogue: ()=>{
//         dialogue.shift()
//         $(.dialogue).text(dialogue[0])
}
    // )
    
//     }
// }
*/


/*
2: dialogueOne =()=>{
    console.log('.startgame')
    // $('.dialogue').empty()
    $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[1]}`);
    dialogueTwo()
    return;
    })
},
3: dialogueTwo=()=>{
    dialogue.shift();
    $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[2]}`);
    dialogueThree()
    return;
    })
},
4: dialogueThree=()=>{
    dialogue.shift();
    // repulsion++;
    // console.log(repulsion)
    // $('.repulsion').html(`${repulsion}`)
    $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[3]}`)
    dialogueFour()
    return;
})

},
5: dialogueFour=()=>{
    dialogue.shift();
    console.log(dialogueThree())
    $('.dialogue').on('click' , () => {
        
        $('.dialogue').text(`${dialogue[4]}`) 
        $('.repulse').text("ghjk");
        $('.charm').append("ghjk")
        meetJeff();
    })
    // $('.repulse').on('click' , ()=> {
       
    // })
    
},
6: meetJeff=()=>{
    dialogue.shift();
        $('.dialogue').on('click' , () => {
        $('.dialogue').text(`${dialogue[5]}`)
        $('#killer').append('<img src = "https://i.pinimg.com/originals/e2/c3/a2/e2c3a29e1d33e50e5a0df33e3d650792.png"></img>')
        jeffTalk()
        return;
    });
},

7: jeffTalk=()=>{
    dialogue.shift();
    console.log('#killer')
        $('.dialogue').on('click', ()=>{
            $('.dialogue').text(`${dialogue[6]}`)
        replyOne()
        return;
    });
},
8: replyOne=()=>{
    dialogue.shift();
    $('#killer').empty();
    $('.dialogue').on('click', ()=>{
        $('.dialogue').text(`${dialogue[7]}`)
        jeffReplyOne()
        $('.dialogue').empty()
        return;
    });
},
9: jeffReplyOne=()=>{
    dialogue.shift();
    $(".dialogue").on('click',()=>{
        $('.dialogue').text(`${dialogue[8]}`)
        suspicionOne()
        return;
    });
},

10: suspicionOne=()=>{
    dialogue.shift();
    $(".dialogue").on('click',()=>{
        // $('#killer').remove()
        $('.dialogue').text(`${dialogue[9]}`)
        $('.dialogue')
        return;
        //CLICK OPTIONS 1 OR 2
});
},
*/

    


// /*

// const events = {
//         1: function(){
//                 someStat++;
//                 otherStat--;
//         }
//         3: anotherFunction();
// }



// if (button is clicked) {
//         sceneIndex++;
//         (HTMLElement).showtext(dialogue[sceneindex]);


//         // This part could just be a list of if(sceneindex == someindex) then run some code, 
//         if (sceneIndex in events) {
//                 events.sceneIndex();
//         }
// }
// */





