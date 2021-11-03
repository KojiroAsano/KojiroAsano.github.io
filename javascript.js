const greeting = document.getElementById('greeting');

const greetings = ["Hello!!","Hola!!","Oi!!","Bonjour!!","Guten tag!!","Buon giorno!!","こんにちは!!","你好!!","안녕하세요!!"]


let index = 0;

function move() {
    setInterval(() => {
        if(index >= greetings.length) index = 0;

        greeting.innerHTML = greetings[index];
        index++;
    }, 1000);
  }
