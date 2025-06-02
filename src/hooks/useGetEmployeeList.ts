import { requestGetListEmployee } from "@/api";
import { useEffect, useState } from "react";

export interface IGetEmployeeList {
  page: number;
  pageSize: number;
  province: string;
  status: string;
  name: string;
  cb?: (loading: boolean) => void;
}

export const useGetEmployeeList = (params: IGetEmployeeList) => {
  const { page, pageSize, province, status, name, cb } = params;
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getEmployeeList = async () => {
      try {
        setLoading(true);
        cb?.(true);
        const response = await requestGetListEmployee(params);
        setData(response?.data);
        setTotal(response?.items);
        setLoading(false);
        cb?.(false);
      } catch (error) {
        setLoading(false);
        cb?.(false);
      }
    }

    getEmployeeList();
  }, [page, pageSize, province, status, name]);


  return {
    data,
    total,
    loading
  }
}