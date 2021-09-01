import React from "react"
import  "../components/Home.css";
import Footer from "./footer"
export default function Home(){
    return(
        <>
   
   <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <h3 class="my-heading ">MOJO<span class="bg-main">AVE</span></h3>
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars mfa-white"></span>
            </button>

            <div id="main">
                <a href="javascript:void(0)" class="openNav"></a><span class="fa fa-bars" onclick="openNav()"></span>
            </div>

         
           
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
          <ul class="mob-ul">
             <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
             <li class="nav-item"><a class="nav-link" href="#">About</a></li>
             
             <li class="nav-item"><a class="nav-link" href="#">Events</a></li>
             <li class="nav-item"><a class="nav-link" href="#">Groups</a></li>
             <li class="nav-item"><a class="nav-link" href="#">Music</a></li>
             <li class="nav-item"><a class="nav-link" href="#">Marketplace</a></li>
             <li class="nav-item"><a class="nav-link" href="#">Featured Artists</a></li>
             <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
             <li class="nav-item"><a class="nav-link" href="#">Register</a></li>
             
             
          </ul>
        </div>


            <div class="collapse navbar-collapse" id="navbarResponsive">
                <form class="form-inline my-2 my-lg-0 col-md-7">
                    <input class="myform-control mr-sm-2" type="search" placeholder="find peoples, instruments, bands and more..." aria-label="Search"></input>
                    <button class="btn btn-light"><i class="fa fa-search"></i></button>
                </form>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-link">
                        <a class="btn btn-primary btn-block btn-login" href="#">Login</a>
                    </li>
                    <li class="nav-link">
                        <a class="btn btn-primary btn-block btn-register" href="#">Register</a>
                    </li>

                </ul>
            </div>

        </div>
    </nav>

    
    <header class="masthead text-white ">
        <div class="overlay"></div>
        <div class="container slider-top-text">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="my-heading">WELCOME TO MOJO<span class="bg-main">AVE</span></h3>
                    <p class="myp-slider text-center">Where musicians unite and become better together</p>
                    <p class="myp text-center">SHARE YOUR MEMORIES   |   CONNECT WITH OTHERS   |   MAKE NEW FRIENDS</p>
                    <a class="btn btn-primary btn-join" href="#">JOIN THE COMMUNITY</a>

                </div>
                <div class="col-md-12 text-center mt-5">
                    <div class="scroll-down">
                        <a class="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom"><i class="fa fa-angle-down"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="testimonials" id="gobottom">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="big-img">
                        <img src="https://images.pexels.com/photos/167631/pexels-photo-167631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid"></img>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="inner-section wow fadeInUp">
                        <h3>Follow the <span class="bg-main">Next Event</span></h3>
                        <br></br>
                        <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>

                        <div class="linear-grid">
                            <div class="row">
                                <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s" >
                                    <img src="https://images.pexels.com/photos/534031/pexels-photo-534031.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail"></img>
                                </div>
                                <div class=" col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                    <img src="https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail"></img>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                    <img src="https://images.pexels.com/photos/285598/pexels-photo-285598.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail"></img>
                                </div>
                                <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                    <img src="https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials mybg-events">

        <div class="container">
            
            <div class="row">
                <div class="col-md-12 wow fadeInUp">
                    <h3 class="title-heading text-center">MOJOAVE EVENTS</h3>
                    <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="row wow slideInLeft" data-wow-duration="3s">
                <div class="col-md-4 mb-3">
                    <div class="big-img2">
                        <img src="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid"></img>
                    </div>
                    
                </div>
                <div class="col-md-8">
                    <div class="inner-section">
                        <div class="my-grid">
                            <div class="row">
                                <div class="col-sm-6 col-md-4 mb-3">
                                   
                                    <img src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid"></img>
                                    
                                </div>
                                <div class="col-sm-6 col-md-8 mb-3 ">
                                    
                                    <img src=" https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid"></img>
                                
                                </div>

                                <div class="col-md-8 mb-3">
                                    <div class="text-block">
                                        <h5 class="events-heading">Lorem ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                        <p class="myp-font">contrary to popular belief, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book and more recently with desktop publishing software like Aldus PageMaker.</p>
                                    </div>
                                </div>
                                <div class=" col-md-4 ">
                                     
                                    <img src="https://images.pexels.com/photos/1150837/pexels-photo-1150837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid"></img>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto wow fadeInUp">
                    <h3 class="text-center font-weight-bold">JOIN MOJO<span class="bg-main">AVE</span> GROUPS</h3>
                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        <div class="card-block">

                            <h4 class="card-title text-center">CATHERINA GAIL</h4>

                            <div class="card-text text-center">
                                <div class="social-icons">
                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        <div class="card-block">

                            <h4 class="card-title text-center">HARVEY RUBE</h4>

                            <div class="card-text text-center">
                                <div class="social-icons">
                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        <div class="card-block">

                            <h4 class="card-title text-center">JANET PRIS</h4>

                            <div class="card-text text-center">
                                <div class="social-icons">
                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <img class="card-img-top" src="https://images.pexels.com/photos/167445/pexels-photo-167445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        <div class="card-block">

                            <h4 class="card-title text-center">KEVIN WARD</h4>

                            <div class="card-text text-center">
                                <div class="social-icons">
                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials text-center mybg-music">
        <div class="container">
            <div class="row">
                <div class="col-md-12 wow fadeInUp">
                    <h3 class="title-heading text-center font-weight-bold">MOJOAVE LATEST MUSIC</h3>
                    <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                    <div class="music-gal item box">
                        <a href="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                        <img class="img-fluid" src="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="testimonials bg-light" id="marketplace">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto wow fadeInUp">
                    <h3 class="text-center font-weight-bold">MOJO<span class="bg-main">AVE</span> MARKET PLACE</h3>
                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        <div class="card-block">

                            <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4>

                            <div class="card-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small>$ 170</small>
                            <a href="#" class="pull-right">More Info</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                        <div class="card-block">

                            <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4>

                            <div class="card-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small>$ 170</small>
                            <a href="#" class="pull-right">More Info</a>

                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="card">
                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
                        <div class="card-block">

                            <h4 class="card-title ">Lorem Ipsum Dolor Site Amet</h4>

                            <div class="card-text ">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small>$ 170</small>
                            <a href="#" class="pull-right">More Info</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials text-center ">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto wow fadeInUp">
                    <h3 class="text-center font-weight-bold">MOJO<span class="bg-main">AVE</span> FEATURED ARTIST</h3>
                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-6 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="big-img-3">
                        <img src="https://images.pexels.com/photos/167480/pexels-photo-167480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid"></img>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-6 mt-4">
                    <div class="my-right-text wow fadeInUp">

                        <p class="text-justify font-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>

                        <a href="#" class="link-color">Michael U</a>
                        <p class="text-muted">Lorem Ipsum Dolor Sit Amet</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

   
    <footer class="footer bg-dark">
        <div class="container">
            <div class="row">
               
                <div class="col-lg-6 text-center text-lg-left my-auto  wow zoomIn">
                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <a href="#">About</a>
                        </li>
                        <li class="list-inline-item">⋅</li>
                        <li class="list-inline-item">
                            <a href="#">Contact</a>
                        </li>
                        <li class="list-inline-item">⋅</li>
                        <li class="list-inline-item">
                            <a href="#">Terms of Use</a>
                        </li>
                        <li class="list-inline-item">⋅</li>
                        <li class="list-inline-item">
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    <p class="text-muted small mb-4 mb-lg-0">© Mojoave 2018. All Rights Reserved.</p>
                </div>
                <div class="col-lg-6 text-center text-lg-right my-auto  wow zoomIn">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-3">
                            <a href="#">
                                <i class="fa fa-facebook fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a href="#">
                                <i class="fa fa-twitter fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">
                                <i class="fa fa-instagram fa-2x fa-fw"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    
        
        <Footer />
        </>
    )
}