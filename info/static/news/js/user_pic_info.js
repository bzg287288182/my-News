function getCookie(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
}


$(function () {
    $(".pic_info").submit(function (e) {
         e.preventDefault()

        // 上传头像
        $(this).ajaxSubmit({
            url: "/user/user_pic_info",
            type: "POST",
            headers: {
                "X-CSRFToken": getCookie('csrf_token')
            },
            success: function (resp) {
                if (resp.errno == "0") {
                    $(".now_user_pic").attr("src", resp.data)
                    $(".user_center_pic>img", parent.document).attr("src", resp.data)
                    $(".user_login>a>img", parent.document).attr("src", resp.data)
                }else {
                    alert(resp.errmsg)
                }
            }
        })
    })
})