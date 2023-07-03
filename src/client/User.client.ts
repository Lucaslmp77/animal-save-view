import axios, { AxiosInstance } from "axios";
import { LoginUser } from "@/model/Login";
import { Token } from "@/model/Token";
import { User } from "@/model/User";
import { Associate } from "@/model/Associate";
import { Caregiver } from "@/model/Caregiver";
import { Provider } from "@/model/Provider";

export class UserClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "https://animal-save-w8pb.onrender.com/api/user",
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  // a client User precisa ser trabalhada nela, pois envolve autenticação
  public async login(login: LoginUser): Promise<Token> {
    try {
      return (await this.axiosClient.post(`/login`, login)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findById(id: number): Promise<User> {
    try {
      return (await this.axiosClient.get<User>(`/findbyid/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAssociateByIdUser(id: number): Promise<Associate> {
    try {
      return (await this.axiosClient.get(`/findAssociateByIdUser/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findCaregiverByIdUser(id: number): Promise<Caregiver> {
    try {
      return (await this.axiosClient.get(`/findCaregiverByIdUser/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findProviderByIdUser(id: number): Promise<Provider> {
    try {
      return (await this.axiosClient.get(`/findProviderByIdUser/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async newPassword(newPassword: string, id: number): Promise<void> {
    try {
      return (await this.axiosClient.put(`/new/password/${id}`, newPassword))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
