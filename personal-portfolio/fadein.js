$(document).on("scroll", function() {
     let pageTop = $(document).scrollTop()
     let pageBottom = pageTop + $(window).height()
     let tags = $(".project")

     for(let i=0; i < tags.length; i++){
          let tag = tags[i];
          
     if($(tag).position().top < pageBottom) {
          $(tag).addClass("visible")
     }
     }
})
$(document).on("scroll", function() {
     let pageTop = $(document).scrollTop()
     let pageBottom = pageTop + $(window).height()
     let tags = $(".about-me")

     for(let i=0; i < tags.length; i++){
          let tag = tags[i];
          
     if($(tag).position().top < pageBottom) {
          $(tag).addClass("visible")
     }
     }
})
$(document).on("scroll", function() {
     let pageTop = $(document).scrollTop()
     let pageBottom = pageTop + $(window).height()
     let tags = $(".contact-section")

     for(let i=0; i < tags.length; i++){
          let tag = tags[i];
          
     if($(tag).position().top < pageBottom) {
          $(tag).addClass("visible")
     }
     }
})