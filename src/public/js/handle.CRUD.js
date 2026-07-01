$(document).ready(function () {
    // update user
    $(".edit").click(function () {
        var id = $(this).attr("data-id");

        $.ajax({
            type: "GET",
            url: `/update-user/${id}`,
            success: function (response) {
                console.log(response);
                $("#id").val(response.id);
                $("#email").val(response.email);
                $("#name").val(response.name);
                $("#city").val(response.city);
            },
            error: function (xhr, err) {
                alert('Error');
            }
        });
    });

    $("#luu-update").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "PUT",
            url: '/update-user',
            data: {
                id: $("#id").val(),
                email: $("#email").val(),
                name: $("#name").val(),
                city: $("#city").val(),
            },
            success: function (response) {
                window.location.href = '/';
            },
            error: function (err) {
                alert(err);
            }
        });
    });

    // delete user
    $(".delete").click(function (e) {
        e.preventDefault();
        const id = $(this).data("id");

        if (!confirm(`Bạn chắc chắn xóa user có id = ${id}`)) {
            return;
        }

        $.ajax({
            type: "DELETE",
            url: `/delete-user/${id}`,
            success: function (response) {
                window.location.href = '/';
            },
            error: function (err) {
                alert(err);
            }
        });
    });
});