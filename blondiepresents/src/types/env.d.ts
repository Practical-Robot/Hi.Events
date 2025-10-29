declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_NAME: string;
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_STORAGE_URL: string;
    NEXT_PUBLIC_FACEBOOK_URL?: string;
    NEXT_PUBLIC_INSTAGRAM_URL?: string;
    NEXT_PUBLIC_TWITTER_URL?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string;
    NEXT_PUBLIC_GOOGLE_MAPS_KEY?: string;
    NEXT_PUBLIC_TIMEZONE: string;
    NEXT_PUBLIC_DATE_FORMAT: string;
    NEXT_PUBLIC_TIME_FORMAT: string;
  }
}