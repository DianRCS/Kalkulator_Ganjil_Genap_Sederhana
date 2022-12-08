const input = parseInt( prompt ('Silahkan masukkan angka yang ingin dicari (ganjil / genap)'));
if( input % 2 == 0 ) {
    alert(input + ' adalah bilangan genap!');
    console.log(input + ' adalah bilangan genap.');
} else if( input % 2 == 1) {
    alert( input + ' adalah bilangan ganjil!');
    console.log( input + ' adalah bilangan ganjil!');
} else  {
    alert('Silahkan mengisi angka yang benar!');
    console.error('input yang dimasukkan tidak valid!');
    alert(input);
} 