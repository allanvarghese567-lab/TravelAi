import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { ServiceConstants } from '@shared/index';

@Injectable()
export class ProxyService {
  private services = {
    auth: process.env.SERVICE_URL_AUTH || (ServiceConstants && (ServiceConstants.AUTH_URL as any)) || 'http://auth-service:3000',
    location: process.env.SERVICE_URL_LOCATION || (ServiceConstants && (ServiceConstants.LOCATION_URL as any)) || 'http://location-service:3000',
    trip: process.env.SERVICE_URL_TRIP || (ServiceConstants && (ServiceConstants.TRIP_URL as any)) || 'http://trip-service:3000',
    itinerary: process.env.SERVICE_URL_ITINERARY || (ServiceConstants && (ServiceConstants.ITINERARY_URL as any)) || 'http://itinerary-service:3000',
    recommendation:
      process.env.SERVICE_URL_RECOMMENDATION || (ServiceConstants && (ServiceConstants.RECOMMENDATION_URL as any)) || 'http://recommendation-service:3000',
  } as Record<string,string>;

  private async request(method: 'get' | 'post' | 'put' | 'delete' | 'patch', base: string, path: string, data?: any, headers?: any) {
    const url = `${base}${path}`;
    const config: AxiosRequestConfig = { method, url, headers: headers || {}, data };
    try {
      const res = await axios.request(config);
      return res.data;
    } catch (err: any) {
      const status = err?.response?.status || 500;
      const message = err?.response?.data || err.message || 'Upstream error';
      throw new HttpException(message, status);
    }
  }

  // Auth
  authGet(path: string, headers?: any) {
    return this.request('get', this.services.auth, path, undefined, headers);
  }
  authPost(path: string, body?: any, headers?: any) {
    return this.request('post', this.services.auth, path, body, headers);
  }

  // Location
  locationGet(path: string, headers?: any) {
    return this.request('get', this.services.location, path, undefined, headers);
  }

  // Trip
  tripPost(path: string, body?: any, headers?: any) {
    return this.request('post', this.services.trip, path, body, headers);
  }
  tripGet(path: string, headers?: any) {
    return this.request('get', this.services.trip, path, undefined, headers);
  }
  tripPut(path: string, body?: any, headers?: any) {
    return this.request('put', this.services.trip, path, body, headers);
  }
  tripDelete(path: string, headers?: any) {
    return this.request('delete', this.services.trip, path, undefined, headers);
  }

  // Itinerary
  itineraryPost(path: string, body?: any, headers?: any) {
    return this.request('post', this.services.itinerary, path, body, headers);
  }
  itineraryGet(path: string, headers?: any) {
    return this.request('get', this.services.itinerary, path, undefined, headers);
  }

  // Recommendation
  recommendationGet(path: string, headers?: any) {
    return this.request('get', this.services.recommendation, path, undefined, headers);
  }
  recommendationPost(path: string, body?: any, headers?: any) {
    return this.request('post', this.services.recommendation, path, body, headers);
  }
}
