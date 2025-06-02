import { requestGetListProvince } from "@/api";
import { useEffect, useState } from "react"

const useGetProvince = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const getProvince = async () => {
      try {
        const response = await requestGetListProvince();
        setData(response);
      } catch (error) {

      }
    }

    getProvince();
  }, []);


  return [data]
}

export default useGetProvince;