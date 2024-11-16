
$('#dangnhap').click(function (e) {
    const email = document.getElementById('username');
    const password = document.getElementById('password');
    const ktpassword = /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
    const ktemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value == '') {
        alert('Vui lòng nhập email!!!');
        password.focus;
        return false;
    }
    if (!ktemail.test(email.value)) {
        alert('Vui lòng nhập @ và phần sau của email!!!' );
        email.focus;
        return false;
    }

    if (password.value == '') {
        alert('Vui lòng nhập mật khẩu!!!');
        password.focus;
        return false;
    }
    if(!ktpassword.test(password.value)) {
        alert('Phải có chữ hoa và chữ thường hoặc chữ thường và số');
        password.focus;
        return false;
    }


});