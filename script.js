// Alternar exibição do saldo
const saldoValor = document.getElementById('saldo-valor');
const btnSaldo = document.getElementById('btn-saldo');
const imgEye = document.getElementById('img-eye');
let saldoVisivel = true;

function atualizarIconeOlho() {
  imgEye.src = saldoVisivel
    ? 'https://img.icons8.com/ios-filled/18/ffffff/visible--v1.png'
    : 'https://img.icons8.com/ios-filled/18/ffffff/invisible.png';
  imgEye.alt = saldoVisivel ? "Ocultar saldo" : "Exibir saldo";
}

btnSaldo.addEventListener('click', () => {
  saldoVisivel = !saldoVisivel;
  if (saldoVisivel) {
    saldoValor.textContent = 'R$ 7.239,25';
    saldoValor.classList.remove('oculto');
  } else {
    saldoValor.textContent = '••••••••';
    saldoValor.classList.add('oculto');
  }
  atualizarIconeOlho();
});

// Acessar área do Pix (limpa conteúdo interno do app)
document.getElementById('fav-pix').addEventListener('click', () => {
  // Limpa header (exceto header-top)
  const header = document.querySelector('.app-header');
  Array.from(header.children).forEach((child, idx) => {
    if (idx > 0) child.innerHTML = '';
  });

  // Limpa main
  const main = document.querySelector('main');
  if (main) main.innerHTML = '';

  // Limpa footer
  const footer = document.querySelector('.app-footer');
  if (footer) footer.innerHTML = '';
});
document.getElementById('fav-pix').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    document.getElementById('fav-pix').click();
  }
});

// Foco acessível no Pix
document.getElementById('fav-pix').setAttribute('tabindex', '0');

// IDs dos novos botões favoritos
const novosFavoritos = [
  'fav-transfer',
  'fav-pagamentos',
  'fav-cartoes',
  'fav-emprestimos',
  'fav-investimentos',
  'fav-recargas',
  'fav-personalizar'
];

novosFavoritos.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', () => {
      alert("Em breve terá novas funções!");
    });
    el.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        el.click();
      }
    });
    el.setAttribute('tabindex', '0');
  }
});

// IDs dos itens do rodapé que devem mostrar o alerta
const footerIds = [
  // O primeiro é "Home", que não deve mostrar alerta
  // Os próximos são BIA, SHOP, PERFIL, MENU (na ordem do HTML)
  // Como não têm IDs, vamos selecionar por classe e índice
];

const footerItems = document.querySelectorAll('.footer-item');
footerItems.forEach((item, idx) => {
  // Pular o primeiro (Home)
  if (idx > 0) {
    item.addEventListener('click', () => {
      alert("Em breve terá novas funções!");
    });
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        item.click();
      }
    });
    item.setAttribute('tabindex', '0');
  }
});

// Mensagem "Em breve terá novas funções" nos botões do menu superior
const menuLabels = ["Extrato", "Open Finance", "Meus bancos", "Trazer dados"];
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  const label = item.querySelector('span')?.textContent?.trim();
  if (menuLabels.includes(label)) {
    item.addEventListener('click', () => {
      alert("Em breve terá novas funções!");
    });
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        item.click();
      }
    });
    item.setAttribute('tabindex', '0');
  }
});

// Mensagem "Em breve terá novas funções" no sino de notificações
const bell = document.querySelector('.icon-bell');
if (bell) {
  bell.addEventListener('click', () => {
    alert("Em breve terá novas funções!");
  });
  bell.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      bell.click();
    }
  });
  bell.setAttribute('tabindex', '0');
}

// Atualiza ícone inicial
atualizarIconeOlho();

// Botão Sair fecha o site ou redireciona
document.querySelector('.logout').addEventListener('click', () => {
  // Tenta fechar a aba
  window.close();
  // Se não fechar, redireciona para uma página inicial
  setTimeout(() => {
    window.location.href = "https://www.bradesco.com.br";
  }, 200);
});