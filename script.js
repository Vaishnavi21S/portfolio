function hamburg () {
    const navbar = document . querySelector(".dropdown");
    navbar. style.transform = 'translateY(0px)';
}
function cancel () {
    const navbar = document . querySelector(".dropdown");
    navbar. style.transform = 'translateY(-500px)';
}
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typewrite-text");
  const words = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Django Enthusiast"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = '';
  let isDeleting = false;

  function type() {
    currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typingSpeed = isDeleting ? 80 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
});
