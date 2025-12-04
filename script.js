// ===============================
<script>
document.addEventListener("mousemove", (e) => {
  const brilho = document.createElement("div");
  brilho.className = "rastro";
  brilho.style.left = e.pageX + "px";
  brilho.style.top = e.pageY + "px";
  document.body.appendChild(brilho);

  setTimeout(() => {
    brilho.remove();
  }, 300);
});
</script>

// ===============================

// ===== PEGAR O DIV DO FUNDO =====
let fundo = document.getElementById('fundoBolas');

// ===== SE NÃO EXISTIR, CRIA =====
if(!fundo){
  fundo = document.createElement('div');
  fundo.id = 'fundoBolas';
  fundo.classList.add('fundo-bolas');
  document.body.prepend(fundo);
}

// ===== CRIAR BOLAS DE VÔLEI =====
const totalBolas = 30; // número de bolas
for(let i = 0; i < totalBolas; i++){
  const bola = document.createElement('div');
  bola.classList.add('bola');
  bola.textContent = '🏐';

  // tamanho aleatório
  const size = Math.random() * 40 + 20;
  bola.style.fontSize = size + 'px';

  // posição aleatória
  bola.style.left = Math.random() * 100 + 'vw';
  bola.style.top = Math.random() * 100 + 'vh';

  // opacidade e duração da animação aleatória
  bola.style.opacity = Math.random() * 0.7 + 0.3;
  bola.style.animationDuration = Math.random() * 10 + 10 + 's';

  fundo.appendChild(bola);
}

// ===== MOVIMENTO DO FUNDO COM O MOUSE =====
document.body.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.body.style.setProperty('--x', `${x}px`);
  document.body.style.setProperty('--y', `${y}px`);
  document.body.classList.add('mousemove-ativo');
});




// ===============================
// ===== LOADER COM ONDA NEON =====
// ===============================

// Criar o loader
const loader = document.createElement('div');
loader.id = 'loader';
loader.innerHTML = `
  <div class="onda"></div>
  <div class="onda"></div>
  <div class="onda"></div>
  <div class="onda"></div>
  <div class="bola-loader">🏐</div>
`;
document.body.appendChild(loader);

// Remover o loader quando a página carregar
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('sumir');
    setTimeout(() => loader.remove(), 800);
  }, 800);
});

