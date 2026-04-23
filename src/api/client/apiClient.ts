import { APIResponse } from "../../types/api.types";

export async function apiRequest<T>(url: string): Promise<APIResponse<T>> {
  const response = await fetch(url);
  return await response.json();
}
