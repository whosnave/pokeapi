import { useState, useEffect } from "react";
import axios from "axios";
import '../Axios/Axios.css'

const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataWithAxios = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        setData(response.data.results);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchDataWithAxios();
  }, []);

  return (
    <div>
      <div className="swiper">
        <ul>
          {data.map((pokemon, index) => (
            <li key={pokemon.name}>
              <img className="swiperimg"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt/>
              <p className="swBody">{pokemon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Axios;

