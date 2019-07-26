$(document).ready(function(){
    $(".rfid").click(function(){
        $("#rfid-modal").addClass("is-active");
    });
    $(".modal-close").click(function() {
        $(".modal").removeClass("is-active");
     });
})