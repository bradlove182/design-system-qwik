import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsConfigPaths from "vite-tsconfig-paths";

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
        plugins: [qwikVite(), tsConfigPaths()],
    };
});
