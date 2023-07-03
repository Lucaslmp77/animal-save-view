import axios, {AxiosInstance} from "axios";
import {Vaccination} from "@/model/Vaccination";
export class VaccinationClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://animal-save-w8pb.onrender.com/api/vaccination',
            headers: {
                'content-type' : 'application/json'
            }
        })
    }

    public async save(vaccination: Vaccination) : Promise<void> {
        try{
            return(await this.axiosClient.post(`/register`, vaccination)).data
        }
        catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Vaccination[]> {
        try {
            return(await this.axiosClient.get<Vaccination[]>(`/listall`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Vaccination> {
        try {
            return(await this.axiosClient.get<Vaccination>(`/findbyid/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async update(vaccination: Vaccination) : Promise<void> {
        try {
            return(await this.axiosClient.put(`/update/${vaccination.id}`, vaccination)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
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
}