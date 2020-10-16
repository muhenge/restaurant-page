const itemMenu = ()=>{
    const containter = document.querySelector('.page');
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');
    const menuImage1 = document.createElement('img');
    const menuImage2 = document.createElement('img');
    const menuImage3 = document.createElement('img');
    const menuImage4 = document.createElement('img');
    const menuImage5 = document.createElement('img');
    menuImage1.src = '../dist/images/images.jpeg';
    menuImage2.src = '../dist/images/dessert.webp';
    menuImage3.src = '../dist/images/resto.webp';
    menuImage4.src = '../dist/images/plate.jpeg';
    menuImage5.src = '../dist/images/chips.jpg';

    menuImage1.classList.add('menu-img');
    menuImage2.classList.add('menu-img');
    menuImage3.classList.add('menu-img');
    menuImage4.classList.add('menu-img');
    menuImage5.classList.add('menu-img');

    item1.classList.add('menu-card');
    item2.classList.add('menu-card');
    item3.classList.add('menu-card');
    item4.classList.add('menu-card');
    item5.classList.add('menu-card');

    item1.appendChild(menuImage1);
    item2.appendChild(menuImage2);
    item3.appendChild(menuImage3);
    item4.appendChild(menuImage4);
    item5.appendChild(menuImage5);


    containter.appendChild(item1);
    containter.appendChild(item2);
    containter.appendChild(item3);
    containter.appendChild(item4);
    containter.appendChild(item5);



}

export default itemMenu 