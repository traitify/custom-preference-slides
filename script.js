Traitify.setHost("https://api-sandbox.traitify.com")
Traitify.setPublicKey("your public key")
Traitify.setVersion("v1")
newSlides = [
  {
    "id":"yo yo",
    "position":15,
    "caption":"yo yo",
    "image_desktop":"https://cdn.traitify.com/slides/5f242fc4-28d3-4253-8abb-164b78cab88a/desktop",
    "image_desktop_retina":"http://richthediabetic.com/wp-content/uploads/2013/07/Pizza.jpg",
    "response":null,
    "time_taken":null,
    "completed_at":null,
    "created_at":1434468161988,
    "focus_x":48,
    "focus_y":49
  },
  {
    "id":"yo yo",
    "position":45,
    "caption":"yo yo",
    "image_desktop":"https://cdn.traitify.com/slides/5f242fc4-28d3-4253-8abb-164b78cab88a/desktop",
    "image_desktop_retina":"http://richthediabetic.com/wp-content/uploads/2013/07/Pizza.jpg",
    "response":null,
    "time_taken":null,
    "completed_at":null,
    "created_at":1434468161988,
    "focus_x":48,
    "focus_y":49
  },
  {
    "id":"yo yo",
    "position":30,
    "caption":"yo yo",
    "image_desktop":"https://cdn.traitify.com/slides/5f242fc4-28d3-4253-8abb-164b78cab88a/desktop",
    "image_desktop_retina":"http://richthediabetic.com/wp-content/uploads/2013/07/Pizza.jpg",
    "response":null,
    "time_taken":null,
    "completed_at":null,
    "created_at":1434468161988,
    "focus_x":48,
    "focus_y":49
  },
  {
    "id":"yo yo",
    "position":20,
    "caption":"yo yo",
    "image_desktop":"https://cdn.traitify.com/slides/5f242fc4-28d3-4253-8abb-164b78cab88a/desktop",
    "image_desktop_retina":"http://richthediabetic.com/wp-content/uploads/2013/07/Pizza.jpg",
    "response":null,
    "time_taken":null,
    "completed_at":null,
    "created_at":1434468161988,
    "focus_x":48,
    "focus_y":49
  }
]
Traitify.oldGetSlides = Traitify.getSlides
Traitify.getSlides = function(params){
  return SimplePromise(function(resolve, reject){
    Traitify.oldGetSlides(params).then(function(slides){
      for(i = 0; i < newSlides.length; i++ ){
        slide = newSlides[i];
        slides.splice(slide.position, 0, slide)
      }

      resolve(slides);
    })
  })
}
widgets = Traitify.ui.load("your assessment id", ".tf-slide-deck")

processSlide = widgets.slideDeck.actions.store.processSlide
widgets.slideDeck.actions.store.processSlide = function(data){
  slides = newSlides.map(function(data){ return data.id })
  if(slides.indexOf(data.id) == -1){
    processSlide(data)
  }else{
    console.log("Do something different with:")
    console.log(data)
  }
}
