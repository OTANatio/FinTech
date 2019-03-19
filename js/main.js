
sidebar = document.getElementById('sidebarContents')
sidebarShadow = document.getElementById('shadow')

function showSidebar(){
    sidebar.classList.toggle('active')
    sidebarShadow.classList.toggle('active')
}
document.getElementById('menuBtn_1').addEventListener('click', function(){
    showSidebar()
})


document.getElementById('menuBtn').addEventListener('click', function(){
    showSidebar()
})

sidebarShadow.addEventListener('click', function(){
    showSidebar()
})

mainPage = document.getElementById('page-Main')
backBtnCardInfo = document.getElementById('backFromCardInfo')

backBtnCardInfo.addEventListener('click',function (){
    mainPage.classList.add('active')
    backBtnCardInfo.style.display = 'none'
})
