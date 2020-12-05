
//DOM
var hamburgerMenu =document.querySelector('.hamburgerMenu');
var hamburgerMenuclose =document.querySelector('.hamburgerMenu2');
var hammenulist =  document.querySelector('.ham-menu-list');
var hammenuclosebtn = document.querySelector('.ham-menu-closebtn');
var ReservationInformationsend = document.querySelector('.ReservationInformation-send');
var ReservationInformationreservename= document.querySelector('.ReservationInformation-reserve-name');
var ReservationInformationreservetel = document.querySelector('.ReservationInformation-reserve-tel');
var ReservationInformationreservemail = document.querySelector('.ReservationInformation-reserve-mail');
var ReservationInformationreserveamount = document.querySelector('.ReservationInformation-reserve-amount');
var ReservationInformationreservevfood = document.querySelector('ReservationInformation-reserve-vfood');

/*                         首頁預約                                              */
function sendtoreser(e){
    console.log(e.target.value) 
   
    
    
    if(ReservationInformationreservename.value ==""){
        alert('請填寫姓名!');
    }else if(ReservationInformationreservetel.value ===""){
        alert('請填寫電話!');
    }else if(ReservationInformationreservemail.value ===""){
        alert('請填寫信箱!');
    }else if(ReservationInformationreserveamount.value ===""){
        alert('請填寫人數!');
    }else {
        alert('你以為真的送的出去歐，世界就是這麼殘酷!')
    }
  
    };


//事件
/*送出餐廳預約資訊*/ 
ReservationInformationsend.addEventListener('click',sendtoreser,false);