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
//mouseover
document.querySelector("nav").addEventListener("mouseover",function(e){
    e.target.style.backgroundColor = "#E1DD8F";
    e.target.style.fontWeight = "900";
    setTimeout(() => {
        e.target.style.color = "#8E3B46"
        e.target.style.fontWeight = "900";
    }, 900);
    });

//dblclick
const card = document.querySelector("h2");
card.addEventListener("dblclick", (event) => {  
    event.h2.target.style.backgroundColor = "#ECCBD9"; 
});