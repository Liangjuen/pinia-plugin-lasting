import type { PiniaPluginContext } from 'pinia'
declare module 'pinia' {
    interface DefineStoreOptionsBase<S, Store> {
        lasting?: LastingOptions
    }
}
export type Store = PiniaPluginContext['store']
export interface getStorageOptions {
    storage: Storage
    key: string
}
export interface LastingStrategy {
    storage?: Storage
    key?: string
    exclude?: string[]
}
export interface LastingOptions {
    enabled: boolean
    strategies?: LastingStrategy
}
export declare const updateStore: (strategy: LastingStrategy, store: Store) => void
export declare const getStore: (options: getStorageOptions) => any
declare const lasting: ({ options, store }: PiniaPluginContext) => any
export default lasting