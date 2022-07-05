import styles from "./styles.module.css"
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams, Link} from "react-router-dom"


export function Jobs () {

    const {idCV} = useParams()
    console.log(idCV)

    const [form, setForm] = useState([
        { name: "", office: "", description: "", candidacies: [] },
      ])

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await axios.get("https://ironrest.herokuapp.com/likedineliel")
                setForm(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchJobs()
    },[])  

    console.log(form)


    return (
   


            <div className="container-fluid mt-5" id={styles.formContainer}>
                <div className="mb-5"><h2>JOB OFFERS</h2></div>


                {form.map((current) => {
                return (
                    <div className={`container mb-5 ${styles.formCardJobs}`}>
                    <div className="row mb-3 p-4 align-items-center">
                        <div className="col-3"><strong>{current.name}</strong></div>
                        <div className="col-8">{current.office}</div>
                        <div className="col-1"><button className={`btn btn-primary ${styles.buttonDel}`}>{'\u2665'}</button></div>
    
                        <div className="col-1"></div>
                        <div className="col-10 ">{current.description}</div>
                        <div className="col-1"></div>
                    </div>
    
                </div>
                )
            })
        }
        <Link to="/dashboard" className={`m-3 btn btn-primary ${styles.button}`}>VOLTAR</Link>
        </div>
    )
}