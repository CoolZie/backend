$('#login_form').submit(function (evt) {
    evt.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    $.ajax({
        url: "http://localhost:3000/login",
        method:"post",
        data:{"email":email,"password":password}
      }).done(function (res) {
        console.log(res["isManager"]);
        if(res["isManager"] == 1){
            window.location.href ="welcomeManager.html"
        }else{
            window.location.href ="welcome.html"
        }


      });
});