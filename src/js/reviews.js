$(function () {
    $("input[name='user_phone']").mask("+3 8(099) 99 99 999");


    $("input[name='user_phone']").on("blur", function () {
        var last = $(this).val().substr($(this).val().indexOf("-") + 1);

        if (last.length == 3) {
            var move = $(this).val().substr($(this).val().indexOf("-") - 1, 1);
            var lastfour = move + last;

            var first = $(this).val().substr(0, 9);

            $(this).val(first + '-' + lastfour);
        }
    });


    $("#reviews_form").validate({
        rules: {
            user_name: {
                required: true,
                minlength: 3,
                maxlength: 40
            },
            user_email: {
                required: true,
                email: true
            },
            user_phone: {
                required: true,
                minlength: 19
            },
            user_review: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            user_name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя слишком короткое"
            },
            user_email: {
                required: "Это поле обязательно для заполнения",
                email: "Введите коректный E-mail"
            },
            user_phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Введите коректный номер телефона"
            },
            user_review:{
                required: "Это поле обязательно для заполнения",
                minlength: "слишком короткий отзыв"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});