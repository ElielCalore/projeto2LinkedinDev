import styles from "./styles.module.css"
import {useState} from "react"

export function FormCV () {


    const [form, setForm] = useState({
        name: "",
        about: "",
        other: "",

        debug: false,
        css: false,
        bootstrap: false,
        form: false,
        delete: false,
        mongo: false,
        github: false,
        humor: false,

        image: {}

    })

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleCheckbox(e) {

        e.target.checked === true? 
        setForm({...form, [e.target.name]: true}) : setForm({...form, [e.target.name]: false})     
    }

    function handleImage(e) {
        setForm({...form, image: e.target.files[0]})
        console.log("upload image")
    }

    async function handleSubmit() {

    }
    
    console.log(form.image)

    return(

    <div className="col-md-8 col-sm-12 col-lg-8 container mt-5" id={styles.formContainer}>    
        <form>

            <div className="mb-4">
                <div className="mb-4"><h2>Informações Pessoais</h2></div>
                <label htmlFor="photo" className="form-label"><h5>Adicione sua foto</h5></label>
                <input id="photo" onChange={handleImage} type="file" className="form-control"/>

            </div>

            <div className="mb-4">

                <label htmlFor="name-input" className="form-label"><h5>Nome completo: </h5></label>
                <input id={styles.nameInput} onChange={handleChange} type="text" name="name"  className="form-control mb-4" value={form.nome}/>

                <label htmlFor="about-input" className="form-label"><h5>Sobre mim: </h5></label>
                <textarea id="about-input" onChange={handleChange} type="text" name="about" className="form-control mb-4" value={form.sobre}/>
            </div>

            <div className="mb-4"><h2>Habilidades</h2></div>


            <div className="form-check mb-4">
                <div>
                    <label htmlFor="debug-input" className="form-check-label">bom em debugar</label> 
                    <input type="checkbox" onChange={handleCheckbox} name="debug" className="form-check-input" id="debug-input" value={form.debug}/>
                </div>

                <div>
                    <label htmlFor="css-input" className="form-check-label">css na unha </label> 
                    <input id="css-input" onChange={handleCheckbox} type="checkbox" name="css" className="form-check-input"  value={form.css}/>
                </div>

                <div>
                    <label htmlFor="bootstrap-input" className="form-check-label">decorou classes de bootstrap </label> 
                    <input id="bootstrap-input" onChange={handleCheckbox} type="checkbox" name="bootstrap" className="form-check-input"  value={form.bootstrap}/>
                </div>

                <div>
                    <label htmlFor="form-input" className="form-check-label">bom de formulario </label> 
                    <input id="form-input" onChange={handleCheckbox} type="checkbox" name="form" className="form-check-input"  value={form.form}/>
                </div>

                <div>
                    <label htmlFor="delete-input" className="form-check-label">sabe fazer o delete funcionar </label> 
                    <input id="delete-input" onChange={handleCheckbox} type="checkbox" name="delete" className="form-check-input"  value={form.delete}/>
                </div>

                <div>
                    <label htmlFor="mongo-input" className="form-check-label">manja de MongoDB </label> 
                    <input id="mongo-input" onChange={handleCheckbox} type="checkbox" name="mongo" className="form-check-input"  value={form.mongo}/>
                </div>

                <div>
                    <label htmlFor="github-input" className="form-check-label">bom de github </label> 
                    <input id="github-input" onChange={handleCheckbox} type="checkbox" name="github" className="form-check-input"  value={form.github}/>
                </div>

                <div>
                    <label htmlFor="humor-input" className="form-check-label">senso de humor </label> 
                    <input id="humor-input" onChange={handleCheckbox} type="checkbox" name="humor" className="form-check-input"  value={form.humor}/>
                </div>    
            </div>


            <div className="d-flex flex-column">
                
                <label htmlFor="other-input" className="form-label">Outras habilidades relevantes: </label>
                <input id={styles.otherInput} onChange={handleChange} type="text" name="other" className="form-control mb-4" value={form.other}/> 
            </div>

            <button className={`btn btn-primary ${styles.button}`}>ENVIAR</button>

        </form>
    </div>
    )

}