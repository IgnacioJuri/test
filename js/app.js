document.getElementById('nav-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const x = document.getElementById('x');
    const hiddenNav = document.getElementById('hidden-nav');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        x.style.display = 'none';
        hiddenNav.style.display = 'none';
    } else {
        menu.style.display = 'none';
        x.style.display = 'block';
        hiddenNav.style.display = 'block';
    };
});

document.getElementById("main").addEventListener("click", function() {
    const menu = document.getElementById('menu');
    const x = document.getElementById('x');
    const hiddenNav = document.getElementById('hidden-nav');

    if(hiddenNav.style.display === "block"){
        menu.style.display = "block";
        x.style.display = "none";
        hiddenNav.style.display = "none";
    };
    

});