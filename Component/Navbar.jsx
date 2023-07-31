import style from "./navbar.module.css"
import pic from "./Logo.svg"
import pic1 from "./logo-tata.svg"
const Navbar = () => {
    return (
        <section id={style.nav}>
            {/* <h1 className={design.nav}>swaraj1</h1> */}
            <article>
                <div>
                   <img src={pic} height="100%" width="100%"/> 
                </div>
                {/* <div className={style.Logo}> </div> */}
                <div className={style.Menu}>
                    <ol>
                        <li><a href="">What we do</a></li>
                        <li><a href="">Who we are</a></li>
                        <li><a href="">Insight</a></li>
                        <li><a href="">Carees</a></li>
                        <li><a href="">Investors</a></li>
                    </ol>
                </div>
                <div className={style.Contact}>
                <ol>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">TCS WORLDWIDE</a></li>
                        <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
                        
                        <li><a href=""><img src={pic1} alt=""/></a></li>
                    </ol>
                </div>
            </article>
        </section>
    )
}
export default Navbar