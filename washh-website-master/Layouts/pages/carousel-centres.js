document.write(`
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"> 

    <div class="row carousel-container"
    style="margin-left: 5%; margin-right: 5%;">
        <div class="col-lg-5 col-md-12 col-sm-12">
            <h1 class="carousel-text">
            Washh will be soon at
            your service in...</h1>
        </div>
        
        <div class="col-lg-7 col-md-12 col-sm-12">
            <!-- FOR TABLET AND DESKTOP VIEW -->
            <div id="carousel-desktop-view" class="p-3 carousel-desktop carousel slide" data-mdb-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-2"
                            style="width: 230px; height: 200px;">
                                <a href="./">
                                    <img
                                    src="./images/ghy.jpg"
                                    class="col-xs-3 carousel-image-desktop"
                                    alt="Guwahati Centre"
                                    style="
                                    width: 100%;
                                    height: 100%;"
                                    />
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-2"
                            style="width: 230px; height: 200px;">
                                <a href="./dibrugarh.html">
                                    <img
                                    src="./images/dibru.jpg"
                                    class="col-xs-3 carousel-image-desktop"
                                    alt="Dibrugarh Centre"
                                    style="
                                    width: 100%;
                                    height: 100%;"
                                    />
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-2"
                            style="width: 230px; height: 200px;">
                                <a href="./tezpur.html">
                                    <img
                                    src="./images/tez.jpg"
                                    class="col-xs-3 carousel-image-desktop"
                                    alt="Tezpur Centre"
                                    style="
                                    width: 100%;
                                    height: 100%;"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-2"
                            style="width: 230px; height: 200px;">
                                <a href="./udalguri.html">
                                    <img
                                    src="./images/udalguri.jpg"
                                    class="col-xs-3 carousel-image-desktop"
                                    alt="Guwahati Centre"
                                    style="
                                    width: 100%;
                                    height: 100%;""
                                    />
                                </a>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-2"
                            style="width: 230px; height: 200px;">
                                <a href="./darbhanga.html">
                                    <img
                                    src="./images/darbhanga.jpg"
                                    class="col-xs-3 carousel-image-desktop"
                                    alt="Guwahati Centre"
                                    style="
                                    width: 100%;
                                    height: 100%;""
                                    />
                                </a>
                            </div>                            
                            <div class="col-md-4 col-sm-4 col-xs-2"
                            style="width: 230px; height: 200px;">
                                <a href="">
                                    <img
                                    src="./images/viewall.jpg"
                                    class="viewmore col-xs-3 carousel-image-desktop"
                                    alt="View More"
                                    style="
                                    background-color: white;
                                    width: 100%;
                                    height: 100%;""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a
                class="carousel-control-next carousel-navig"
                data-mdb-target="#carousel-desktop-view"
                data-mdb-slide="next"
                style="padding-left: 7%;">
                    <span class="" 
                    aria-hidden="true"
                    style="font-size: 28px;">
                        <i class="bg-light fas fa-angle-right pt-2"
                        style="padding: 100%;
                        border-radius: 75%;
                        padding-top: 10%;
                        color: black;
                        text-align: center;"></i>
                    </span>
                </a>
            </div>

            <!-- CAROUSEL FOR MOBILE VIEW -->
            <div id="carousel-mobile-view" class="carousel-mobile carousel slide pb-3" data-mdb-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-mdb-interval="10000">
                        <a href="">
                            <img
                            src="./images/ghy.jpg"
                            class="carouser-image-mobile"
                            alt="Guwahati Centre"
                            />
                        </a>
                    </div>
                    <div class="carousel-item" data-mdb-interval="2000">
                        <a href="./dibrugarh.html">
                            <img
                            src="./images/dibru.jpg"
                            class="carouser-image-mobile"
                            alt="Dibrugarh Centre"
                            />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="./tezpur.html">
                            <img
                            src="./images/tez.jpg"
                            class="carouser-image-mobile"
                            alt="Tezpur Centre"
                            />
                        </a>
                    </div>
                    <div class="carousel-item" data-mdb-interval="2000">
                        <a href="./udalguri.html">
                            <img
                            src="./images/udalguri.jpg"
                            class="carouser-image-mobile"
                            alt="Bihar Centre"
                            />
                        </a> 
                    </div>
                    <div class="carousel-item" data-mdb-interval="2000">
                        <a href="./darbhanga.html">
                            <img
                            src="./images/darbhanga.jpg"
                            class="carouser-image-mobile"
                            alt="Bihar Centre"
                            />
                        </a>
                    </div>
                    <div class="carousel-item" data-mdb-interval="2000">
                        <a href="">
                            <img
                            src="./images/viewall.jpg"
                            class="carouser-image-mobile"
                            alt="View More"
                            />
                        </a>
                    </div>
                </div>
                


                <a
                class="carousel-control-next carousel-navig"
                data-mdb-target="#carousel-mobile-view"
                data-mdb-slide="next" type="button"
                style="box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
                padding-left: 7%;">
                    <span class="" 
                    aria-hidden="true"
                    style="font-size: 28px;">
                        <i class="bg-light fas fa-angle-right pt-2"
                        style="padding: 100%;
                        border-radius: 75%;
                        padding-top: 10%;
                        color: black;
                        text-align: center;"></i>
                    </span>
                </a>

          </div>



        </div>
    </div>
`);