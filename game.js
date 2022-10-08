
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
dialog = document.getElementById('dialog')
boxBot = document.getElementById('boxBot')


function hideAll() {
    btn1.classList.add('hide')
    btn2.classList.add('hide')
    btn3.classList.add('hide')
    btn4.classList.add('hide')
   //losing
    btn2.removeEventListener("click", gameQuit)
    btn1.removeEventListener("click", gameLost)
    btn2.removeEventListener("click", gameLost)
    btn3.removeEventListener("click", gameLost)
    btn4.removeEventListener("click", gameLost)
    //start button
    btn1.removeEventListener("click", gameStart)
    //remove game level button options
    btn1.removeEventListener("click", game01)
    btn1.removeEventListener("click", game02)
    btn1.removeEventListener("click", game03)
    btn2.removeEventListener("click", game04)
    btn4.removeEventListener("click", game05)
    btn3.removeEventListener("click", game06)
    btn1.removeEventListener("click", game07)
    btn2.removeEventListener("click", game08)
    btn4.removeEventListener("click", game09)
    btn3.removeEventListener("click", game10)
    btn1.removeEventListener("click", game11)
    btn1.removeEventListener("click", game12)
    btn1.removeEventListener("click", game13)
    btn1.removeEventListener("click", game14)
    btn2.removeEventListener("click", game15)
    btn3.removeEventListener("click", game16)
    btn2.removeEventListener("click", game17)
    btn3.removeEventListener("click", game18)
    btn4.removeEventListener("click", game19)
    btn4.removeEventListener("click", game20)
    btn1.removeEventListener("click", game21)
    btn1.removeEventListener("click", game22)
    btn1.removeEventListener("click", game23)
    btn1.removeEventListener("click", game24)
    btn1.removeEventListener("click", game25)
    btn4.removeEventListener("click", game26)
    btn3.removeEventListener("click", game27)
    btn1.removeEventListener("click", game28)
    btn2.removeEventListener("click", game29)
    btn3.removeEventListener("click", game30)
    btn2.removeEventListener("click", game31)
    btn4.removeEventListener("click", game32)
    btn1.removeEventListener("click", game33)
    btn4.removeEventListener("click", game34)
    btn1.removeEventListener("click", game35)
    btn1.removeEventListener("click", game36)
    btn1.removeEventListener("click", game37)
    btn1.removeEventListener("click", game38)
    btn1.removeEventListener("click", game39)
    btn1.removeEventListener("click", game40)
    btn3.removeEventListener("click", game41)
    btn4.removeEventListener("click", game42)
    btn1.removeEventListener("click", game43)
    btn2.removeEventListener("click", game44)
    btn2.removeEventListener("click", game45)
    btn3.removeEventListener("click", game46)
    btn4.removeEventListener("click", game47)
    btn1.removeEventListener("click", game48)
    btn4.removeEventListener("click", game49)
    btn1.removeEventListener("click", game50)
    btn2.removeEventListener("click", game51)
    btn3.removeEventListener("click", game52)
    btn1.removeEventListener("click", game52)
    btn1.removeEventListener("click", game53)
    btn1.removeEventListener("click", game54)
    btn1.removeEventListener("click", game55)
    dialog.innerHTML = '';
    boxBot.classList.remove('botHappy')
    boxBot.classList.remove('botAngry')
    boxBot.classList.remove('botLetter')
    console.log("all is hidden")
}

function gameStart() {
    hideAll()
    console.log('gameStart')
    btn1.classList.remove('hide')
    btn2.classList.remove('hide')
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Oh hello. <br/> Do you think you could help me out?';
    btn1.removeEventListener("click", gameStart)
    btn1.addEventListener("click", game01);
    btn2.addEventListener("click", gameQuit);
   
}
gameStart();

function gameQuit() {
    console.log('gameQuit')
    hideAll()
    dialog.innerHTML = 'Sorry to see you go, we value our employees, here is an envelope... <br/>containing a pink slip. <br/> HAVE A NICE VACATION';
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    boxBot.classList.add('botLetter')
}

function gameLost() {
    console.log('gameLost')
    hideAll()
    dialog.innerHTML = 'YOU LOST <br /> Nothing personal, but you\'re fired!';
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameStart)
    boxBot.classList.add('botAngry')
}




function game01() {
    console.log('game01')
    hideAll()
    dialog.innerHTML = 'We got work to do! I am happy you are here. <br /> Are you ready?';
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game02)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameQuit)
    boxBot.classList.add('botLetter')
    
}

function game02() {
    hideAll()
   console.log('game02')
   btn1.classList.remove('hide')
   btn1.addEventListener("click", game03)
   btn2.classList.remove('hide')
   btn2.addEventListener("click", gameLost)
   btn3.classList.remove('hide')
   btn3.addEventListener("click", gameLost)
   btn4.classList.remove('hide')
   btn4.addEventListener("click", gameLost)
   boxBot.classList.add('botHappy')
   dialog.innerHTML = 'Our company cannot tolerate error. If you fail, I will have to let you go. <br/>Please start by pressing the green button';
}


function game03() {
    hideAll()
   console.log('game03')
   btn1.classList.remove('hide')
   btn1.addEventListener("click", gameLost)
   btn2.classList.remove('hide')
   btn2.addEventListener("click", game04)
   btn3.classList.remove('hide')
   btn3.addEventListener("click", gameLost)
   btn4.classList.remove('hide')
   btn4.addEventListener("click", gameLost)
   boxBot.classList.add('botHappy')
   dialog.innerHTML = 'Great. Now press the red button';
}

function game04() {
    hideAll()
   console.log('game04')
   btn1.classList.remove('hide')
   btn1.addEventListener("click", gameLost)
   btn2.classList.remove('hide')
   btn2.addEventListener("click", gameLost)
   btn3.classList.remove('hide')
   btn3.addEventListener("click", gameLost)
   btn4.classList.remove('hide')
   btn4.addEventListener("click", game05)
   boxBot.classList.add('botHappy')
   dialog.innerHTML = 'Now press the yellow button';
}

function game05() {
    console.log('game05')
    hideAll()
    btn1.classList.remove('hide')
   btn1.addEventListener("click", gameLost)
   btn2.classList.remove('hide')
   btn2.addEventListener("click", gameLost)
   btn3.classList.remove('hide')
   btn3.addEventListener("click", game06)
   btn4.classList.remove('hide')
   btn4.addEventListener("click", gameLost)
   boxBot.classList.add('botHappy')
   dialog.innerHTML = 'Press the blue button';

}

function game06() {
    console.log('game06')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game07)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Ok. Now press those buttons again in that same order. Your performance will be graded';
}

function game07() {
    console.log('game07')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game08)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Keep it going!';
}

function game08() {
    console.log('game08')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game09)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Just a few more';
}

function game09() {
    console.log('game09')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game10)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Keep it going!';
}

function game10() {
    console.log('game10')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game11)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameQuit)

    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Great Job! <br /> Are you ready for the next assignment?';
}

function game11() {
    console.log('game11')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game12)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Okay! Start with blue, then red, then blue again.';
}

function game12() {
    console.log('game12')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game13)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'After that, press yellow twice!';
}

function game13() {
    console.log('game13')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game14)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'OH! <br /> Press Red before you press the other buttons.';
}

function game14() {
    console.log('game14')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game15)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Alright! <br /> You may get started';
}
//add buttons to hideall
function game15() {
    console.log('game15')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game16)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Great! <br /> Keep it up!';
}

function game16() {
    console.log('game16')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game17)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Wonderful!';
}

function game17() {
    console.log('game17')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game18)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Good! <br /> Keep going!';
}

function game18() {
    console.log('game18')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game19)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'A few more!';
}

function game19() {
    console.log('game19')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game20)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Good! <br /> Keep going!';
}

function game20() {
    console.log('game20')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game21)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Wow! That is super impressive <br /> for a human.';
}

function game21() {
    console.log('game21')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game22)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Are you ready <br /> for the next one?';
}

function game22() {
    console.log('game22')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game23)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Alright, I need yellow, blue, green, red';
}

function game23() {
    console.log('game23')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game24)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'After that, I need a blue, red, and a yellow';
}

function game24() {
    console.log('game24')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game25)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'and finish with green and a yellow';
}
//start
function game25() {
    console.log('game25')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game26)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'And....<br /> Go!';
}

function game26() {
    console.log('game26')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game27)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Good job';
}

function game27() {
    console.log('game27')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game28)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Keep it up!';
}

function game28() {
    console.log('game28')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game29)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'A couple more to go!';
}

function game29() {
    console.log('game29')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game30)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Fantastic';
}

function game30() {
    console.log('game30')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game31)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Perfect!';
}

function game31() {
    console.log('game30')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game32)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Fantastic';
}

function game32() {
    console.log('game32')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game33)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Perfect!';
}

function game33() {
    console.log('game33')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game34)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Fantastic';
}

function game34() {
    console.log('game34')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game35)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'I am truly impressed this time. <br /> Good job';
}

function game35() {
    console.log('game35')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game36)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Let us increase the challenge, yes?';
}

function game36() {
    console.log('game36')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game37)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Start with Yellow, Red, Blue, Green';
}

function game37() {
    console.log('game37')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game38)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Next is Blue, Yellow, Green, Red';
}

function game38() {
    console.log('game38')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game39)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Next is  Red, Blue, Yellow, Green';
}
//here
function game39() {
    console.log('game39')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game40)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Next is Yellow, Green, Red, Blue ';
}

function game40() {
    console.log('game40')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game41)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Go ahead! <br /> Press some buttons!';
}

function game41() {
    console.log('game41')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game42)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Great!';
}

function game42() {
    console.log('game42')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game43)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Perfect!';
}

function game43() {
    console.log('game43')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game44)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Great!';
}

function game44() {
    console.log('game44')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game45)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Keep it up!';
}

function game45() {
    console.log('game45')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game46)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Great!';
}

function game46() {
    console.log('game46')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game47)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'You are on a roll!';
}

function game47() {
    console.log('game47')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game48)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Good Job!';
}

function game48() {
    console.log('game48')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", game49)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Great!';
}

function game49() {
    console.log('game49')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game50)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'Click those buttons!';
}

function game50() {
    console.log('game50')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", game51)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", gameLost)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'You are almost there!';
}

function game51() {
    console.log('game51')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameLost)
    btn2.classList.remove('hide')
    btn2.addEventListener("click", gameLost)
    btn3.classList.remove('hide')
    btn3.addEventListener("click", game52)
    btn4.classList.remove('hide')
    btn4.addEventListener("click", gameLost)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'One more!';
}

function game52() {
    console.log('game52')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game53)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = 'That was great! <br /> You pressed all the buttons!';
}

function game53() {
    console.log('game53')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game54)
    dialog.innerHTML = 'I hope you didn\'t cheat! <br /> The prize is self satisfaction. ';
    boxBot.classList.add('botLetter')
}

function game54() {
    console.log('game54')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", game55)
    boxBot.classList.add('botHappy')
    dialog.innerHTML = '<strong>YOU WIN!</strong> <br /> Please come back later for more assignments!';
}

function game55() {
    console.log('game55')
    hideAll()
    btn1.classList.remove('hide')
    btn1.addEventListener("click", gameStart)
    boxBot.classList.add('botLetter')
    dialog.innerHTML = 'Check out Eric\'s Portfolio on his website <br/> <a href="http://ericpolley.com" target="_blank">ericpolley.com</a>';
}







