// Cuando el componente sea montado este CH va a realizar
// una peticion HTTP a un endpoint [variable]
// y retornara la información de dicha petición, si la petición está en progreso
// y si hubo un error

import { useState, useEffect } from "react";
import { API } from "../API";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async (endpoint) => {
    try {
      const { data } = await API.post(endpoint);
      setData(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return [data, loading, error];
};
