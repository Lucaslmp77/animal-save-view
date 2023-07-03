import axios, {AxiosInstance} from "axios";
import {Address} from "@/model/Address";

export class AddressClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://animal-save-w8pb.onrender.com/api/address',
            headers: {
                'content-type' : 'application/json'
            }
        })
    }

    public async save(address: Address) : Promise<void> {
        try{
            return(await this.axiosClient.post(`/register`, address)).data
        }
        catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Address[]> {
        try {
            return(await this.axiosClient.get<Address[]>(`/listall`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Address> {
        try {
            return(await this.axiosClient.get<Address>(`/findbyid/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async update(address: Address) : Promise<void> {
        try {
            return(await this.axiosClient.put(`/update/${address.id}`, address)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}