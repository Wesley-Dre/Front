import axios, { AxiosPromise } from "axios"
import { CarroData } from "../interface/CarroData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://34.204.143.229:8080'

const fetchData = async (): AxiosPromise<CarroData[]> => {
    const response = await axios.get('${API_URL}/api/carro/listar');
    return response;
};
export function useCarroData(){
const query = useQuery({
    queryFn: fetchData,
    queryKey: ['carro-data'],
    retry:2
})
 
return {
    ...query,
    data: query.data?.data
}
}
