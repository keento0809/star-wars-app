import axios, { AxiosRequestHeaders, Method, type AxiosInstance } from "axios";

type FetcherProps<T> = {
  url: string;
  method?: Method;
  data?: T;
  headers?: AxiosRequestHeaders;
  transformData?: boolean;
};

type FetcherResponse<T> = {
  data: T;
  status: number;
};

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Configuration for authentication token
let config = {
  authToken: "",
};

export const fetcher = async <T>({
  url,
  method = "GET",
  data,
  headers,
  transformData,
}: FetcherProps<T>): Promise<FetcherResponse<T>> => {
  // TODO: Add auth later
  //   // Transform request data if necessary
  //   if (data && transformData) {
  //     transformRequestData(data);
  //   }

  //   // Retrieve session information
  //   let session = await getSession();
  //   if (!session) {
  //     session = await getServerSession(authOptions);
  //   }

  //   // Set the authentication token if the session is available
  //   if (session) {
  //     config.authToken = session.user.jwt;
  //   }

  try {
    const response = await apiClient({
      url,
      method,
      headers: {
        "Content-type": "application/json",
        // ...(config.authToken && { Authorization: `Bearer ${config.authToken}` }),
        ...headers,
      },
    });

    if (!response.data) {
      throw new Error(`Data is empty`);
    }

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;
      throw new Error(`Failed to fetch: ${errorMessage}`);
    }

    throw new Error(`Failed to fetch data: ${error}`);
  }
};
