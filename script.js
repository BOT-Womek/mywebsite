function openModal() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('modal').style.display = 'none';
}

function addPost() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const image = document.getElementById('image').value;

  const postContainer = document.getElementById('post-container');

  const postDiv = document.createElement('div');
  postDiv.classList.add('post');

  postDiv.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
  `;

  if (image) {
      postDiv.style.backgroundImage = `url('${image}')`;
      postDiv.style.backgroundSize = 'cover';
      postDiv.style.backgroundPosition = 'center';
  }

  postContainer.appendChild(postDiv);

  closeModal();
}

function navigate(page) {
  // Tutaj możesz dodać logikę nawigacji między stronami
  // Na przykład, zmiana zawartości main-content w zależności od wybranej strony
  const mainContent = document.getElementById('main-content');
  
  switch (page) {
      case 'home':
          mainContent.innerHTML = '<div class="content-container"><div class="left-section">Cześć</div><div class="right-section" id="post-container"></div></div>';
          break;
      case 'services':
          // Dodaj logikę dla strony "Usługi"
          break;
      case 'about':
          // Dodaj logikę dla strony "O mnie"
          break;
      default:
          break;
  }
}
