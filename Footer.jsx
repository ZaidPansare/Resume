import './Footer.css'

const Footer = ()=> {
    return(
        <footer>
            <div>
                <h2>GET IN TOUCH</h2>
                <p>sudeshmd1997@gmail.com</p>
                <p>+918123265859</p>
            </div>
            <div className='buttons'> 
                <button>Movie Website</button>
                <button>Ecom Website</button>
                <button>Videocalling website</button>
                <button>Pixabay Website</button>
                <button>Contact Website</button>
                <button>B'day Website</button>
                <button>Weather Website</button>
                <button>Piano Website</button>
            </div>
            <div>
                <div id='logos'>
                <i class="fa-brands fa-facebook"></i>            
                <i class="fa-brands fa-linkedin"></i>         
                <i class="fa-brands fa-twitter"></i>
                </div>
                <br />
                <div>
                    <p>@copyright Sudesh Gowda</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer