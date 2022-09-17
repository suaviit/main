class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section id="footer">	
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center feature-title"> 			 
                    <div class="social text-center more1">
                        <ul>
                            <li><a class="wow fadeInUp" href="https://twitter.com/suaviit/" aria-label="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="wow fadeInUp" href="https://www.facebook.com/Suavi-IT-Consulting-110089771823025" aria-label="Facebook" target="_blank" data-wow-delay="0.2s"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="wow fadeInUp" href="https://www.linkedin.com/company/suaviit/" aria-label="Linkedin" target="_blank" data-wow-delay="0.4s"><i class="fa fa-linkedin"></i></a></li> 
                        </ul>
                    </div>	
                    
                    <div class="legal text-center">				
                        <a href="/legal/cookie-policy.html">Cookie Policy |</a>
                        <a href="/legal/privacy-policy.html">Privacy Policy |</a>
                        <a href="/legal/terms-of-service.html">Terms of Service</a>
                    </div>
                    
                            
                    <div class="copyright text-center wow fadeInUp">
                        <p>Copyright © Designed & Developed by Suavi iT. </br> All Rights Reserved.</p>
                    </div>
                    
                    <a href="#" aria-label="scrollToTop" class="scrollToTop"><i class="pe-7s-up-arrow pe-va"></i></a>
                </div>
            </div>	
        </div>	
    </section>`;
    }
}
customElements.define('my-footer', MyFooter)

// option 1
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section id="menu">
        <nav class="navbar-wrapper navbar-default" role="navigation">
            <div class="container">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-themers">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand site-name" href="/#home"><img src="/images/logo.png" alt="logo"></a>
                  </div>
         
                  <div id="navbar-scroll" class="collapse navbar-collapse navbar-themers navbar-right">
                    <ul class="nav navbar-nav">
                        <li><a href="/#top" aria-label="Home">Home</a></li>
                        <li><a href="/#services" aria-label="Services">Services</a></li>
                        <li><a href="/#about-us" aria-label="About Us">About us</a></li> 
                        <li><a href="/#solutions" aria-label="Solutions">Solutions</a></li>
                        <li><a href="/#clients" aria-label="Clients">Clients</a></li>							
                        <li><a href="/#contact" aria-label="Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>`;
    }
}
customElements.define('my-header', MyHeader)