import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles.module.css";

export function Dashboard() {
  const [form, setForm] = useState([
    {
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

      vagas: [],

      // image: {}
    },
  ]);

  useEffect(() => {
    async function FetchCV() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/linkedinadriano/`
        );
        setForm(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchCV();
  }, []);

  function handleDelete(e) {
    const id = e._id;

    async function FetchDelete() {
      try {
        await axios.delete(
          `https://ironrest.herokuapp.com/linkedinadriano/${id}`
        );
        console.log("apaga");
      } catch (err) {
        console.log(err);
      }
    }
    FetchDelete();
  }

  return (
    <div className="container-fluid mt-5 mb-5" id={styles.formContainer}>
      <div>
        <h2>DASHBOARD</h2>
      </div>

      <div className="row">
        <div className="col-3">
          <Link to="/formCV" className={`btn btn-primary ${styles.button}`}>
            CRIE PERFIL
          </Link>
        </div>
        <div className="col-3"></div>
        <div className="col-3"></div>

        {form.map((current) => {
          return (
            <div
              className={`card-group col-sm-6 col-md-5 m-2 ${styles.formCard}`}
              key={current.about}
            >
              <div className="card">
                {/*<img src="..." className="card-img-top" alt="..."/>*/}
                <div className="card-body">
                  <h5 className="card-title">{current.name}</h5>
                  <div className="card-text d-flex justify-content-center">
                    <div>
                      <Link
                        to={`/EditFormCV/${current._id}`}
                        className={`btn btn-primary btn-sm ${styles.button}`}
                      >
                        EDITAR
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/Jobs/${current._id}`}
                        className={`btn btn-primary btn-sm ${styles.button}`}
                      >
                        VAGAS
                      </Link>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          handleDelete(current);
                        }}
                        to="/formCV"
                        className={`btn btn-primary btn-sm ${styles.buttonDel}`}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
