// VKİ= KİLO/(BOY*BOY)

// VKİ 18< ZAYIF
// VKİ 18-25 NORMAL
// VKİ 25-30 KİLOLU
// VKİ 30-40 OBEZ
// VKİ 40> MORBİD

var sonuc=document.getElementById("sonuc");
sonuc.style.display="none";

function Hesapla(){
    var boy=((document.getElementById("boy").value)/100); //cm olan boy bilgisini m cinsine cevirdim.
    var kilo=document.getElementById("kilo").value;
        

   var vki= (kilo/(boy*boy))


   if(vki<18)
   {

    sonuc.style.display="block";
    sonuc.innerText= "Zayıf"+" "+ vki.toFixed(1);
     
   }
   else if(vki>=18 && vki<25)
   {
    alert("Normal"+" "+ vki.toFixed(1))
   }

   else if(vki>=25 && vki<30)
   {
    alert("Kilolu"+" "+ vki.toFixed(1))

   }
   else if(vki>=30 && vki<40)
   {
    alert("Obez"+" "+ vki.toFixed(1))
   }

   else
   {
    alert("MORBİD"+" "+ vki.toFixed(1))

   }


}
