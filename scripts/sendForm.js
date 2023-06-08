const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery')
    const cardDetaTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const modalTitle = document.querySelector('.modal__title')
    const modalClode = document.querySelector('.modal__close')
    const modalForm = document.querySelector('form')
    const closeInput = document.querySelectorAll('.modal__input')

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDetaTitle.textContent
    })

    modalClode.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    const sendMessage = {}

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const labels = modal.querySelectorAll('.modal__label')

        labels.forEach(lable => {
            const span = lable.querySelector('span')
            const input = lable.querySelector('input')

            sendMessage[span.textContent] = input.value
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                console.log('Отправлено')
                modal.style.display = 'none'
                closeInput.forEach(item => {
                    item.value = ''
                })
            })
    })
}

sendForm()