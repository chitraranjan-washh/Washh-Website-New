document.write(`
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"> 

    <div class="why-container">
        <div class="row ml-3 mt-5 mr-2">
            <br/>
            <h2 class="why-heading-text">Why Washh</h2>
            <p class="why-description-text">
                Washh makes everything laundry quick, painless, and affordable. 
                <br/>And there is more - 
            </p>
        </div>
        <div class="row m-1">
            <div class="col-md-6">

                <div class="flex-container why-images-container">
                    <div>
                        <img src="./images/pick-time-slot.jpg"
                        width="88"
                        height="88" class="why-image"/>
                        <p class="why-image-text pt-1">
                        Pick Time Slot as per your <br />
                        convenience</p>
                    </div>
                    <div>
                        <img src="./images/free-pickup-deliv.jpg"
                        width="88"
                        height="88" class="why-image" />
                        <p class="why-image-text pt-1">
                        Free Doorstep Pickup and 
                        <br />Delivery</p>
                    </div> 
                </div>
                <div class="flex-container why-images-container">
                    <div>
                        <img src="./images/washh-machine.jpg"
                        width="88"
                        height="88" class="why-image" />
                        <p class="why-image-text pt-1">
                        Worldclass machines & 
                        <br/>eco-friendly detergents</p>
                    </div>
                    <div>
                        <img src="./images/washh-expert.jpg"
                        width="88"
                        height="88" class="why-image" />
                        <p class="why-image-text pt-1">
                        Highly skilled and 
                        <br/>trained experts</p>
                    </div> 
                </div>

            </div>


            <div class="col-md-6">
                <div class="iframe-container iframe-style">
                    <iframe width="560" height="315" alt="Why Washh?" 
                    src="https://www.youtube.com/embed/3mY2BmNsHjY" 
                    title="Washh Laundry" frameborder="0" 
                    allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture" allowfullscreen
                    class="iframe-style"></iframe>
                    
                    <div class="overlay trigger" src="https://www.youtube.com/embed/3mY2BmNsHjY" data-target="#videoModal" data-toggle="modal"></div>
                </div>
          
                <div class="modal" id="videoModal" tabindex="-1" 
                role="dialog" aria-labelledby="videoModal" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <button type="button" class="close btn-round btn-danger close-video" 
                            data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/>
    </div>
`);

$(document).ready(function() {
    autoPlayYouTubeModal();
});
  
function autoPlayYouTubeModal() {
    var trigger = $('.trigger');
    trigger.click(function(e) {
        e.preventDefault();
        var theModal = $(this).data("target");
        var videoSRC = $(this).attr("src");
        var videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function(e) {
            $(theModal + ' iframe').attr('src', '');
        });
    });
};