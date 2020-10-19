//Menu creation
const addMenu=()=>{
    const content = document.getElementById('content');
    const nav = document.createElement('div');

    const anchorMenu = document.createElement('a');
    const anchorOrder = document.createElement('a');
    const anchorContact = document.createElement('a');

    nav.classList.add('navigation');
    const menuList = document.createElement('ul');
    const liMenu = document.createElement('li');
    const liOrder = document.createElement('li');
    const liContact = document.createElement('li');

    menuList.appendChild(liMenu);
    menuList.appendChild(liOrder);
    menuList.appendChild(liContact);

    anchorMenu.classList.add('menu');
    anchorMenu.innerText = "Our Menu";
    anchorMenu.setAttribute("href",'#');
    liMenu.appendChild(anchorMenu);

    anchorOrder.classList.add('menu');
    anchorOrder.innerText = "Order Online";
    anchorOrder.setAttribute("href",'#');
    liOrder.appendChild(anchorOrder);

    anchorContact.classList.add('menu');
    anchorContact.innerText = "Contacts";
    anchorContact.setAttribute("href",'#');
    liContact.appendChild(anchorContact);

    menuList.classList.add('nav');
    content.appendChild(nav);
    nav.appendChild(menuList);
}

export default addMenu;
