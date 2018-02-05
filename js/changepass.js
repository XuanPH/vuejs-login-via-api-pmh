images = [];
var Language = $MasterLanguage[readCookie("Language") || "vi"];
var config = {
  apiHost : 'http://localhost:64523/'
}
var header = new Vue({
  el : "#wrapper",
  data : {
    tw_Lang : Language,
    UserName : "",
    newPass : "",
    oldPass : "",
    reNewPass: ""
  },
  methods : {
    onValidate : function(newPass,reNewPass,oldPass){
      if (newPass != reNewPass){
        alert('Nhập lại pass không đúng');
        return;
      }
      var objChangePass = {
        UserName : this.UserName,
        OldPass : oldPass,
        NewPass : newPass
      }
    }
  },mounted : function(){
    this.UserName =  checkLogined(true).data.UserName;
  }
});