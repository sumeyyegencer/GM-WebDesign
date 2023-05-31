// 1-Hesapla Butonuna click olunduğunda(tıklandığında) Hesapla fonksiyonu çalışsın böylece gerekli
// matematiksel işlemler yapılarak alan ve çevre bilgisi kullanıcıya verilsin.
   
//    Hesapla fonksiyonu:
//    {
//     1.1-Uzun kenar inputunun içindeki değeri yakala.(uk)
//     1.2-Kısa kenar inputunun içindeki değeri yakala.(kk)
 
//     1.3-  Alan= uk*kk   Çevre=2*(uk+kk)
 
//     1.4-alan bilgisi ve çevre bilgisi alert olarak kullanıcıya sunulsun.

//    }

var sonuc=document.getElementById("sonuc");
sonuc.style.display="none";



// function Dikdörtgen()
// {
//     var uk=Number(document.getElementById("uk").value);
//     var kk=Number(document.getElementById("kk").value);
//    console.log("dikdörtgen hesaplama")
//     sonuc.style.display="block";
//     sonuc.innerText="Alan:"+"  "+alan+"  "+"Çevre:" +" " +cevre;

// }
   
function myFunction()
{
    var selected=document.getElementById("mySelect").value;

    if(selected=="Dikdörtgen"){
        console.log("dik alan")
    }

   else  if(selected=="Üçgen"){
        console.log("ucgen alan")
    }

}

function Hesapla()
{
  console.log(myFunction())


}
   

