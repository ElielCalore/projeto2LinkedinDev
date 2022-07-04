import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div>
      <div>
        <Link to={"/create"}>
          <button className="btn btn-primary">Anunciar Vaga!</button>
        </Link>
      </div>
      <div>
        {data.map((current) => {
          console.log(current);
          return (
            <div>
              <h1 onChange={handleChange}>{current.name}</h1>
              <h2 onChange={handleChange}>{current.office}</h2>
              <p onChange={handleChange}>{current.description}</p>
              <Link to={`/edit/${current._id}`}>
                <button className="btn btn-primary">
                  Editar Anúncio de Vaga!
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
