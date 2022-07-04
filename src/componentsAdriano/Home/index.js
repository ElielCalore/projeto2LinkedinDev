import {Link} from "react-router-dom"

import styles from "./styles.module.css"
import cover from "../../images/cover.png"


export function Home () {




    return (
        <div className="container-fluid mt-5" id={styles.formContainer}>


            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <img src={cover} alt="cover" className="img-fluid"/>
                </div>
                <div className="col-3"></div>

                <div className="col-3"></div>
                <div className="col-3 d-flex justify-content-center"><Link to="./dashboard" className={`btn btn-primary ${styles.button}`} >CANDIDATE</Link></div>
                <div className="col-3 d-flex justify-content-center"><Link to="./teste2" className={`btn btn-primary ${styles.button}`} >ANUNCIE</Link></div>
                <div className="col-3"></div>

            </div>
        </div>
    )
}