import * as process from 'node:process';

export const DEFAULT_STORAGE_SESSION_KEY = 'storage_session';
export const DEFAULT_STORAGE_ID_TOKEN_KEY = 'storage_id_token';

export const EXPO_PUBLIC_USE_AUTH = process.env.EXPO_PUBLIC_USE_AUTH;
export const EXPO_PUBLIC_USE_EXTERNAL_AUTH_VALIDATOR = process.env.EXPO_PUBLIC_USE_EXTERNAL_AUTH_VALIDATOR;
