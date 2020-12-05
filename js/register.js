
//DOM
var password= document.querySelector('.Registerpasswords');
var password2= document.querySelector('.Registerpasswords2');
var send = document.querySelector('.RegisterAccountbtn');
var account =document.querySelector('.Registeraccount');
//EVENT
//確認密碼是否正確
send.addEventListener('click',checkpasswords,false);

//送出註冊訊息給後端確認
send.addEventListener('click',sendSignup,false);

//註冊帳號
//送出註冊訊息給後端確認
function sendSignup(){ 
    let emailS = account.value;
    let passwordS = password.value;
    let str = {};
    str.email= emailS;
    str.password = passwordS;
    let  xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
/*       設定傳送格式 一般表單格式         */ 
    xhr.setRequestHeader('Content-type','application/json');
/*          將OBJECT轉成字串            */
    let data =JSON.stringify(str);
/*          傳送資料                    */ 
    xhr.send(data);
    console.log(xhr);
    //判斷是否註冊成功
    xhr.onload=function(){
        
        let reback = JSON.parse(xhr.responseText);
        let messageS = reback.message;
        if(messageS =='帳號註冊成功'){
            alert('帳號註冊成功!!!')
        }else if(messageS =='此帳號已被使用'){
            alert('此帳號已被使用!!')
        }else{
            alert('格式不正確!!')

        }
    }

};
//確認密碼是否正確
function checkpasswords(){
    if(password.value!==password2.value){
        alert('密碼不一致!')
    }
}