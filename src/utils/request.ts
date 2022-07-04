import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

// 注入 token
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = localStorage.getItem('token');
    if (token != null) {
      config.headers!.Authorization = `LuJunYao ${token}`;
    }
    return config;
  } catch (err: any) {
    throw new Error(err);
  }
};

class Http {
  // 单例模式
  private instance: AxiosInstance | null = null;
  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }
  private initHttp() {
    const http = axios.create({
      baseURL: 'http://119.45.163.156/empty-item',
      headers,
      withCredentials: true,
      timeout: 10000,
    });

    // 拦截器处理
    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );
    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );
    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private handleError(error: any) {
    const { status } = error;
    switch (status) {
      case StatusCode.InternalServerError: {
        console.log(error);
        break;
      }
      case StatusCode.Forbidden: {
        localStorage.setItem('token', '');
        break;
      }
      case StatusCode.Unauthorized: {
        localStorage.setItem('token', '');
        break;
      }
      case StatusCode.TooManyRequests: {
        break;
      }
    }
    return Promise.reject(error);
  }
}

export const http = new Http();
