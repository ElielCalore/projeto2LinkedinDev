import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function Candidates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function AllCandidates() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/linkedineliel"
        );

        setData([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }

    AllCandidates();
  }, []);

  return (
    <div className="col-md-8 col-sm-12 col-lg-8 container mt-5 mb-5">
      {data.map((currentElement) => {
        return (
          <div className="mb-4">
            <div className="mb-4">
              <h2>Informações Pessoais</h2>
              {currentElement.candidacies.map((candidates) => {
                return (
                  <div>
                    <h2> Nome completo:{candidates.name} </h2>
                    <h3>Sobre mim:{candidates.about} </h3>
                    <h4>Outras habilidades relevantes:{candidates.other}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <Link to="/ad-page" className="btn btn-warning">
        VOLTAR
      </Link>
    </div>
  );
}
