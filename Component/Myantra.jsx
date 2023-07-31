import style from "./myantra.module.css"
import pic from "./myntra.png"
import pic1 from "./logo-tata.svg"
const Myantra = () => {
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
                        <li><a href="">MAN</a></li>
                        <li><a href="">WOMEN</a></li>
                        <li><a href="">KIDS</a></li>
                        <li><a href="">HOME & LIVING</a></li>
                        <li><a href="">BEAUTY</a></li>
                        <li><a href="">STUDIO&nbsp;<sup>New</sup></a></li>
                    </ol>
                </div>
                <div id={style.srbox}>
                <li><a href=""><i  id={style.s1box} class="fa-solid fa-magnifying-glass"></i></a></li>
                        <div id={style.sname}>
                           <input placeholder="Search for products, brands and more" class="desktop-searchBar"/>
                        </div>
                </div>
                <div className={style.Contact}>
                <ol> 
                        <li><a href=""><i class="fa-thin fa-user"></i></a></li>
                        <li><a href=""><img src={pic1} alt=""/></a></li>
                        <li><a href=""><img src={pic1} alt=""/></a></li>
                        
                    </ol>
                </div>

            </article>
        </section>
    )
}
export default Myantra