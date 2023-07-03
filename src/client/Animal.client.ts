import axios, { AxiosInstance } from "axios";
import { Animal } from "@/model/Animal";

export class AnimalClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "https://animal-save-w8pb.onrender.com/api/animal",
      headers: {
        "content-type": "application/json",
      },
    });
  }

  public async save(animal: Animal): Promise<void> {
    try {
      return (await this.axiosClient.post(`/register`, animal)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async listAll(): Promise<Animal[]> {
    try {
      return (await this.axiosClient.get<Animal[]>(`/listall`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAllByCaregiver(id: number): Promise<Animal[]> {
    try {
      return (
        await this.axiosClient.get<Animal[]>(`/findAnimalByIdCaregiver/${id}`)
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findById(id: number): Promise<Animal> {
    try {
      return (await this.axiosClient.get<Animal>(`/findbyid${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async update(animal: any): Promise<void> {
    try {
      debugger;
      return (await this.axiosClient.put(`/update/${animal.id}`, animal)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async disable(id: number): Promise<void> {
    try {
      return (await this.axiosClient.put(`/disable/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
