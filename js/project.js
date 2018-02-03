
var projectPage = new Vue({
    el: "#wrapper",
    data: {
        Name : 'Nguyen Van B',
        tw_lang : $currentMasterLanguage,
        listLanguages: [
            {
              langCode : "vi",
              langFlagUrl : "./flags/vi.png"
            },{
              langCode : "en",
              langFlagUrl : "./flags/uk.png"
            },{
              langCode : "kr",
              langFlagUrl : "./flags/sk.png"
            },{
              langCode : "jp",
              langFlagUrl : "./flags/jp.png"
            },{
              langCode : "cn",
              langFlagUrl : "./flags/zh.png"
            }
          ],
          imageChoose : {
            url : "./flags/vi.png"
          }
    },
    methods : {
        currentUser : function(name){
            return  {
                Name : $currentMasterLanguage['lbl_hello']+ ', ' + name
             };
        },
        signOut : function() {
            eraseCookie("c_user");
            window.location.href = './index.html';
        },
        checkLoged : function(){
           var c_user = JSON.parse(readCookie("c_user") || '{"UserID":0,"UserName":""}')[0];
           if (c_user && c_user.UserID > 0 && c_user.UserName != '')
           {
                this.Name = c_user.UserName;
           }else {
               alert('vui long dang nhap');
               window.location.href = './index.html';
           }
        },
        changePass : function(){
            window.location.href = "./changepass.html";
        }
    },
    mounted : function(){ 
        this.checkLoged();
    }
});
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         header.$data.Name = "logined";
//         header.$data.Phone = user.phoneNumber;
//     } else {
//         window.location.href = 'index.html';
//     }
//   });