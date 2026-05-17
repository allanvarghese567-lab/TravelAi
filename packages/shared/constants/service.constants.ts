// apps/shared/constants/service.constants.ts
import {ServiceMeta,ServiceKey} from '@shared/index'

export class ServiceConstants {
  // Service Names
  static readonly AUTH_SERVICE = 'auth';
  static readonly LOCATION_SERVICE = 'location';
  static readonly ITINERARY_SERVICE = 'itinerary';
  static readonly TRIP_SERVICE = 'trip';
  static readonly RECOMMENDATION_SERVICE = 'recommendation';

  // Service Ports
  static readonly GATEWAY_PORT = 3000;
  static readonly AUTH_SERVICE_PORT = 3001;
  static readonly LOCATION_SERVICE_PORT = 3002;
  static readonly ITINERARY_SERVICE_PORT = 3003;
  static readonly RECOMMENDATION_SERVICE_PORT = 3004;

  // API Routes
  static readonly AuthRole ={
    user: 'user',
    admin: 'admin',
    guest: 'guest',
    vendor: 'vendor',
  }

  // API Routes
  static readonly AUTH_ROUTES = {
    SIGNUP: 'auth/signup',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    REFRESH: 'auth/refresh',
    VERIFY: 'auth/verify',
  };

  static readonly LOCATION_ROUTES = {
    SEARCH: 'locations/search',
    GET_DETAILS: 'locations/:id',
    CREATE: 'locations',
    UPDATE: 'locations/:id',
    DELETE: 'locations/:id',
    GET_ALL: 'locations',
  };

  static readonly ITINERARY_ROUTES = {
    GET_ALL: 'itineraries',
    GET_ONE: 'itineraries/:id',
    CREATE: 'itineraries',
    UPDATE: 'itineraries/:id',
    DELETE: 'itineraries/:id',
  };

  static readonly RECOMMENDATION_ROUTES = {
    GET: 'recommendations',
    GENERATE: 'recommendations/generate',
    TRENDING: 'recommendations/trending',
  };

  static readonly SERVICE_CONFIG : Record<ServiceKey, ServiceMeta> = {
    app: {
    title: 'Travel AI Platform',
    desc: 'Unified AI-powered travel planning platform',
  },

  auth: {
    title: 'Authentication Service',
    desc: 'Handles user login, registration, JWT authentication, and session management',
    version:'1.0',
  },

  itinerary: {
    title: 'Itinerary Service',
    desc: 'Generates and manages smart travel itineraries based on user preferences',
    version:'1.0',
  },

  location: {
    title: 'Location Service',
    desc: 'Provides location search, geocoding, and place intelligence',
    version:'1.0',
  },

  recommendation: {
    title: 'Recommendation Service',
    desc: 'AI-driven travel suggestions and personalization engine',
    version:'1.0',
  },

  trip: {
    title: 'Trip Service',
    desc: 'Manages trip creation, updates, and travel history',
    version:'1.0',
  },
  };
}