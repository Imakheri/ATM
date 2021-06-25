class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.image = imagenes[this.valor];
    // this.image.src = imagenes[this.valor];
  }
}

var imagenes = [];
imagenes [50] = "50.png";
imagenes [100] = "100.png";
imagenes [200] = "200.png";
imagenes [500] = "500.png";
imagenes [1000] = "1000.png";

var caja = [];

caja.push(new Billete (1000, 7));
caja.push(new Billete (500, 12));
caja.push(new Billete (200, 15));
caja.push(new Billete (100, 20));
caja.push(new Billete (50, 25));


var entregado = [];

var dinero;
var division;
var papeles;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
  var texto = document.getElementById("dinero");
  dinero = parseInt(texto.value);
  var Gile = document.getElementById("Gile");
  Gile.innerHTML += "<hr>";
  var total = document.getElementById("suma");
  suma.innerHTML += "<hr>";
  var loQueQueda = 0;
  for(var billete of caja)
  {
      if(dinero > 0)
    {
      division = Math.floor(dinero / billete.valor);

      if(division > billete.cantidad)
      {
        papeles = billete.cantidad;
      }

      else
      {
        papeles = division;
        billete.cantidad -= papeles
      }

      entregado.push( new Billete(billete.valor, papeles) );
      dinero = dinero - (billete.valor * papeles);
    }
    Gile.innerHTML += "Valor: " + billete.valor + " Cantidad: " + billete.cantidad + "<br />";
    loQueQueda += billete.valor * billete.cantidad;
    suma.innerHTML = "Total: " + loQueQueda + "<br/>";
  }
  if(dinero > 0)
  {
        resultado.innerHTML = 'Soy un cajero malo, he sido malo y no puedo darte esa cantidad.';
  }
  else {
  {
    for (e of entregado)
    {
      if(e.cantidad > 0)
      {


        resultado.innerHTML += '<span style="font-size: 35px;">' + e.cantidad + "    " + "</span>" + "<img src='img/"+e.image+"'><br />";
      }
    }
  }
  }
  console.log(entregado);
}
