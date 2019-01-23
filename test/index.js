window.onload = function() {
    $(window).keyup(function (e) {
        //console.log(e.keyCode)
        if (e.keyCode == 13) {
            $('.create').click()
        }
    });
    $('.create').click(function(){
        $.ajax({
            url: "http://localhost:8000/homeworkBox_api/createBox",
            data: {
                createId: 'wxid255432',
                boxName: $('input[name=boxName]').val(),
                courseName: $('input[name=courseName]').val(),
                className: $('input[name=className]').val(),
            },
            type: "POST",
            dataType: 'json',
            success: function (data) {
                console.log(data)
            }
        })	
    })
    $('.add').click(function(){
        $.ajax({
            url: "http://localhost:8000/homeworkBox_api/addBox",
            data: {
                userId: 'wxid123456789',
                boxId: $('input[name=boxId]').val()
            },
            type: "POST",
            dataType: 'json',
            success: function (data) {
                console.log(data)
            }
        })	
    })	
}