function tabsFunction() {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');
    const tabsName = document.querySelector('.titileName');

    const tabsOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: '60.000',
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver',
            memory: '256',
            price: '65.000',
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: '70.000',
            image: 'img/iPhone-sierra_blue.webp'
        }
    ]

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
        tabsPrice.textContent = `${tabsOptions[index].price} ₱`;
        tabsImage.setAttribute('src', tabsOptions[index].image);
        tabsName.textContent = tabsOptions[index].name;
    }

    const changeActiveTabs = (indexClikedTab) => {
        tabs.forEach((tab, index) => {

            tab.classList.remove('active');

            if (indexClikedTab == index) {
                tab.classList.add('active');
            }

        })

        changeContent(indexClikedTab);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index);
        })
    })

    changeContent(0)
}

tabsFunction()