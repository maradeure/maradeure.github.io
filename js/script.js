document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.background-video');
  video.playbackRate = 0.85;

  const snowflakesContainer = document.querySelector('.snowflakes');
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
    snowflake.style.opacity = Math.random();
    snowflakesContainer.appendChild(snowflake);
  }

  const descriptions = [
    'meowwwwwwwwwwwwww',
    'komaru',
    'h(cr)acker',
    'i love komaru',
    'i enjoy cats',
    'im cocoa'
  ];
  const descriptionElement = document.getElementById('random-description');
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';

  function type() {
    const fullText = descriptions[currentIndex];

    if (isDeleting) {
      currentText = fullText.substring(0, charIndex--);
    } else {
      currentText = fullText.substring(0, charIndex++);
    }

    descriptionElement.textContent = currentText;

    if (!isDeleting && charIndex === fullText.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % descriptions.length;
      setTimeout(type, 300);
    } else {
      const typingSpeed = isDeleting ? 40 : 80;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, 300);

  let viewCount = localStorage.getItem('pageViews') || 0;
  viewCount = parseInt(viewCount) + 1;
  localStorage.setItem('pageViews', viewCount);
  document.getElementById('view-counter').textContent = viewCount;
});