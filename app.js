let user = "german";
var pass = 123;
let saldo = 100000;

function login() {
    let userid = prompt("Ingrese su nombre de usuario");
    var passid = prompt("Ingrese su contraseña");
    passid = parseInt(passid);
    if (userid == user && pass == passid) {
        window.location.replace("./menu.html");
    } else {
        alert("Usuario o contraseña incorrecta");
    }
}
    
   function verSaldo() {
    alert("Su saldo es de $" + saldo);
    window.location.replace("./menu.html");
   }

   function retirarDinero() {
    let retiro = prompt("¿Cuánto dinero desea retirar?");
    retiro = parseInt(retiro);
    saldo = saldo - retiro;
    alert("Su saldo ahora es de " + saldo);
    window.location.replace("./menu.html");
   }

   function depositarDinero() {
    let deposito = prompt("¿Cuánto dinero desea depositar?");
    deposito = parseInt(deposito);
    saldo = saldo + deposito;
    alert("Su saldo ahora es de " + saldo);
    window.location.replace("./menu.html");
   }

   function cambiarPassword() {
    pass = prompt("Escriba su nueva clave");
    alert("Su clave fue modificada con exito");
    window.location.replace("./menu.html");
   }

   function cerrarSesion() {
    window.location.replace("./index.html");
   }
