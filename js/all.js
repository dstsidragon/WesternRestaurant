
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


 
/*                         漢堡選單區                                              */
//點擊漢堡選單顯示選單內容並更換漢堡選單
function clickhamburgerMenu(e){
    e.preventDefault();
    hammenulist.setAttribute('style','margin-left: 0px;display: block;'); 
    hamburgerMenu.setAttribute('style','display: none;');
    hamburgerMenuclose.setAttribute('style','display: block;');
  
};
//點擊關閉選單按鈕關閉漢堡選單
function clickclosehamburgerMenu(e){
    e.preventDefault();
    hammenulist.setAttribute('style','margin-left: -1200px;display: none;');
    hamburgerMenu.setAttribute('style','display: block;');
    hamburgerMenuclose.setAttribute('style','display: none;');
}
/*點擊漢堡選單2關掉漢堡選單並換回原本漢堡選單*/ 
function clickhamburgerMenu2(e){
    e.preventDefault();
    hammenulist.setAttribute('style','margin-left: -1200px;display: none;');
    hamburgerMenu.setAttribute('style','display: block;');
    hamburgerMenuclose.setAttribute('style','display: none;');

}

//事件
/*點擊漢堡選單顯示選單內容並更換漢堡選單*/ 
hamburgerMenu.addEventListener('click',clickhamburgerMenu,false);
/*點擊關閉選單按鈕關閉漢堡選單*/ 
hammenuclosebtn.addEventListener('click',clickclosehamburgerMenu,false);
/*點擊漢堡選單2關掉漢堡選單並換回原本漢堡選單*/ 
hamburgerMenuclose.addEventListener('click',clickhamburgerMenu2,false);
