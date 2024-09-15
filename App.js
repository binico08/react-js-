var NewComponent = React.createClass({
  render: function() {
    return (
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Personal Portfolio - Elwyn Nicole</title>
  {/* bootstrap css cdn link  */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
  {/* custom css file */}
  <link rel="stylesheet" href="css/style.css" />
  {/* google font link */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  {/* bootstrap icon cdn link  */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
  {/* for adding animation to website we have use AOS library 
    AOS Library css file cdn link */}
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  {/* jquery cdn link  */}
  {/* navbar starts */}
  <nav id="navbar-top" className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div className="container-fluid px-5">
      <a className="navbar-brand fw-bold fs-2" href="#" style={{color: '#d242be'}}>Portfolio</a>
      <button className="nav-menu d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <i className="bi bi-menu-button-fill" />
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav gap-4" style={{fontSize: '1.1rem'}}>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutme">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* navbar ends here */}
  {/* home section starts  */}
  <section className="home pt-5 pb-5" id="home">
    <div className="row justify-content-evenly align-middle">
      {/* here data-aos is used for adding aos animation  */}
      <div className="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
        <h2 style={{color: '#d626d3'}}>
          Hello! I Am <br /><span className="c-orange">Elwyn Nicole</span>
        </h2>
        <p className="text-muted">
          I am a Computer Science student of C3A in De La Salle Lipa. <br />
          Get to know me using my portfolio!
        </p>
        <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
          Hire Me
        </button>
        <a href className="link ms-4 d-none">See My Work</a>
      </div>
      <div className="col-10 col-md-4 d-none d-md-block">
        <img src="images/banner-01.webp" className="img-fluid" alt />
      </div>
    </div>
  </section>
  {/* home section ends here */}
  {/* about me section starts */}
  <section className="aboutme mt-5" id="aboutme">
    <div className="heading text-center">
      <small>About Me</small>
      <h3>
        My Field of <br />
        Interests
      </h3>
    </div>
    <div className="row justify-content-evenly mt-5">
      <div className="col-10 col-md-4" data-aos="fade-up">
        <div className="service-card">
          <div className="img">
            <img src="images/JPCSLogo.png" className="w-25 img-fluid img" alt />
          </div>
          <div className="content mt-3">
            <h4>JPCS</h4>
            <p className="text-muted">
              Junior Philippine Computer Society
            </p>
            <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal1">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10" data-aos="fade-up">
        <div className="service-card">
          <div className="img">
            <img src="images/Park Me.png" className="w-25 img-fluid img" alt />
          </div>
          <div className="content mt-3">
            <h4>Park Me</h4>
            <p className="text-muted">
              Park Me - Mobile Application
            </p>
            <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal2">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-10" data-aos="fade-up">
        <div className="service-card">
          <div className="img">
            <img src="images/MusikalistaLogo.png" className="w-25 img-fluid img" alt />
          </div>
          <div className="content mt-3">
            <h4>Musikalista</h4>
            <p className="text-muted">
              DLSL Musikalista
            </p>
            <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal3">Read More</a>
          </div>
        </div>
        {/* modals starts */}
        <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill" /></button>
              <div className="modal-body px-4">
                <div className="img">
                  <img src="images/JPCSLogo.png" className="img-fluid" alt />
                </div>
                <div className="content mt-3">
                  <small>By Elwyn Nicole</small><span className="text-muted ms-2">Aug 8,2024</span>
                  <h4 className="card-title mt-3">JPCS</h4>
                  <div className="social-links mt-4">
                    <button href className="rounded-pill facebook">
                      <i className="bi bi-facebook" />
                    </button>
                    <button href className="rounded-pill linkedin">
                      <i className="bi bi-linkedin" />
                    </button>
                    <button href className="rounded-pill google">
                      <i className="bi bi-google" />
                    </button>
                  </div>
                  <p className="text-muted mt-3">Junior Philippine Computer Society is a PROF Organization of
                    De La Salle Lipa composed of CS, EMC, IT, and ACT students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill" /></button>
            <div className="modal-body px-4">
              <div className="img">
                <img src="images/Park Me.png" className="img-fluid" alt />
              </div>
              <div className="content mt-3">
                <small>By Elwyn Nicole </small><span className="text-muted ms-2 ms-md-0">Jan 8,2024</span>
                <h4 className="card-title mt-3">Park Me</h4>
                <div className="social-links mt-4">
                  <button href className="rounded-pill facebook">
                    <i className="bi bi-facebook" />
                  </button>
                  <button href className="rounded-pill linkedin">
                    <i className="bi bi-linkedin" />
                  </button>
                  <button href className="rounded-pill google">
                    <i className="bi bi-google" />
                  </button>
                </div>
                <p className="text-muted mt-3">Park Me is a mobile application made for De La Salle Lipa's Students to
                  have access to available parking spaces near the campus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill" /></button>
          <div className="modal-body px-4">
            <div className="img">
              <img src="images/MusikalistaLogo.png" className="img-fluid" alt />
            </div>
            <div className="content mt-3">
              <small>By Elwyn Nicole</small><span className="text-muted ms-2 ms-md-0">Dec 8,2023</span>
              <h4 className="card-title mt-3">DLSL Musikalista</h4>
              <div className="social-links mt-4">
                <button href className="rounded-pill facebook">
                  <i className="bi bi-facebook" />
                </button>
                <button href className="rounded-pill linkedin">
                  <i className="bi bi-linkedin" />
                </button>
                <button href className="rounded-pill google">
                  <i className="bi bi-google" />
                </button>
              </div>
              <p className="text-muted mt-3">The DLSL's Musikalista is a SPIN Organization of De La Salle Lipa which is a home to
                music lovers, musicians, singers, songwriters, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about me ends here */}
  {/* portfolio section starts here */}
  <section className="portfolio" id="portfolio">
    <div className="heading text-center pt-5">
      <small>Creative Work</small>
      <h3>Check My Portfolio</h3>
    </div>
    <div id="myBtnContainer" className="text-center mt-4">
      <button className="filter-item" data-filter="all">All</button>
      <button className="filter-item" data-filter="game">Game</button>
      <button className="filter-item" data-filter="webapp">Web App</button>
      <button className="filter-item" data-filter="website">Website</button>
    </div>
    <div className="portfolio-body">
      <div className="row justify-content-evenly px-4">
        <div className="post col-md-4 game all col-10 mt-3 mt-md-0" data-aos="fade-up">
          <div className="card">
            <img src="images/tetrisparody.png" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <button onclick="javascript:myFun()"> <h4 className="card-title">Tetris Game</h4> </button> <br />
              <span className="badge bg-secondary badge-pill">HTML&amp;CSS</span>
              <span className="badge bg-secondary badge-pill">JavaScript</span>
              <span className="badge bg-secondary badge-pill mb-2">Game</span> <br />
              <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal4">Read More</a>
            </div>
          </div>
        </div>
        <div className="post col-md-4 website all col-10 mt-3 mt-md-0" data-aos="fade-up">
          <div className="card">
            <img src="images/calculator.png" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <button onclick="javascript:myFun()"> <h4 className="card-title">Calculator App</h4> </button> <br />
              <span className="badge bg-secondary badge-pill">HTML&amp;CSS</span>
              <span className="badge bg-secondary badge-pill">JavaScript</span>
              <span className="badge bg-secondary badge-pill mb-2">Website</span><br />
              <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal5">Read More</a>
            </div>
          </div>
        </div>
        <div className="post col-md-4 webapp all col-10 mt-3 mt-md-0" data-aos="fade-up">
          <div className="card">
            <img src="images/ebook.png" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <button onclick="javascript:myFun()"> <h4 className="card-title">EBook</h4> </button> <br />
              <span className="badge bg-secondary badge-pill">HTML&amp;CSS</span>
              <span className="badge bg-secondary badge-pill">JavaScript</span>
              <span className="badge bg-secondary badge-pill mb-2">WebApp</span><br />
              <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal6">Read More</a>
            </div>
          </div>
        </div>
      </div>
      {/* modals starts */}
      <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill" /></button>
            <div className="modal-body px-4">
              <div className="img">
                <img src="images/tetrisparody.png" className="img-fluid" alt />
              </div>
              <div className="content mt-3">
                <small>By Elwyn Nicole</small><span className="text-muted ms-2">Aug 8,2024</span>
                <h4 className="card-title mt-3">Tetris Game</h4>
                <div className="social-links mt-4">
                  <button href className="rounded-pill facebook">
                    <i className="bi bi-facebook" />
                  </button>
                  <button href className="rounded-pill linkedin">
                    <i className="bi bi-linkedin" />
                  </button>
                  <button href className="rounded-pill google">
                    <i className="bi bi-google" />
                  </button>
                </div>
                <p className="text-muted mt-3">The Tetris Game is a combination of contemporary arts and technology. 
                  The objective is to create magnificent artworks by playing the nostalgic game of tetris.
                  <br />  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill" /></button>
            <div className="modal-body px-4">
              <div className="img">
                <img src="images/calculator.png" className="img-fluid" alt />
              </div>
              <div className="content mt-3">
                <small>By Elwyn Nicole </small><span className="text-muted ms-2 ms-md-0">Jan 8,2024</span>
                <h4 className="card-title mt-3">Calculator App</h4>
                <div className="social-links mt-4">
                  <button href className="rounded-pill facebook">
                    <i className="bi bi-facebook" />
                  </button>
                  <button href className="rounded-pill linkedin">
                    <i className="bi bi-linkedin" />
                  </button>
                  <button href className="rounded-pill google">
                    <i className="bi bi-google" />
                  </button>
                </div>
                <p className="text-muted mt-3">The Calculator App is designed for students 
                  and professionals to perform mathematical calculations. It is convenient because
                  it can be used anywhere and anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill" /></button>
          <div className="modal-body px-4">
            <div className="img">
              <img src="images/ebook.png" className="img-fluid" alt />
            </div>
            <div className="content mt-3">
              <small>By Elwyn Nicole</small><span className="text-muted ms-2 ms-md-0">Dec 8,2023</span>
              <h4 className="card-title mt-3">EBook</h4>
              <div className="social-links mt-4">
                <button href className="rounded-pill facebook">
                  <i className="bi bi-facebook" />
                </button>
                <button href className="rounded-pill linkedin">
                  <i className="bi bi-linkedin" />
                </button>
                <button href className="rounded-pill google">
                  <i className="bi bi-google" />
                </button>
              </div>
              <p className="text-muted mt-3">The EBook WebApp is designed for people who loves reading. 
                This WebApp enables readers to access books conveniently with their own devices on-hand. 
                Bookworms will surely love this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* portfolio section ends here */}
  {/* contact section starts */}
  <section className="contact py-5" id="contact">
    <div className="heading text-center">
      <small>Get in Touch</small>
      <h3>Any Questions? Feel Free to Contact</h3>
    </div>
    <div className="row justify-content-evenly mt-5">
      <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
        <div className="row justify-content-evenly">
          <div className="col-1">
            <i className="bi bi-geo-alt-fill" />
          </div>
          <div className="col-11">
            <p>123 Street, 3rd District, Bagumbs, 2024, Philippines</p>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-1">
            <i className="bi bi-telephone-fill" />
          </div>
          <div className="col-11">
            <p>+06 9001122334</p>
          </div>
        </div>
        <form>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <i className="bi bi-send-fill" />
            </div>
            <div className="col-11">
              <p>elwyn_nicole_villegas@dlsl.edu.ph</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-1">
              <i className="bi bi-globe-americas" />
            </div>
            <div className="col-11">
              <p>elwynnicole.com</p>
            </div>
          </div>
        </form></div>
      <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
        <div className="contact-form">
          <div className="mb-3">
            <input type="text" className="form-control" id="nameInput" placeholder="Name" required minLength={5} maxLength={20} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="emailInput" placeholder="E-mail" required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="mobileInput" placeholder="Mobile No." required pattern="[0-9]{11}" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="messageInput" placeholder="Message" rows={5} required minLength={15} maxLength={400} defaultValue={""} />
          </div>
          <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
            Submit
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* contact section ends here */}
  {/* now we will make back to top button when user click on it it will be redirected to top page  */}
  <button type="button" className="btn btn-floating btn-lg rounded-pill" id="btn-back-to-top">
    <i className="bi bi-arrow-up" />
  </button>
  {/* footer section starts  */}
  <footer className="text-center text-muted py-4">
    <h3 className="text-white pt-4" data-aos="fade-up">Portfolio</h3>
    <div className="link-group mt-5" data-aos="fade-up">
      <a href="#home">Home</a>
      <div className="vr" />
      <a href="#aboutme">About Me</a>
      <div className="vr" />
      <a href="#portfolio">Portfolio</a>
      <div className="vr" />
      <a href="#contact">Contact</a>
    </div>
    <div className="social-links mt-5" data-aos="fade-up">
      <button href className="rounded-pill facebook">
        <i className="bi bi-facebook" />
      </button>
      <button href className="rounded-pill linkedin">
        <i className="bi bi-linkedin" />
      </button>
      <button href className="rounded-pill google">
        <i className="bi bi-google" />
      </button>
    </div>
    <hr className="text-muted my-4" />
    <p>Copyright 2024 Portfolio | All Rights Reserved.</p>
  </footer>
  {/* footer section ends here */}
</div>    );
  }
});