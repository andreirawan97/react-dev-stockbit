import axios from "axios";
import { useCallback, useState } from "react";

type Param = {
  url: string;
  method?: "GET" | "POST";
};

export default function useLazyFetch<ResponseDataType>() {
  const [data, setData] = useState<ResponseDataType>();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback((param: Param) => {
    const { url, method = "GET" } = param;

    setLoading(true);

    if (method === "GET") {
      axios.get(url).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, []);

  return {
    fetchData,
    data,
    loading,
  };
}
