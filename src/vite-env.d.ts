/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GRAPH: string
  readonly VITE_APP_KEY_COOKIE_SESSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}