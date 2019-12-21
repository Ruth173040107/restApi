$('#search-input').on('click', function(){
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '301065ca',
            's': $('#search-input').val()
        },

        success: function (result) {
            console.log(result)
        }
    });

});