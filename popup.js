function get(){
    $.ajax({
        url: "test.php",
        type: "post",
        data: values ,
        success: function (response) {

           // You will get response from your PHP page (what you echo or print)
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
}