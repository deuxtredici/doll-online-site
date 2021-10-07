function mockLogin(){
   document.getElementById('loginContainer').style.visibility = "hidden";
   document.getElementById('pageTitle').style.visibility = "hidden";
   document.getElementById('desktopBar').style.visibility = "visible";
}

document.getElementById('loginButton').addEventListener('click', function(){mockLogin()});