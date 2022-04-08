document.write(`
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"> 

	<div>
		<h2 class="heading-invest">Why invest in Washh?</h2>
		<br/><br/>
		<div class="flex-container-invest">
			<div class="flex-container-col">
				<img src="./images/Franchise-1.png" alt="" class="img-invest"/>
				<h4 class="subhead-invest">FOCO Model</h4>
				<p class="text-invest">
					Having successfully operated in the online laundry business since 2017, we have tried out different formats of fulfillment to understand what works best. Through the Franchise Owned Company Operated, we take care of all your Franchise needs, including training and supervising your staff. Hence, you have to do very little in terms of everyday operations. This ensures not only a hassle-free customer experience but also an effective franchise onboarding and operational experience.	
				</p>
			</div>
			<div class="flex-container-colM"></div>
			<div class="flex-container-col">
			<img src="./images/Franchise-2.png" alt="" class="img-invest"/>
				<h4 class="subhead-invest">Smart Franchise Dashboard</h4>
				<p class="text-invest">					
					Managing multiple businesses can become challenging. However, with Washh Smart Franchise Dashboard, you can track your business performance day to day from anywhere in the world. The cloud-based dashboard assists with real-time monitoring of day-to-day sales, orders, sales, revenues, and more. 
				</p>
			</div>
		</div>
		<br/><br/>
		<div class="flex-container-invest">
			<div class="flex-container-col">
			<img src="./images/Franchise-3.png" alt="" class="img-invest"/>
				<h4 class="subhead-invest"> Store Monitoring System powered by AI</h4>
				<p class="text-invest">
					Our store monitoring system is enhanced with AI and is craftily designed to ensure complete security and alert the franchise owners in case of any issues. This ensures you have full control of your business anytime. 	
				</p>
			</div>
			<div class="flex-container-colM"></div>
			<div class="flex-container-col">
			<img src="./images/Franchise-4.png" alt="" class="img-invest"/>
				<h4 class="subhead-invest">360&deg; Marketing Support</h4>
				<p class="text-invest">
					We understand that marketing is an integral part of generating business for a franchise. WASHH has its in-house dedicated team which will implement marketing strategies via Social media, Digital marketing, off-line, on-store to create a buzz around your establishment and bring your target customers closer to you.	
				</p>
			</div>
		</div>

		<br/><br/>
		<div class="bton"><br/><a class="enquire-btn scroll" target="Enquiry">Enquire Now</button><br/></a>
		<br/>
	</div>
`);


$('.scroll').click(function() {
	$('body').animate({
		scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
	}, 500);
});
