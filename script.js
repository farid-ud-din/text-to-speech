let speak = new SpeechSynthesisUtterance();

let voices = [];

let selectVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speak.voice = voices[0];

    voices.forEach((voice, i) => (selectVoice.options[i] = new Option(voice.name, i)))
}

selectVoice.addEventListener("change", () => {
    speak.voice = voices[selectVoice.value]
})

document.querySelector("button").addEventListener("click", () => {

    speak.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speak);

})  