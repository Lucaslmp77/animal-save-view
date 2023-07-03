import axios, {AxiosInstance} from "axios";
import {Occurrences} from "@/model/Occurrences";
import {ocurrencia} from "@/views/Modal.vue";

export class OcurrencesClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://animal-save-w8pb.onrender.com/api/occurrence',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(occurrences: Object) : Promise<void> {
        try{
            return(await this.axiosClient.post(`/register`, occurrences)).data
        }
        catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<Occurrences[]> {
        try {
            // Criar uma instância separada do Axios sem o cabeçalho de autorização
            const axiosWithoutToken = axios.create({
                baseURL: 'https://animal-save-w8pb.onrender.com/api/occurrence',
                headers: {
                    'Content-type': 'application/json'
                }
            });

            return (await axiosWithoutToken.get<Occurrences[]>(`/listall`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async findById(id: number) : Promise<Occurrences> {
        try {
            return(await this.axiosClient.get<Occurrences>(`/findbyid/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async update(occurrences: ocurrencia) : Promise<void> {
        try {
            // Criar uma instância separada do Axios sem o cabeçalho de autorização
            const axiosWithoutToken = axios.create({
                baseURL: 'http://localhost:8080/api/occurrence',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            return (await axiosWithoutToken.put(`/update/${occurrences.id}`, occurrences)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }


    public async disable(id: number) : Promise<void> {
        try {
            return(await this.axiosClient.put(`/disable/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async respondToOccurrence(id: number): Promise<void> {
        try {
            return(await this.axiosClient.put(`/respond/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

}