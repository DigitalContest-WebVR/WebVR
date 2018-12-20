var csrfToken = jQuery("[name=csrfmiddlewaretoken]").val();

AFRAME.registerComponent('updater', {
    init: function()
    {
      this.el.addEventListener('update', function(evt){

        $.ajax({
          url: "/update/",
          data: {score: evt.detail.score},
          type: "POST",
          beforeSend :function(xhr){
            xhr.setRequestHeader("X-CSRFToken", csrfToken);
          },
          error:function(request,status,error){
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
          }
        })
        .done(function(response){
          console.log(response);
        })
        .fail(function(xhr, status, errorThrown) {
          console.log(status + " " + errorThrown);
        })
        .always(function(xhr, status) {
          console.log("request done");
        })
      });
    }
});
