const itemMenu = ()=>{
    const containter = document.querySelector('.page');
    const item = document.createElement('div');
    const menuImage = document.createElement('img');
    menuImage.src = '../dist/images/images.jpeg';
    menuImage.classList.add('menu-img')
    item.classList.add('menu-card');
    item.appendChild(menuImage);
    containter.appendChild(item);

}

export default itemMenu 