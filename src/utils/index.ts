export function convertObjectToParams(obj: { [key: string]: any }) {
  return Object
    .keys(obj)
    .reduce((arr: string[], key) => (
      arr.concat(`${key}=${encodeURIComponent(obj[key])}`)
    ), [])
    .join('&');
}

class HttpError extends Error {
  status: string;
  response: any;

  constructor(message: string, status: string, response: any) {
    super(message);

    this.name = 'HttpError';
    this.status = status;
    this.response = response;
  }
}

export async function parseResponse(response: any) {
  let data = {};

  try {
    data = await response.json();
  } catch (err) { /* */ }

  if (!response.ok) {
    throw new HttpError(data?.message, response.status, data);
  }

  return data;
}
