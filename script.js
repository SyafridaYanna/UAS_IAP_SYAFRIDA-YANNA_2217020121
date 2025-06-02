// let mahasiswa = {
//     nama: 'Syafrida Yanna',
//     nim: '2217020121',
//     email: 'Syafridayanna963@gmail.com'

// }
// console.log(JSON.stringify(mahasiswa));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText); //jsonparse untuk menjadikan json ke objek
//         console.log(mahasiswa);

//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function(data){
    console.log(data);
});