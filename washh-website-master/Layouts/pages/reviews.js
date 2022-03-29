document.write(`
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"> 
<link rel="stylesheet" type="text/css"
        href="./Styles/reviews.css"/>

<!-- DESKTOP VIEW -->

<div class="rev mt-3">
	<h2 class="review-heading">
		Let's see what our customers are saying about us...
	</h2>
	<div class="thumbnail">
		<div id="DemoCarousel" class="carousel slide" 
		data-interval="2000" data-ride="carousel">

			<ol class="carousel-indicators">
				<li data-target="#DemoCarousel" data-slide-to="0" 
				class="active"></li>
				<li data-target="#DemoCarousel" data-slide-to="1"></li>
				<li data-target="#DemoCarousel" data-slide-to="2"></li>
			</ol>

			<div class="carousel-inner">
				<div class="item active">
					<div class="main-slide">
							<h2>
								"Excellent Service. Tried for the first time. Impressive fast service. And the quality of packing is just wow. "
							</h2><br/>
							<p class="reviewer pt-3">- Nabajyoti Das (Playstore Review)</p>
					</div>

					<div class="left-side item">
					</div>
					<div class="right-side item"
						style="">
					</div>
				</div>


				<div class="item">
					<div class="main-slide">
							<h2>"Best laundry and dry cleaning service in guwahati. Quite good and cost effective."
							</h2><br/>
							<p class="reviewer">- Prakash Talukdar (Playstore Review)</p>
					</div>

					<div class="left-side item">
					</div>
					<div class="right-side item">
					</div>
				</div>

				<div class="item">
					<div class="main-slide">
							<h2>"Amazing service, specially their free pickup and delivery. They also deliver within 24 hours. Makes my life easier.."</h2><br/>
							<p class="reviewer">- Tanya Lohani (Playstore Review)</p>
					</div>

					<div class="left-side item"">
					</div>
					<div class="right-side item">
					</div>
				</div>

			</div>
			
			<a class="carousel-control left i-navigation" 
			href="#DemoCarousel" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left"></span>
			</a>
			<a class="carousel-control right i-navigation" href="#DemoCarousel" 
			data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" ></span>
			</a>
		</div>
	</div>
</div>


<!-- MOBILE VIEW -->
<div class="rev2">
	
    <div class="row mt-5">
        <h2 class="review-head ml-5 mb-5">
            Let's see what our customers are saying about us...
        </h2>
            
        <div class="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'>
            <div class="gallery-cell">
                <p class="review-text text-resp">
                    "Excellent Service. Tried for the first time. Impressive fast service. And the quality of packing is just wow."
                    <br/><br/>
                    <span class="reviewer reviewer-resp"> - Nabajyoti Das (Playstore Review)</span>
                </p>
            </div>
            <div class="gallery-cell review-color">
                <p class="review-text text-resp">
                    "Best laundry and dry cleaning service in guwahati. Quite good and cost effective."
                    <br/><br/>
                    <span class="reviewer reviewer-resp"> - Prakash Talukdar (Playstore Review)</span>
                </p>
            </div>
            <div class="gallery-cell review-color">
                <p class="review-text text-resp">
                    "Amazing service, specially their free pickup and delivery. They also deliver within 24 hours. Makes my life easier.."
                    <br/><br/>
                    <span class="reviewer reviewer-resp"> - Tanya Lohani (Playstore Review)</span>
                </p>
            </div>
        </div>
    </div>
</div>
`);

