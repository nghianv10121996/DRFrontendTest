import { IGetEmployeeList } from '@/hooks/useGetEmployeeList';
import api from './APIRequest';

export const requestGetListProvince = () => {
    return api.get("province")
}

export const requestGetListEmployee = (params: IGetEmployeeList) => {
    const { page, pageSize, province, status, name } = params;
    const prs = {
        _page: page,
        _per_page: pageSize,
        address: province,
        status,
        name: name,
    }
    return api.get(`employeeList`, prs)
}