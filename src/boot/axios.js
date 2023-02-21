import axios from 'axios';
import authRefreshInterceptor from 'axios-auth-refresh';
import { firebaseAuth } from 'boot/firebase';
import qs from 'qs';

const baseURL = `${process.env.API_HOST}/${process.env.API_VERSION}/`;
const contentType = {
  json: 'application/json',
  form: 'multipart/form-data'
};

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL,
  headers: {
    Accept: contentType.json,
    'Content-Type': contentType.json
  },
  withCredentials: true,
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  },
  transformResponse: [
    apiResponse => {
      try {
        if (apiResponse) {
          const parsedResponse = JSON.parse(apiResponse);
          const { data, meta, links } = parsedResponse;
          
          if (data) {
            if (meta || links) {
              return { data, meta, links };
            }
            return { data };
          }
          return parsedResponse;
        }
        return apiResponse;
      } catch (err) {
        // TODO: return object containing error and reason - parsing error
      }
    }
  ]
});

api.interceptors.request.use(async config => {
  const currentUser = firebaseAuth.currentUser;
  let result = true;
  if (currentUser) {
    result = await new Promise(resolve => {
      currentUser
        .getIdToken()
        .then(idToken => {
          config.headers.Authorization = idToken;
          resolve(true);
        })
        .catch(function (error) {
          // Handle error
          resolve(false);
        });
    });
  }
  return result && config;
});

const refreshToken = () => {
  // just resolving as the retried request will refesh the token inside request interceptor
  return new Promise(resolve => {
    return resolve();
  });
};

authRefreshInterceptor(api, refreshToken);

const formRequest = {
  post: (url, data) =>
    api.post(url, data, { 'Content-Type': contentType.form }),
  put: (url, data) => api.put(url, data, { 'Content-Type': contentType.form })
};

const request = {
  get: (url, params) => api.get(url, { params }),
  post: (url, body) => api.post(url, body),
  put: (url, body) => api.put(url, body),
  patch: (url, body) => api.patch(url, body),
  delete: (url, params) => api.delete(url, { params }),
  deleteWithData: (url, body) => api.delete(url, body)
};

const REQUEST_METHODS = Object.freeze({
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
  DELETEWITHDATA: 'deleteWithData'
});

// helper to build request data for post requests
const buildRequestData = (type, requestData) => {
  if (!type || !requestData) return null;
  const { id, ...attributes } = requestData;
  return {
    data: {
      type,
      id,
      attributes
    }
  };
};

export { request, formRequest, REQUEST_METHODS, buildRequestData };
