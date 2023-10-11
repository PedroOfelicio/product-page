var thumbnails = document.querySelectorAll('.thumbnail');

// Função para trocar a imagem principal
function swapImage(src) {
  var mainImage = document.querySelector('.image-jpg');
  mainImage.src = src;
}

// Adicionar um evento de clique a cada miniatura
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', function() {
    swapImage(this.src);
  });
});

var count = 0;

function increment() {
  count += 1;
  document.querySelector('.unid').innerText = count;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    document.querySelector('.unid').innerText = count;
  }
}