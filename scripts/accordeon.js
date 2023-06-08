function accordeon() {
    const chItem = document.querySelectorAll('.characteristics__item');

    chItem.forEach(item => {
        const chButton = item.querySelectorAll('.characteristics__title');
        const chContent = item.querySelectorAll('.characteristics__description');

        chButton.forEach((elem, index) => { 
            elem.addEventListener('click', () => {


                if (!chContent[index].classList.contains('open')) {
                    chContent[index].style.height = chContent[index].scrollHeight + 'px';
                    chContent[index].classList.add('open')
                } else {
                    chContent[index].style.height = '';
                    chContent[index].classList.remove('open')
                }

                // chContent[index].classList.toggle('open')
                elem.classList.toggle('active')

            })
        })


















        // const chButton = item.querySelector('.characteristics__title');
        // const chContent = item.querySelector('.characteristics__description');

        // chButton.addEventListener('click', () => {

        //     if (chContent.classList.contains('open')) {
        //         chContent.style.height = '';
        //     } else {
        //         chContent.style.height = chContent.scrollHeight + 'px';
        //     }

        //     chButton.classList.toggle('active');
        //     chContent.classList.toggle('open');

        // })


    })
}

accordeon();