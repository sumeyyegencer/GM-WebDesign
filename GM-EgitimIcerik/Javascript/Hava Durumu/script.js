const url="https://api.openweathermap.org/data/2.5/";
const key="cc522a0f6db67bf6aba2ea22ef035732";


const tusKontrolu= (e)=>{
    if(e.keyCode=="13") //Enter
    {
        HavaDurumuVerisi(arananSehir.value);
    }
}

const HavaDurumuVerisi=(sehir)=>{
 

    fetch(`${url}weather?q=${sehir}&appid=${key}&units=metric&lang=tr`)
    .then(veri=>{
       return veri.json()})
   .then(Sonuc)
  
}

const Sonuc=(veri)=>{

   var sehir=document.querySelector(".sehir");
    sehir.innerText=`${veri.name}`;


   var sicaklik= document.querySelector(".sicaklik");
   sicaklik.innerText=`${veri.main.temp}°C`;
   

   var aciklama=document.querySelector(".aciklama");
 aciklama.innerText=veri.weather[0].description;

 var minmax=document.querySelector(".minmax")
 minmax.innerText=`${veri.main.temp_min}/${veri.main.temp_max}`
 

}



const arananSehir=document.getElementById("arananSehir");
arananSehir.addEventListener("keypress",tusKontrolu);