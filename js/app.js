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

// Animacion para img index 

const img1 = document.querySelectorAll(".img-1");
const img2 = document.querySelectorAll(".img-2");
const img3 = document.querySelectorAll(".img-3");
const img4 = document.querySelectorAll(".img-4");

// Add Event 

img2.forEach(function(element){
    element.addEventListener("mouseover", () => {
        img1.forEach( function(img){
            img.style.opacity = "0%";
            img.style.transition = "all 1s";
        });

        img2.forEach( function(img){
            img.style.opacity = "100%";
            img.style.transition = "all 1s";
        });
    });

    element.addEventListener("mouseout", () =>{

        img1.forEach( function(img){
            img.style.opacity = "100%";
            img.style.transition = "all 1s";
        });

        img2.forEach(function (img){
            img.style.opacity = "0%";
            img.style.transition = "all 1s";
        });
    });
});

img4.forEach(function(element){
    element.addEventListener("mouseover", () => {
        img3.forEach( function(img){
            img.style.opacity = "0%";
            img.style.transition = "all 1s";
        });

        img4.forEach( function(img){
            img.style.opacity = "100%";
            img.style.transition = "all 1s";
        });
    });

    element.addEventListener("mouseout", () =>{

        img3.forEach( function(img){
            img.style.opacity = "100%";
            img.style.transition = "all 1s";
        });

        img4.forEach(function (img){
            img.style.opacity = "0%";
            img.style.transition = "all 1s";
        });
    });
});

// Flechita 
const flecha = document.querySelector(".flecha");

flecha.addEventListener("click", () =>{
    window.scrollTo(0, 0);
})

window.onscroll = function() {
    if (window.scrollY > 575) {
      flecha.style.opacity = "100%";
      flecha.style.transition = "all .5s";
    }else{
        flecha.style.opacity = "0%";
      flecha.style.transition = "all .5s";
    }
};

// //////////////////////////////////////////

function producto (id,nombre,tipo,img, info){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.img = img;
    this.info = info;
};
  
const productos = [
    new producto("1","HUMMUS CLÁSICO","hummus","../img/sabores/Productos-02 (AMARILLO).webp", "../pages/clasico.html",),
    new producto("2","HUMMUS CON AJÍ PICANTE","hummus","../img/sabores/Productos-04.webp", "../pages/picante.html",),
    new producto("3","HUMMUS CON AJO NEGRO","hummus","../img/sabores/Productos-01.webp", "../pages/ajonegro.html#inicio"),
    new producto("4","HUMMUS CON PISTACHO","hummus","../img/sabores/Productos-03.webp", "../pages/pistacho.html#inicio"),
    new producto("5","TAHINI","tahini","../img/sabores/Productos-05.webp","../pages/tahini.html#inicio"),
    new producto("6","GARBANZO SIN PIEL","garbanzo","../img/sabores/Productos-06.webp", "../pages/garbanzo.html#inicio")
];

const contenedorProductos = document.querySelector(".product-container");
const filtroHummus = document.querySelector("#hummus");
const filtroTahini = document.querySelector("#tahini");
const filtroGarbanzo = document.querySelector("#garbanzo");


function cargarProductos(productosAll) {

    //limpiar contenedor para que se eliminen los productos cuando se usan filtros 
    contenedorProductos.innerHTML = '';
  
    productosAll.forEach(producto => {
  
      const divProductContainer = document.createElement("div");
      divProductContainer.innerHTML = `
      <div>
        <a href="${producto.info}">
          <img class="zoom" src="${producto.img}">
          <h2>${producto.nombre}</h2>
        </a>
      </div>
      `;
  
      contenedorProductos.append(divProductContainer);
    })
};
  
cargarProductos(productos);

// filtros para los sabores 

filtroHummus.addEventListener("click", () =>{

    const filtradoHummus = productos.filter(producto => producto.tipo === "hummus");
    
    if(filtroHummus.classList.contains("mainColor")) {
        cargarProductos(productos);
        filtroHummus.classList.remove("mainColor");
    } else {
        cargarProductos(filtradoHummus);
        filtroHummus.classList.add("mainColor");
    };
    filtroGarbanzo.classList.remove("mainColor");
    filtroTahini.classList.remove("mainColor");
});
  
filtroGarbanzo.addEventListener("click", () =>{
  
    const filtradoGarbanzo = productos.filter(producto => producto.tipo === "garbanzo");
    
    if(filtroGarbanzo.classList.contains("mainColor")){
        cargarProductos(productos);
        filtroGarbanzo.classList.remove("mainColor");
    }else{
        cargarProductos(filtradoGarbanzo);
        filtroGarbanzo.classList.add("mainColor");
    };
    filtroHummus.classList.remove("mainColor");
    filtroTahini.classList.remove("mainColor");
});
  
filtroTahini.addEventListener("click", () =>{
  
    const filtradoTahini = productos.filter(producto => producto.tipo === "tahini");
  
    if(filtroTahini.classList.contains("mainColor")){
        cargarProductos(productos);
        filtroTahini.classList.remove("mainColor");
    }else{
        cargarProductos(filtradoTahini);
        filtroTahini.classList.add("mainColor");
    }
    filtroHummus.classList.remove("mainColor");
    filtroGarbanzo.classList.remove("mainColor");
});