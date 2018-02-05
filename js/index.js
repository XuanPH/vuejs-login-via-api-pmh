images = [];
var Language = $MasterLanguage[readCookie("Language") || "vi"];
var config = {
  apiHost : 'http://app.twin.vn:8181/PMH2018API/'
}
var header = new Vue({
  el : "#wrapper",
  data : {
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
    },
    tw_Lang : Language
  },
  mounted : function(){
    this.getUrl();
  },
  methods : {
    setLanguage : function(langCode){
      eraseCookie("Language");
      createCookie('Language',langCode,3000);
      this.getUrl();
      onShowLang();
      this.tw_Lang = $MasterLanguage[langCode];
      // window.location.reload();
    },
    readLanguage : function(){
      return readCookie("Language") || "vi";
    },
    getUrl : function(){
      var lang = this.readLanguage();
      var ic = '';
      this.listLanguages.forEach(function(el){
        if (el.langCode == lang){
          ic = el.langFlagUrl;
        }
      });
      this.imageChoose.url = ic;
    },
    loginUser : function() {
      var user = document.getElementById("Resident").value;
      var password = document.getElementById("Password").value != '' ? md5(document.getElementById("Password").value ) : '';
      var lang = this.readLanguage();
      $.ajax({
        url: config.apiHost + 'api/authUser/loginUser',
        type: 'POST',
        data : {
          UserName : user,
          Password : password,
          Language : lang
        },
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        success: function(response) {
            if(response && response.result){
              eraseCookie("c_user");
              createCookie("c_user",JSON.stringify(response.data),300000);
              window.location.href = './project.html';
            }else {
              console.error($MasterLanguage[lang][response.message] || "Đăng nhập thất bại vui lòng liên hệ admin");
              console.log(response.message);
            }
        },
        error: function(err) {
            console.log(err);
        },
      });
    }
  }
});