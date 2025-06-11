/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY_OPENAI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}