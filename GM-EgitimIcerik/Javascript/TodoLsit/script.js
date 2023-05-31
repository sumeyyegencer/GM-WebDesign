var görev= document.getElementById("görevAdi");
var Liste=document.getElementById("Liste");
var cardList=document.getElementById("cardList");
var gorevler=[]; //ls'ye görevlerin kaydedilmesi için gorevler isminde bir değer tanımlıyoruz.

cardList.addEventListener("click",görevSil); 


//Sayfa her yüklendğinde görevlerin de yüklenmesi için yazılmıştır.

document.addEventListener("DOMContentLoaded",Anasayfa);
function Anasayfa()
{
  LSKontrol();
  gorevler.forEach(function(grv){
    EkleUI(grv);
  })
  
}

function görevSil(e)
{
   if(e.target.className=="fa-solid fa-trash mx-3")
   {
    var removeTodo=e.target.parentElement.parentElement.parentElement;
    removeTodo.remove();

    //LS'DEN görev silme
    //SilLS(removeTodo)
    
   }

}

// function SilLS(silinecekDeger)
// {
//   LSKontrol();
//   gorevler.forEach(function(grv,index){
//     if(silinecekDeger===grv)
//     {
//       gorevler.splice(index,1);
//     }
//   })

//   localStorage.setItem("gorevler",JSON.stringify(gorevler));

// }


function görevEkle()
{

  var inputText=görev.value.trim()
    if(inputText=="" || inputText==null)
    {
        alert("Görev girmelisiniz.");
    }

    else{
    
      EkleUI(inputText);
      EkleLS(inputText);
    }

 
  }


function EkleUI(inputText)
{

Liste.innerHTML+=` <li class="list-group-item bg-transparent ">
<div class="d-flex justify-content-between ">

<div class="form-check">
<label class="form-check-label">${inputText}</label>

</div>
<div>
<i id="silBtn" class="fa-solid fa-trash mx-3"></i>

</div>
</li>`

  görev.value="";
}

 //Görevlerin LS'ye(local storage) eklenmesi için gerekli fonksiyondur.
 function EkleLS(inputText)
 {
    LSKontrol(inputText);
    gorevler.push(inputText); 
    localStorage.setItem("gorevler",JSON.stringify(gorevler));
}

//LS'nin içerisinde değer olup olmadığının kontrol edildiği fonksiyondur.
function LSKontrol(){
    if(localStorage.getItem("gorevler")===null)
    {
      gorevler=[];
  
    }
    else{ 
  
      gorevler=JSON.parse(localStorage.getItem("gorevler"));
    }
  }
  
  var tümünüSilBtn=document.getElementById("tümünüSilBtn");
  tümünüSilBtn.addEventListener("click",TumunuSil)
  function TumunuSil()
  {
    //UI'DAN tüm verileri silme
    var görevListesi=document.querySelectorAll(".list-group-item");
    görevListesi.forEach(function (grv) {
        grv.remove();
    })

    //LS'DEN tüm verileri silme
    gorevler=[];
    localStorage.setItem("gorevler",JSON.stringify(gorevler));
  }

  //Filtreleme

  var filtre=document.getElementById("filtre");
  filtre.addEventListener("keyup",Filtreleme)
  function Filtreleme(e)
  {
    var gorevListesi=document.querySelectorAll(".list-group-item");
    var filtrelenenDeger=e.target.value.toLowerCase();

if(gorevListesi.length>0)//Görev Listesinin içinde eleman olma durumu kontrol ediliyor
{
  //Eleman var ise:     
  gorevListesi.forEach(function(grv)
  {

      if(grv.textContent.toLowerCase().includes(filtrelenenDeger))

          {
            grv.setAttribute("style","display:block");
          }

      else{
            grv.setAttribute("style","display:none !important");
          }
  });

}

//Eleman yok ise:
else{
  alert("Arama yapmak için listede eleman olmalıdır.")
}



  }

