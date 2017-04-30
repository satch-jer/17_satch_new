$(function() {
    //get the form and messages div.
    var form = $('#ajax-form');
    var formmessages = $('#form-messages');

    $(form).submit(function(e){
        e.preventDefault();

        //serialize (key-value) the form data
        var formdata = $(form).serialize();

        //submit form with ajax
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formdata
        }).done(function(response){
            //set success message
            $(formmessages).removeClass('error');
            $(formmessages).addClass('success');
            $(formmessages).text(response);

            //clear form
            $('#message').val('');
        }).fail(function(data){
            //set error message
            $(formmessages).removeClass('success');
            $(formmessages).addClass('error');

            if(data.responseText !== ''){
                $(formmessages).text(data.responseText);
            }else{
                $(formmessages).text('Sorry, er ging iets mis. Probeer even opnieuw.');
            }
        });
    });
});