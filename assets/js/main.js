const mobilemenu = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

mobilemenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


// theme selector click for light/dark/respect os mode using themeSelector in localStorage
document.querySelector('button.theme-selector').addEventListener('click', () => {

    // if there is no theme set, first check to see if the OS has set dark mode
    if (localStorage.getItem('themeSelector') === null) {
        // if dark mode is set via "dark" class in html element
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark'); // remove dark from html element
            window.localStorage.themeSelector = 'light'; // set var to light
        // if dark mode isn't set, set it
        } else {
            document.documentElement.classList.add('dark'); // add dark to html element
            window.localStorage.themeSelector = 'dark'; // set var to dark
        }
    // if theme selector is already set to light or dark, toggle it to dark or light
    } else if (localStorage.getItem('themeSelector') == 'dark') {
        document.documentElement.classList.remove('dark'); // remove dark from html element
        window.localStorage.themeSelector = 'light'; // set var to light
    } else if (localStorage.getItem('themeSelector') == 'light') {
        document.documentElement.classList.add('dark'); // remove dark from html element
        window.localStorage.themeSelector = 'dark'; // set var to light
    }

});
