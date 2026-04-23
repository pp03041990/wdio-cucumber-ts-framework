import { User } from "../../types/user.types";
import { apiRequest } from "../client/apiClient";

export class UserService {
  public static async getUser(id: number): Promise<User | null> {
    const response = await apiRequest<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (response.status !== "200OK") return null;
    else return response.data;
  }
}
