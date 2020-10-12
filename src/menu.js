//Menu creation
const addMenu=()=>{
    const content = document.getElementById('content');
    const nav = document.createElement('div');
    const anchor = document.createElement('a');
    nav.classList.add('navigation');
    const menuList = document.createElement('ul');
    const li = document.createElement('li');
    menuList.appendChild(li);
    anchor.classList.add('menu');
    anchor.innerText = "Menu";
    anchor.setAttribute("href",'#');
    li.appendChild(anchor);
    menuList.classList.add('nav');
    content.appendChild(nav);
    nav.appendChild(menuList);
}

export default addMenu;
