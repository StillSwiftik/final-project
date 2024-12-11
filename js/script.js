document.querySelector('.logo__img').addEventListener('click', () => {
    window.location.href='index.html'
})


const menuBtn = document.querySelector('.burger__menu_btn');
const menu = document.querySelector('.burger__menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');  
})
const btn = document.querySelectorAll('.btn')
const modal = document.querySelector('.show__modal_menu');
btn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.toggle('active');
    
    })

});
