
var eta = prompt("inserisci la tua età");

document.getElementById('eta').innerHTML = eta;

var km = prompt("inserisci i chilometri percorsi");

document.getElementById('km').innerHTML = km;

var prezzo_unit = 0.21;

var costo_lordo = km * prezzo_unit;
document.getElementById('costo_lordo').innerHTML = costo_lordo;

if ((eta > 18) && (eta < 65)) {
  var costo_lordo = km * prezzo_unit;
  document.writeln('costo totale = ' + costo_lordo + '€').innerHTML = costo_lordo;
}
else {
  if (eta < 18) {
  var costo_lordo = km * prezzo_unit;
  var costo_netto = ( costo_lordo - (costo_lordo * 20) / 100);
  document.writeln('costo totale scontato del 20% per minorenni = ' + costo_netto + '€').innerHTML= costo_netto;
  }
  else {
    var costo_lordo = km * prezzo_unit;
    var costo_netto = ( costo_lordo - (costo_lordo * 40) / 100);
    document.writeln('costo totale scontato del 40% per over 65  = ' + costo_netto + '€').innerHTML= costo_netto;
  }
}
