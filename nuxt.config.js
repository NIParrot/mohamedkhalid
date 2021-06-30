/*!

 =========================================================
 * Nuxt Black Dashboard - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nuxt-black-dashboard
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
const webpack = require("webpack");

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'coronavirous',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css' }
        ],
        bodyAttrs: {
            class: '' // Add `white-content` class here to enable "white" mode.
        }
    },
    pwa: {
        meta: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
        manifest: {
            name: 'hisham',
            lang: 'en',
            display: 'standalone',
            description: 'hisham Pwa NUxt'
        }
    },

    // router: {
    //     linkExactActiveClass: 'active'
    // },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'assets/css/demo.css',
        'assets/css/nucleo-icons.css',
        'assets/sass/black-dashboard.scss',
        "~/node_modules/bootstrap/dist/css/bootstrap.css",
        "~/plugins/DataTables/datatables.min.css",
        '~/assets/animate.css',
        '@/assets/aos.css',
        '@/assets/bulma.min.css',
        '~/assets/style.scss'
    ],
    script: [
        '@/assets/vue-infinite-scroll.js',
        '@/assets/aos.js',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        `~/plugins/dashboard-plugin.js`,
        '~/plugins/direction-control',
        "~/plugins/bootstrap.min.js",
        "~/plugins/slimscroll.js",
        { src: '~/plugins/DataTables/datatables.min.js', mode: 'client' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'nuxt-i18n'
    ],
    // i18n: {
    //     locales: [{
    //             code: 'en',
    //             file: 'en.json'
    //         },
    //         {
    //             code: 'ar',
    //             file: 'ar.json'
    //         }
    //     ],
    //     lazy: true,
    //     langDir: 'lang/',
    //     defaultLocale: 'en',
    // },
    axios: {
        baseURL: "https://coronavirous.ninameserver.xyz/api"
    },

    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        vendor: ["jquery", "bootstrap"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        },
        babel: {
            plugins: [
                [
                    'component',
                    {
                        'libraryName': 'element-ui',
                        'styleLibraryName': 'theme-chalk'
                    }
                ]
            ]
        }
    }
}