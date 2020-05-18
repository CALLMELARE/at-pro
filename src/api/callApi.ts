import config from '../site-config.json'

const API_ROOT = config.ROOT;

interface req {
  headers?: any,
  body?: any,
  method?: string,
}

const fetchApi = (apiPath: string, request: req = {}) => {
  const fullUrl = `${API_ROOT}/${apiPath}`;
  const { headers, body, method } = request;
  const customRequest: req = {};

  if (method) {
    customRequest.method = method.toUpperCase();
  }
  if (body) {
    customRequest.body = body;
  }
  if (headers) {
    const { contentType, auth } = headers;
    customRequest.headers = {};

    if (contentType) {
      customRequest.headers['Content-Type'] = contentType;
    }
    if (auth) {
      customRequest.headers.Authentication = auth;
    }
  }
  return fetch(fullUrl, customRequest);
};

export default fetchApi;
