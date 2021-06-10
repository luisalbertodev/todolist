import { useState, useEffect } from "react";
import Axios from "axios";
import { BASE_URL } from "constant";

export const useFetch = (url) => {
  const [dataSource, setDataSource] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setDataSource(null);
    setError(null);
    const source = Axios.CancelToken.source();
    Axios.get(BASE_URL + url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        res.data && setDataSource(res.data);
      })
      .catch((err) => {
        console.log({ err });
        setLoading(false);
        setError("An error occurred..");
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { dataSource, loading, error };
};
