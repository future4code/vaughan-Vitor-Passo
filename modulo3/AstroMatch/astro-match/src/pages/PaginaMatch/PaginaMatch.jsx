import { BASE_URL } from "../../constant/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { TelaMatch, Img, CardMatch } from "./styled";
const PaginaMatch = props => {
  const [listaMatch, setListaMatch] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then(response => {
        setListaMatch(response.data.matches);
      })
      .catch(error => {
        console.log(error.response);
        alert("Erro 404");
      });
  };

  const listMatch = listaMatch.map(match => {
    return (
      <TelaMatch key={match.id}>
        <CardMatch>
          <Img src={match.photo} alt="foto dos usuários" />
          <span>
            {match.name}
          </span>
        </CardMatch>
      </TelaMatch>
    );
  });

  return (
    <div>
      {listMatch}
    </div>
  );
};

export default PaginaMatch;
