function speak(letter){
    var audio=document.getElementById('audio');
  var speaker=document.getElementById('speaker');
    if(letter=='a') audio.src='apple.mp3';
    else if(letter=='b') audio.src='ball.mp3';
    else if(letter=='c') audio.src='cat.mp3';
    else if(letter=='d') audio.src='dog.mp3';
    else if(letter=='e') audio.src='elephant.mp3';
    else if(letter=='f') audio.src='fun.mp3';
    else if(letter=='g') audio.src='gun.mp3';
    else if(letter=='h') audio.src='hen.mp3';
    else if(letter=='i') audio.src='inkpot.mp3';
    else if(letter=='j') audio.src='juckle.mp3';
    else if(letter=='k') audio.src='king.mp3';
    else if(letter=='l') audio.src='love.mp3';
    else if(letter=='m') audio.src='monkey.mp3';
    else if(letter=='n') audio.src='nest.mp3';
    else if(letter=='o') audio.src='old.mp3';
    else if(letter=='p') audio.src='pen.mp3';
    else if(letter=='q') audio.src='queen.mp3';
    else if(letter=='r') audio.src='run.mp3';
    else if(letter=='s') audio.src='sun.mp3';
    else if(letter=='t') audio.src='twelve.mp3';
    else if(letter=='u') audio.src='uncle.mp3';
    else if(letter=='v') audio.src='voice.mp3';
    else if(letter=='w') audio.src='watch.mp3';
    else if(letter=='x') audio.src='x.mp3';
    else if(letter=='y') audio.src='yarn.mp3';
    else if(letter=='z') audio.src='zebra.mp3';
    else alert("Not Found");
    speaker.style.color='black';
    audio.play();
    setTimeout(function(){
        speaker.style.color='gray';
    },1000)
}

