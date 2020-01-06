const dark = document.getElementById('dark-toggle'),
      ball = document.querySelector('.ball');

dark.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  ball.classList.toggle('ball_dark');
});