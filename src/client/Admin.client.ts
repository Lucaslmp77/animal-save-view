import {Admin} from "@/model/Admin";
import {AxiosInstance} from "axios";
import axios from "../auth"
import {pendings} from "@/model/Pending";
import {User} from "@/model/User";
export class AdminClient {

    private axiosClient: AxiosInstance;
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://animal-save-w8pb.onrender.com/api/admin',
            headers: {
                'content-type' : 'application/json'
            }
        })
    }

    public async save(admin: Admin) : Promise<void> {
        try {
            return(await this.axiosClient.post(`/register`, admin)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<Admin[]> {
        try {
            return (await this.axiosClient.get<Admin[]>(`/listall`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listUsers(): Promise<User[]> {
        try {
            return (await this.axiosClient.get<User[]>(`/listusers`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number): Promise<Admin> {
        try {
            return (await this.axiosClient.get<Admin>(`/findbyid/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAllPending(): Promise<pendings[]> {
        try {
            return (await this.axiosClient.get<pendings[]>(`/approves/pending`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAllApproved(): Promise<pendings[]> {
        try {
            return (await this.axiosClient.get<pendings[]>(`/approves/approved`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAllRejected(): Promise<pendings[]> {
        try {
            return (await this.axiosClient.get<pendings[]>(`/approves/rejected`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async updateStatusPendingToApproved(id: number): Promise<void> {
        try {
            return (await this.axiosClient.put(`/approved/user/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }
    public async updateStatusUserPendingToRejected(id: number): Promise<void> {
        try {
            return (await this.axiosClient.put(`/rejected/user/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}