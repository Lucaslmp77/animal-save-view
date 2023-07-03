import axios, {AxiosInstance} from "axios";
import {Associate} from "@/model/Associate";

export class AssociateClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://animal-save-w8pb.onrender.com/api/associate',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async save(associate: Associate) : Promise<void> {
        try{
            return(await this.axiosClient.post(`/register`, associate)).data
        }
        catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Associate[]> {
        try {
            return(await this.axiosClient.get<Associate[]>(`/listall`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Associate> {
        try {
            return(await this.axiosClient.get<Associate>(`/findbyid/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async update(associate: any) : Promise<void> {
        try {
            return(await this.axiosClient.put(`/update/${associate.id}`, associate)).data
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