/// <reference path="node_modules/@types/jquery/index.d.ts" />
/// <reference path="node_modules/@types/underscore/index.d.ts" />
/// <reference path="node_modules/@types/es6-promise/index.d.ts" />
/// <reference path="firebase.d.ts" />
export declare class ShopifyClientConfigFirebase extends Object {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    storageBucket: string;
    messagingSenderId?: string;
    customToken?: string;
    idToken?: string;
    user?: any;
}
export declare class ShopifyClientConfigShopify extends Object {
    apiKey: string;
    microserviceAuthBaseUrl: string;
    protocol: string;
    shop: string;
    shopName: string;
}
export declare class ShopifyClientConfig extends Object {
    appName: string;
    firebase: ShopifyClientConfigFirebase;
    shopify: ShopifyClientConfigShopify;
    debug: boolean;
}
export declare class Api {
    config: ShopifyClientConfig;
    apiBaseUrl: string;
    constructor(config: ShopifyClientConfig, apiBaseUrl: string);
    /**
     * API calls are based on tthis bindings: https://github.com/MONEI/Shopify-api-node
     * But wrapped with or own microserive: https://git.mediamor.de/jumplink.eu/microservice-shopify
     */
    call(resource: string, method: string, params: any, callback: (error?: any, data?: any) => void): void;
}
export declare class ShopifyClient extends Api {
    firebase: firebase.app.App;
    ready: boolean;
    constructor(config: ShopifyClientConfig, apiBaseUrl: string);
    /**
     * Identify if a webpage is being loaded inside an iframe or directly into the browser window
     * @see http://stackoverflow.com/a/326076
     */
    inIframe(): boolean;
    /**
     * Chjeck if SDK is ready
     */
    isReady(): boolean;
    /**
     * Get the values from URL GET parameters
     *
     * @see http://stackoverflow.com/a/1099670
     */
    getQueryParams(qs: string): any;
    initEmbeddedSDK(protocol: string, shop: string, callback: (error?: any, data?: any) => void): any;
    /**
     * Init Shopify Embedded App SDK or redirect to the Shopify App Admin Page
     *
     * @see https://help.shopify.com/api/sdks/embedded-app-sdk/initialization
     */
    initShopify(protocol: string, shop: string, shopName: string, callback: (error?: any, data?: any) => void): void;
    initFirebase(): any;
    /**
     * Get CURRENT_LOGGED_IN_SHOP from CURRENT_LOGGED_IN_SHOP.myshopify.com
     */
    getShopName(shop: string): string;
    /**
     * Get the shop domain e.g. CURRENT_LOGGED_IN_SHOP.myshopify.com from the shop name e.g. CURRENT_LOGGED_IN_SHOP
     */
    getShop(shopName: string): string;
    /**
     * Set the shop domain and shop name by the shop domain in this.config.shopify
     */
    setShop(shop: string): void;
    /**
     * Set the shop domain and shop name by the shop name in this.config.shopify
     */
    setShopName(shopName: string): void;
    /**
     * Initiates the sign-in flow using Shopify oauth sign in
     *
     */
    getAccess(shopName: string): void;
    initApi(shopName: string, firebaseIdToken: string, cb: (error: any, data?: any) => void): void;
    /**
     * Get the Access tokens for shopify and firebase if these have already been set
     * Otherwise get access using this.getAccess with redirections
     *
     */
    signIn(shopName: string, callback: (error?: any, data?: any) => void): void;
    singOut(accessToken: string, callback: (error?: any, data?: any) => void): void;
    /**
     * API calls are based on tthis bindings: https://github.com/MONEI/Shopify-api-node
     */
    api(resource: string, method: string, params: any, callback: (error?: any, data?: any) => void): void;
}
export declare class VideoAPI extends Api {
    config: ShopifyClientConfig;
    constructor(config: ShopifyClientConfig, apiBaseUrl: string, callback: any);
    api(resource: any, method: any, params: any, callback: any): any;
}
