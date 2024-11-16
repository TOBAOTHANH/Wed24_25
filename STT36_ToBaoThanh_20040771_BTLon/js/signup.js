$('#dangky').click(function (e){
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const ktName = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    const ktemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const ktpassword = /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;

//Kiểm tra tên
    if(firstname.value == ""){
        alert('Thông tin bắt buộc nhập!!!');
        firstname.focus;
        return false;
    }
    if(!ktName.test(firstname.value)){
        alert('Mỗi ký tự đầu viết hoa không sử dụng số!');
        firstname.focus;
        return false;
    }
    if(lastname.value == ""){
        alert('Thông tin bắt buộc nhập!!!');
        lastname.focus;
        return false;
    }
    if(!ktName.test(lastname.value)){
        alert('Mỗi ký tự đầu viết hoa không sử dụng số!');
        lastname.focus;
        return false;
    }

// kiểm tra email
    
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

//Kiểm tra mật khẩu
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