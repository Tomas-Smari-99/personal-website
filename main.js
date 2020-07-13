const MenuButton = document.getElementById ("menu-button");
const menu = document.getElementById ("menu");
const mainSection = document.getElementById ("main-section");

const home = document.getElementById ("home");
const projects = document.getElementById ("projects");
const about = document.getElementById ("about")
const contact = document.getElementById ("contact")

let currentPage= home;

let isMenuShowing = false;

handleRefresh();

function handleRefresh(){
    const prevPageID = sessionStorage.getItem("PageID");

    if  (prevPageID) {
        [home, projects, about, contact].forEach(section =>{
            if (section.id === prevPageID)
                changePage(section);
        });
    }
}

function toggleMenu(){
   
    if(isMenuShowing)
        closeMenu();
    else
        openMenu();    
}

function closeMenu(){
    MenuButton.classList = "fa fa-bars fa-4x";
    
    menu.style.display = "none";
    
    mainSection.style.opacity = "1";

    isMenuShowing = false;

}

function openMenu(){
   MenuButton.classList = "fa fa-times fa-4x";

   menu.style.display = "flex";

   mainSection.style.opacity = "0.3";

    isMenuShowing = true;
}

function showHomePage(){
    changePage(home);
}

function showProjectsPage(){
    changePage(projects);
    
}

function showAboutPage(){
    changePage(about);
}

function showContactPage(){
    changePage(contact);
}

function changePage(newPage){
    if (currentPage !== newPage){
        currentPage.style.display ="none";
        newPage.style.display = "block";
        currentPage = newPage;

    }
    closeMenu();
    sessionStorage.setItem("pageID", currentPage.id);
}