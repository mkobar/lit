
var home={display:function(tag,form,redirect){try{if(COOKIES_BANNER==true){home.displayCookiesBanner();}
tag=tag||'unlogged_home_display';tracking.track(tag,{type:form});if(home.is_mobile===true){return false;}
$('#language_select').on('change',function(){var lang=$(this).val();tracking.track(tag+'_click',{type:'footer_language'},function(){var redir=www.getCurrentPath();if(/(\/[a-z]{2}\/)/.test(www.getCurrentPath())){redir=redir.substr(3,redir.length);}
document.location.href='/lang.php?lang='+lang+'&redirect='+redir;});});$('#login_button').on('click',function(){if(form==='soon'){modal.open('/lightbox/login.php');return false;}
www.goToLogin();});$('#signup_button').on('click',function(){www.goToRegister();});switch(form){case'signup':register.init($('#register_form'),redirect,{tag:'unlogged_home_click',properties:{type:'deezer'}});break;case'login':login.init($('#login_form'),redirect);break;case'signout':signout.init($('#signout_form'));break;case'soon':soon.init($('#soon_form'));break;case'landing':landing.init();break;}
return true;}catch(e){error.log(e);}},displayCookiesBanner:function(){try{if(storage.get('COOKIES_BANNER_HIDE')===true){return false;}
$('#cookies_banner').removeClass('hidden');$('#panel_mobile_container').addClass('container-cookies');$(document).on('click','#cookies_banner_close, button, a',function(e){storage.set('COOKIES_BANNER_HIDE',true);});$('#cookies_banner_close').on('click',function(e){$('#cookies_banner').addClass('hidden');});return true;}catch(e){error.log(e);}}};