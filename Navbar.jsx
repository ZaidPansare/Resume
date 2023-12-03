import './Navbar.css'
import './Responsive.css'

const Navbar = ()=> {

    function cli(){
        document.body.style.background="black"
        document.body.style.color="white"
    }
    function clil(){
        document.body.style.background="white"
        document.body.style.color="black"
    }
    return(

        <div className="Navbar">
            <nav>
                <div className='sd'>
                    <h1>SD</h1>
                </div>
                <section className='navsec'>
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
                </section>
                <div className="dongle">
                    <button onClick={cli}>Dark</button>
                    <button onClick={clil}>Light</button>
                </div>
                <div className='logo'>
                    <div>
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div>
                    <i class="fa-brands fa-linkedin"></i>
                    </div>
                    <div>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                 </div>
            </nav>
        <header className="img">
            <br />
            <div id='name'>
            <h1 id='sudesh'>SUDESH GOWDA MD</h1>
            </div>
            <br />
            <h1 id='webd'>WEB DEVELOPER</h1>
            <br />
            <button id='contact'>CONTACT ME</button>
        </header> 
        <br />
        
        </div>
      
    )
}

export default Navbar