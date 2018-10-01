// /* Point click adventure game Zugg Island. You play as Detective (name), investigating Jadwiga's sister's death, her neighbors are:
// Jeffrey Dahmer, Ed Gein, John Wayne Gacy, Ted Bundy
// Point and click on them to talk to them have arrow image to click on to go to a different location*/

// //GLOBAL VARS
// //=======================================================
// let sceneIndex = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option6'];
const dialogue = ['0 Thank you for meeting me, detective.  Someone killed my sister and I need your help finding out which one of my neighbors did it!',
 "My first neighbor, Jeff, is from WI, and usually hangs out with boys only, but I saw my sister at his house not long before she died.", 
 "My second neighbor, John, is from IL, and is a community leader, but he likes clowns too much and can't be trusted.", 
 "My third neighbor, Ed, is also from WI, and mostly keeps to himself, working in his crafting shop.", 
 "JEFF: Jadwiga, what are you doing here?", 
 "I'm getting help from the detective about my sister.",
 "JEFF: Sorry to hear that. Tragic stuff, how are you holding up?", 
 "I'm doing all right, just trying to find answers, can we ask you some questions?",
 "JEFF: Sure",
 "Where were you the night of October the 1st?",
 "JEFF, placing his hand behind his head: Well, much to my embarassment, I'm on parole, you can check with PO Chester about that. As far as where I was... I was at El Potrero night club, you can find me there most nights of the week.",
 "I'll look into that, thanks",
 "JEFF: Anytime, if you need any more help, here's my number, feel free to call day or night.",
 "Will do.",
 "He seemed open and accomodating about the investigation, wouldn't you say?",
'Click Jadwiga after you have decided: ', 
"Ok. Why don't I tell you about John.", 
"JOHN: Did someone say my name?", 
"Whoa, John, you scared me! What are you doing out here?",
"JOHN: I was just at the Fundraiser at the children's hospital.  I was dressed as Pogo the Clown!  Making my way to bus station now.",
"What a great coincidence meeting you here, we just wanted to ask you some questions about October 1st.",
"JOHN: Sure thing, what would you like to know?",
"Well, firstly, where were you that night?",
"JOHN: I was over at the civic center helping out with my local Jaycees, I'm there every Monday night, you can ask Mr. Voorhees.",
"Ok, what did you guys do afterwards?",
"JOHN: Afterwards? Well it didn't end until late that night and by then we were all tired, so I headed home to sleep.",
"All right, we'll check that out, where can I reach you in the meantime?",
"JOHN: Here's my phone and address.  If I'm not at one of my restaurants, I'm probably with the Jaycees.",
"Perfect, I'll check on that.", 
"John always helps out the community, I don't think they could hurt a fly!",
"Click Jadwiga after you've decided: ",
"All right, let me check on these alibis and I'll get back with you tomorrow, Jadwiga.", 
"Ok, I'll meet you here tomorrow!",
"Jeff looks clean, he's under a lot of scrutiny being on parole, and John's alibi checked out between the Jaycees and his partner.  That leaves one last suspect: Ed.",
" ~ 12 hours later ~ ",
"Detective!  Should we find Ed today?", 
"Yes, I've call him in, should be here any minute now.", 
"ED: Heidi Ho neighbor!"];
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
$('body').on('click',  '.jeff', '.john', ()=>{ 
    repulsion+=6;
    document.getElementById("repulsion").innerHTML = repulsion;

});

$('body').on('click',  '.no', ()=>{ 
    repulsion+=1;
    document.getElementById("repulsion").innerHTML = repulsion;

});
$('body').on('click',  '.yes', ()=>{ 
    charisma+=1;
    document.getElementById("charisma").innerHTML = charisma;

});
// ////=======================================================
// let body = $('body').append('<img src="https://i.gifer.com/QACY.gif"></img>');
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
    console.log(fram);
},

advanceDialogue: ()=>{
    dialogue.shift();
    $('.pic').on('click' , () => {
        $('.dialogue').text(`${dialogue[0]}`);
        if(stage ===5){
            $("#killer").append('<img src = "https://i.pinimg.com/originals/e2/c3/a2/e2c3a29e1d33e50e5a0df33e3d650792.png"></img>');
        }
        if(stage===14){
            $("#killer").empty();
        }
        if(stage===15){
            $('.dialogue').append('<button class="yes btn-primary">I agree</button>');
            $('.dialogue').append('<button class="no btn-success">I disagree</button>');
        }
        if(stage===18){
            $("#killer").append('<img src = "Images/john-wayne.png"></img>');
        }
        if(stage===28){
            $('#killer').empty();
        }
        if(stage ===30){
            $('.dialogue').append('<button class="yes btn-primary">I agree</button>');
            $('.dialogue').append('<button class="no btn-success">I disagree</button>');
        }
        if(stage===37){
            $("#killer").append('<img src = "Images/ed-gein.png"></img>');









        if(repulsion >= 3){
        events.gameover();
    }
    
    })
},

endgame: ()=>{
    $('body').empty()
    $('body').css('background-image', 'url("https://i.ytimg.com/vi/GzyrLdSS3WY/maxresdefault.jpg")');
    $('body').append('<h1 class="end">Ed was the killer along, good job</h1>')

},

gameover: ()=>{
    $('body').empty()
    $('body').css('background-image', 'url("https://i.ytimg.com/vi/GzyrLdSS3WY/maxresdefault.jpg")');
    $('body').append('<h1 class="end">YOU were too repulsive and Jadwiga killed you</h1>')

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





