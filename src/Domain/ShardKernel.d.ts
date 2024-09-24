import {ProcessEnv} from 'process';

type Base64 = string;

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module 'process' {
  global {
    namespace NodeJS {
      interface process {
        env: ProcessEnv & {
          // add more environment variables and their types here
        };
      }
    }
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_USE_AUTH: 'none' | 'firebase';
      EXPO_PUBLIC_USE_EXTERNAL_AUTH_VALIDATOR: 'use' | 'none';
    }
  }
}
