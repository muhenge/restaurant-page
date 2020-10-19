const contentPage = ()=>{
    const content = document.getElementById('content');
    const sidePage = document.createElement('div');
    sidePage.classList.add('page');
    content.appendChild(sidePage);
}
export default contentPage;