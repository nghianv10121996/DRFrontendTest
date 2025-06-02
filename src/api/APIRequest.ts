import { convertObjectToParams, parseResponse } from '@/utils';

const BASE_URL: string = 'http://localhost:3000/';

type TParams = { [key: string] : any }
type TBody = TParams;

export class APIRequest {
  baseUrl: string = "";

  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  getUrl(path: string, params?: TParams) {
    let url = this.baseUrl + path;

    if (params) {
      url += `?${convertObjectToParams(params)}`;
    }

    return url;
  }

  getHeader() {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    return headers;
  }

  async get(path: string, params?: TParams) {
    const headers = this.getHeader();
    const url = this.getUrl(path, params);

    const response = await fetch(url, { headers });
    const data = response.json();
    return data;
  }

  async post(path: string, body: TParams) {
    const headers = this.getHeader();
    const url = this.getUrl(path);
    const opts: RequestInit = {
      headers,
      method: 'POST',
    };

    if (body) {
      opts.body = JSON.stringify(body);
    }

    const response = await fetch(url, opts);
    const data = await parseResponse(response);

    return data;
  }

  async put(path: string, body: TBody) {
    const headers = this.getHeader();
    const url = this.getUrl(path);
    const opts: RequestInit = {
      headers,
      method: 'PUT',
    };

    if (body) {
      opts.body = JSON.stringify(body);
    }

    const response = await fetch(url, opts);
    const data = await parseResponse(response);

    return data;
  }
}

export default new APIRequest();