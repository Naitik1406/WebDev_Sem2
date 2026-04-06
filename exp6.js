function changeText() {
  let input = document.getElementById('paragraph').value.trim();
  let h2 = document.getElementById('message');
  h2.textContent = input || 'Please type something first.';
}

function changeColor() {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
}

function printPage() {
  window.print();
}

function changeFontSize() {
  let h2 = document.getElementById('message');
  let currentSize = parseInt(window.getComputedStyle(h2).fontSize);
  let newSize = currentSize + 2;
  if (newSize > 32) {
    newSize = 16;
  }
  h2.style.fontSize = newSize + 'px';
}

function toggleParagraph() {
  let para = document.getElementById('displayParagraph');
  if (para.style.display === 'none') {
    para.style.display = 'block';
  } else {
    para.style.display = 'none';
  }
}

function resetPage() {
  document.getElementById('message').textContent = 'Welcome to JavaScript Lab';
  document.getElementById('message').style.fontSize = '16px';
  document.getElementById('paragraph').value = '';
  document.getElementById('displayParagraph').style.display = 'none';
  document.body.style.backgroundColor = '';
}