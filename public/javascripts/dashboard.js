(function() {
  var csrfToken = $('input[name="_csrf"]').val();
  var imageInput = $('input[name="image"]');
  var timer;

  var $grid = $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    isAnimated: true,
  });

  $('#add-btn').on('click', function(){
    var title = $('input[name="title"]').val();
    var image = imageInput.val();

    $.ajax({
      url: '/pins/dashboard',
      type: 'POST',
      cache: false,
      headers: {"X-CSRF-Token": csrfToken },
      data: {'title': title, 'image':image},
      success: function(data){
        if (data) {
          var element = "<div class='grid-item' id='" + data._id + "'>\
                                    <div class='panel panel-default'> \
                                      <div class='panel-body'> \
                                        <img src='" + data.imageURL + "' alt='" + data.title + "' class='img-responsive'> \
                                      </div> \
                                      <div class='panel-footer'>\
                                      <p> " + data.title + " </p>\
                                      <p class='text-right'>\
                                        <a href='#' data-uid='" + data._id + "' class='remove-btn'>\
                                         <span class='glyphicon glyphicon-remove-sign' aria-hidden='true'></span>\
                                        </a>\
                                        &hearts; 0\
                                      </p>\
                                      </div> \
                                  </div> \
                                </div> ";

          $('#my-elemnts').append(element).masonry('reload');

          $('#new-link').modal('hide')
        }

      },
      error: function(jqXHR, textStatus, err){
        // TODO: Handle errors
      }
    });


  });

  imageInput.on('keyup', function() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      $('#image-preview').attr('src', $('input[name="image"]').val());
    },100);
  });

  $('img').error(function(){
    $(this).attr('src', '/images/missing.png');
  });

  $('.grid').on('click', 'a.remove-btn', function(e){
    e.preventDefault();
    var id = $(this).data('uid');
    var $element = $("#"+id);

    $.ajax({
      url: '/pins/remove',
      type: 'POST',
      cache: false,
      headers: {"X-CSRF-Token": csrfToken },
      data: {'id': id},
      success: function(data){
        if (data) {
          $('#my-elemnts').masonry('remove', $element).masonry('reload');
        }

      },
      error: function(jqXHR, textStatus, err){
        // TODO: Handle errors
      }
    });
  })
}());
