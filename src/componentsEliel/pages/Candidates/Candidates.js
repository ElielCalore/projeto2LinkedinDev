import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Candidates() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function AllCandidates() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/linkedineliel/${id}`
        );
        setData([...response.data.candidacies]);
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
          <div>
            <h2> Nome completo:{currentElement.name} </h2>
            <h3>Sobre mim:{currentElement.about} </h3>
            <h4>Outras habilidades relevantes:{currentElement.other}</h4>
          </div>
        );
      })}
      <Link to="/ad-page" className="btn btn-warning">
        VOLTAR
      </Link>
    </div>
  );
}