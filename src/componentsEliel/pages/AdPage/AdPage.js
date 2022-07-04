import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../../componentsAdriano/Dashboard/styles.module.css";

export function AdPage() {
  const [data, setData] = useState([
    { name: "", office: "", description: "", candidacies: [] },
  ]);
  const [form, setForm] = useState([
    { name: "", office: "", description: "", candidacies: [] },
  ]);

  useEffect(() => {
    async function Vancacys() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/likedineliel"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    Vancacys();
  }, []);

  console.log(data);

  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="container-fluid mt-5" id={styles.formContainer}>
      <div>
        <h2>DASHBOARD</h2>
      </div>

      <div className="row">
        <div className="col-3">
          <Link to="/create" className={`btn btn-primary ${styles.button}`}>
            CRIE PERFIL
          </Link>
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>

        {data.map((current) => {
          return (
            <div
              className={`container col-sm-5 col-md-3 m-2 ${styles.formCard}`}
              key={current._id}
            >
              <div className="row">
                <h1 onChange={handleChange}>{current.name}</h1>
                <h2 onChange={handleChange}>{current.office}</h2>
                <p onChange={handleChange}>{current.description}</p>
                <Link to={`/edit/${current._id}`}>
                  <button className="btn btn-primary">
                    Editar Anúncio de Vaga!
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
