import axios from "axios";
import { useEffect, useState } from "react";

type Param = {
  url: string;
  method?: "GET" | "POST";
};

export default function useFetch<ResponseDataType>(param: Param) {
  const { url, method = "GET" } = param;

  const [data, setData] = useState<ResponseDataType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (method === "GET") {
      axios.get(url).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, [method, url]);

  return {
    data,
    loading,
  };
}
