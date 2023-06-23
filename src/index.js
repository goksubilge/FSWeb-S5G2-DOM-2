import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

/*const card = document.querySelector("h1");

card.addEventListener("dblclick", (event) => {
    event.h1.target.style.backgroundColor = 'blue';
});

*/
//dblclick
const card = document.querySelector("h1");
card.addEventListener('dblclick', (event) => {  
    event.target.style.backgroundColor = '#ECCBD9'; 
});

