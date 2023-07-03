import axios, {AxiosInstance} from "axios";
import {Task} from "@/model/Task";
import {Provider} from "@/model/Provider";

export class TaskClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://animal-save-w8pb.onrender.com/api/task',
            headers: {
                'content-type' : 'application/json'
            }
        })
    }

    public async save(task: any) : Promise<void> {
        try{
            return(await this.axiosClient.post(`/register`, task)).data
        }
        catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Task[]> {
        try {
            return(await this.axiosClient.get<Task[]>(`/listall`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findById(id: number) : Promise<Task> {
        try {
            return(await this.axiosClient.get<Task>(`/findbyid/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findTasksActives() : Promise<Task[]> {
        try {
            return(await this.axiosClient.get<Task[]>(`/actives`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findTaskByIdProvider(id:number): Promise<Task[]> {
        try {
            return(await this.axiosClient.get<Task[]>(`/findTaskByIdProvider/${id}`)).data
        }
        catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async update(task: any) : Promise<void> {
        try {
            return(await this.axiosClient.put(`/update/${task.id}`, task)).data
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