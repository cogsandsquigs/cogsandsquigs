import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte"],
    kit: {
        // Default SvelteKit options
        // target: "#svelte",
        adapter: adapter({
            // if true, will deploy the app using edge functions
            // (https://vercel.com/docs/concepts/functions/edge-functions)
            // rather than serverless functions
            edge: false,

            // an array of dependencies that esbuild should treat
            // as external when bundling functions
            external: ["canvas"],

            // if true, will split your app into multiple functions
            // instead of creating a single one for the entire app
            split: true,
        }),

        browser: {
            hydrate: true,
            router: false,
        },

        prerender: {
            default: false,
        },
    },

    preprocess: [preprocess({ postcss: true })],
};

export default config;
