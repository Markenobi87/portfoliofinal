// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   
        
    


    // sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

}




const bottonSwitch = document.querySelector('#switch');

bottonSwitch.addEventListener('click', () => {
    document.body.classList.toggle('sun');
    bottonSwitch.classList.toggle('active');
})



// EMAIL FUNCIONAL CON EMAILJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_38mwo3h';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Email enviado';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});