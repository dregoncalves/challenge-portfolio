document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector('[data-formulario]');
  const successMessage = document.getElementById('success-message');

  formulario.addEventListener('submit', (envio) => {
      envio.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const assunto = document.getElementById('assunto').value; 
      const mensagem = document.getElementById('mensagem').value;

      console.log(`Nome: ${nome}, Email: ${email}, Assunto: ${assunto}, Mensagem: ${mensagem}`);

      successMessage.style.display = 'block';

      formulario.reset();
  });
});
