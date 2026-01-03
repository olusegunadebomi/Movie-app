/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly VITE_OMDB_API_KEY: string;
  readonly VITE_OMDB_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
