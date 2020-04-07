var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//***Guía Parte 1
//Paso 1: Seleccionar elementos del DOM
var $paleta = $("#paleta");
var $grillaPixeles = $("#grilla-pixeles");

//Paso2: Generá la paleta de colores en pantalla
function generarPaleta(){
  for (let i = 0, c = nombreColores.length; i < c; i++) {
    let $div = $("<div></div>");
    let colorPaleta = nombreColores[i];

    $div.addClass('color-paleta').css('background-color', colorPaleta);

    $paleta.append($div);
  }
}
//llamó a la función.
generarPaleta();

//Paso3: Crear la grilla de pixeles
function generarGrilla(){
  for (let i = 0; i < 1750; i++) {
    let $div = $("<div></div>");
    $grillaPixeles.append($div);
  }
}
//llamo a la función
generarGrilla();

//***Guía Parte 2
//Paso1: Indicador de color
//armo algunas variables globales por si luego las necesito.
var $indicadorColor = $("#indicador-de-color");
var $colorPaleta = $(".color-paleta");
var $colorSeleccionado;

$colorPaleta.click( function(){
  $colorSeleccionado = $($(this)).css("background-color");
  $indicadorColor.css("background-color", $colorSeleccionado);
}
);

//Paso2: Pintar un pixel de la grilla --> pintar "#grilla-pixeles div"
$("#grilla-pixeles div").mousedown( function(){
  $colorSeleccionado = $indicadorColor.css("background-color");
  $(this).css("background-color", $colorSeleccionado);
});

//Paso3: Terminar la funcionalidad de Rueda de Colores
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $indicadorColor.css("background-color", colorActual);
  })
);

//Paso4: Detectar si el Mouse está Apretado o no.
 //valor inicial
var botonApretado = false;
//Se modifica el valor
$('html').mousedown(function() {
    botonApretado = true;

}).mouseup(function() {
    botonApretado = false;
});


//Paso5: Implementar la acción pintar en movimiento
$("#grilla-pixeles div").mouseover( function(){
  if(botonApretado){
    $(this).css("background-color", $colorSeleccionado);
  }
});

//***Guía Parte3

//Paso1: Permitir borrar la pantalla apretando un botón
$("#borrar").click(function(){
  $("#grilla-pixeles").children("div").each(function(){
    $(this).animate({'background-color':"#ffffff"}, 2000);
  });
});

//Paso2: Cargar los superhéroes en forma de pixeles
$("#batman").click(function(){
  cargarSuperheroe(batman);
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
});

$("#flash").click(function(){
  cargarSuperheroe(flash);
});

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
});

//Paso3: Habilitar la descarga de cada obra de Parte
$("#guardar").click(function(){
  guardarPixelArt();
});
