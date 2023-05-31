var sonuc;
       
function Selected()
{       var s1=Number(document.getElementById("s1").value);
        var s2=document.getElementById("s2");
        var islem=document.getElementById("islem").value;
        var l1=document.getElementById("l1");
        var l2=document.getElementById("l2");
               

       if(islem == 'dikdörtgen' || islem=='kare')
       {
                l1.innerText="Kısa Kenar";
                l2.innerText="Uzun kenar";
                s2.style.display="block";
                sonuc = s1*s2.value;
              
       }
       
        else if(islem =='ucgen')
            {
                
                l1.innerText="Taban uzunluğu:";
                l2.innerText="Yükseklik:";
                s2.style.display="block";
                sonuc=s1*(s2.value/2)
            }
        
        else if(islem=="daire")
           {
            const pi=3.14;
            
               l1.innerText="Yarıçap:";
               l2.innerText="Pi Değeri:3,14"
               s2.style.display="none";
              
              sonuc=pi*(s1*s1);
            }
        }
        function Hesapla()
        {
            Selected();
            document.getElementById("sonuc").innerText = "Sonuc : " + sonuc;
        }

     
