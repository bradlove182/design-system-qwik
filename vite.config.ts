import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import path from "path";

export default defineConfig(() => {
    return {
        build: {
            target: "es2020",
            lib: {
                entry: "./src/lib/index.ts",
                formats: ["es", "cjs"],
                fileName: (format) =>
                    `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
            },
        },
        resolve: {
            alias: [
                {
                    find: "@lib",
                    replacement: path.resolve(__dirname, "src/lib/index.ts"),
                },
                {
                    find: "@utils",
                    replacement: path.resolve(__dirname, "src/utils/index.ts"),
                },
            ],
        },
        plugins: [qwikVite()],
    };
});
