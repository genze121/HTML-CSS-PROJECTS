## Typewriter Effect

    > Screenshot for the reference

https://github.com/user-attachments/assets/24a785f8-fc35-45ca-81ca-212d477e3d45


    > We can also use set intervals to achieve the typewriter effect 

```js

const clickButton = document.querySelector('button');
const textElement = document.querySelector('.text');
const text = 'Hello World!';
let i = 0;

clickButton.addEventListener('click',typewriter);

const timer = setInterval(typewriter, 300);

function typewriter() {
  if (i < text.length) {
    clearInterval(timer);
    i = 0;
  } else {
    i++;
    textElement.innerHTML += text.charAt(i);
  }
}

```

Credits:- [Tirtha Sharma](https://github.com/genze121 "Tirtha Sharma")
