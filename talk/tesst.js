
const btn = document.querySelector('.talk');
const btnNoi = document.querySelector('.noi');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "vi-VN";
recognition.onstart = () => {
    console.log("void");
}


recognition.onresult = (event) => {
    console.log(event);
}

btn.addEventListener('click', () => {
    recognition.start();
})
btnNoi.addEventListener('click', () => {
    responsiveVoice.speak("Trang ăn cứt",'Vietnamese Female');
})


function read(msg){

    // const speech =  new SpeechSynthesisUtterance();
    // speech.lang = "vi_VN";
    // speech.text = msg;
    // speech.volume = 1; 
    // speech.rate = 1;
    // speech.pitch = 1;

    // window.speechSynthesis.speak(speech);
  
}


try {
    
} catch (error) {
    console.log(error);
}