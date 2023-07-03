import axios, {AxiosInstance} from "axios";
import {Caregiver} from "@/model/Caregiver";

export class CaregiverClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://animal-save-w8pb.onrender.com/api/caregiver',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(caregiver: Caregiver) : Promise<void> {
        try{
            return(await this.axiosClient.post(`/register`, caregiver)).data
        }
        catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Caregiver[]> {
        try {
            return(await this.axiosClient.get<Caregiver[]>(`/listall`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Caregiver> {
        try {
            return(await this.axiosClient.get<Caregiver>(`/findbyid/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async update(caregiver: any) : Promise<void> {
        try {
            return(await this.axiosClient.put(`/update/${caregiver.id}`, caregiver)).data
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