// httpClient.ts
import axios from 'axios';

// Abstracción del cliente HTTP
export async function httpGet(url: string) {
  const response = await axios.get(url);
  return response.data;
}
