import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'lasting',
            fileName: (format: string) => `index.${format}.js`,
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: ['vue', 'pinia'],
            output: {
                globals: {
                    lasting: "lasting"
                }
            }
        }
    }
})