document.querySelector('.logo__img').addEventListener('click', () => {
    window.location.href='index.html'
})

const acceptPoliticTick = document.querySelector('.accept__policy_tick')





acceptPoliticTick.addEventListener('click', () => {
    document.querySelectorAll('.btn__block button').forEach((i) => {
        i.classList.toggle('non-active')
    });
})


document.querySelector('.show__modal_menu_leave_btn').addEventListener('click', (e) => {
    document.querySelector('.show__modal_menu').classList.remove('active')
})

// валидация формы
const validate = new window.JustValidate('#form');
let validation = new JustValidate('#form')


document.querySelectorAll('.btn__block button').forEach((i, index) => {
    if(index === 0) {
        i.addEventListener('click', (e) => {
            e.preventDefault()
            
        })
    } else {
        i.addEventListener('click', (e) => {
            if(!e.target.classList.contains('non-active')) {
                validation.addField('#name', [
                    {
                        rule: 'required',
                        errorMessage: 'Введите имя'
                    }
                ])                
                validation.addField('#number', [
                    {
                        rule: 'required',
                        errorMessage: 'Введите номер телефона',
                    },
                    {
                        rule: 'maxLength',
                        value: 9,
                        errorMessage: 'Нельзя вводить больше чем 9 цифр',  
                    },
                    {
                        rule: 'minLength',
                        errorMessage: 'Нельзя вводить меньще чем 9 цифр',
                        value: 9
                    }
                ])
                if (validation.isValid) {
                    document.querySelector('.show__modal_menu').classList.toggle('active')
                }
            } else {
                e.preventDefault()
            }
        })
       
    }
});
