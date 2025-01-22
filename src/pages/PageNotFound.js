import { Link } from "react-router-dom"
import PageNotFoundImage from "../assets/page-not-found.jpg"

export const PageNotFound = () => {
  return (
    <main>
        <section className="pnf">
           <div className="oops">
            <p>Oops - Page Not Found</p>
            <img src={PageNotFoundImage } alt="" />
            <Link to="/">
             <button>Go Back To Word Counter</button>
            </Link>
           
           </div>
        </section>
        
    </main>
  )
}


