
// --------------------
// Request: /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_eAIXxFjGLW)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/paths.mjs ($id_H9duAcIsFo)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/css.mjs ($id_89b97MJmrE)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs ($id_EviSavUWra)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/root-component.mjs ($id_BRAQOzjvms)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/app-component.mjs ($id_bmYmgYQY1l)
// --------------------
const $id_SCPTyPkgXQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/components.plugin.mjs ($id_2mFpTqVjFR)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /pages/404.vue?macro=true ($id_wt0iNdA5Wu)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /components/Card.vue ($id_JDqv8pOB1u)
// - /pages/event.vue?macro=true ($id_362bnXc8ls)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/404.vue ($id_WR0M2zDvVc)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/event.vue ($id_ZEJJ5zjuGh)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_DFcXpE295m)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/layouts.mjs ($id_oxghfohTLP)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /layouts/default.vue ($id_dononVQSck)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_YPBhX5dq3F = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// Dependencies: 

// --------------------
const $id_eAIXxFjGLW = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/paths.mjs
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// --------------------
const $id_H9duAcIsFo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"}],"style":[],"script":[{"src":"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"}]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/paths.mjs ($id_H9duAcIsFo)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_YU3gYOEqyI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/components.plugin.mjs ($id_2mFpTqVjFR)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /components/Card.vue ($id_JDqv8pOB1u)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// --------------------
const $id_NpJ0d20vMd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/hookable/dist/index.mjs ($id_osgRxHGQwS)
// - /node_modules/unctx/dist/index.mjs ($id_pWnKLdtXja)
// --------------------
const $id_4GnUEZ7ifE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.use();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_osgRxHGQwS = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_pWnKLdtXja = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// --------------------
const $id_sGenmuNLlo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_UzRZUO1GKq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt), '$PNC7wCqOwp');
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// Dependencies: 

// --------------------
const $id_aSmmIHQt8x = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_1baiIWALJh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_31ETNgPfBU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_AGPfGxS2fu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_fYchCJb7XZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_bBQ8Yk34eC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error, '$bWWAMK0bSA');
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_QfWuTouFBP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = __vite_ssr_import_1__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, '$Y1nhoWDLED');
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(request, {
    ...opts,
    lazy: true
  }, autoKey, '$UrmC2vrBKq');
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/cookie-es/dist/index.mjs ($id_9JdSYd7S59)
// - /node_modules/h3/dist/index.mjs ($id_V9fe1no0d6)
// - /node_modules/destr/dist/index.mjs ($id_A9FezTYJBC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_URtEHTJ6vX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_9JdSYd7S59 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_V9fe1no0d6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_A9FezTYJBC = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_xIZrp1mIW8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_V9fe1no0d6)
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_202QqPjMtu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// --------------------
const $id_Fhvn5egKy1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /pages/404.vue?macro=true ($id_wt0iNdA5Wu)
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /components/Card.vue ($id_JDqv8pOB1u)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/404.vue ($id_WR0M2zDvVc)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /components/Nav.vue ($id_mEigpq54S5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_6yHtfHy3cx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_2__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_tzUUgT5kx6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_hSsGoupXYm)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BOqVBAGCOv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// Dependencies: 

// --------------------
const $id_hSsGoupXYm = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/css.mjs
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// Dependencies: 

// --------------------
const $id_89b97MJmrE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/components.plugin.mjs ($id_2mFpTqVjFR)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// --------------------
const $id_EviSavUWra = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs ($id_EviSavUWra)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_mHG7oNEQOP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs ($id_EviSavUWra)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_2mFpTqVjFR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const components = {}

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
})
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs ($id_EviSavUWra)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/defu/dist/defu.mjs ($id_16rZclLIWW)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_5vEgA2Fgrh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_wDImTp8t2G = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 

// --------------------
const $id_16rZclLIWW = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs ($id_EviSavUWra)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/meta.config.mjs ($id_lDSN2a105W)
// --------------------
const $id_omUDQe4IGe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_sqKdb79FW5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 

// --------------------
const $id_lDSN2a105W = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"}],"style":[],"script":[{"src":"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"}]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs ($id_EviSavUWra)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// - /node_modules/h3/dist/index.mjs ($id_V9fe1no0d6)
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/router.options.mjs ($id_eDfNBsdIJm)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/middleware.mjs ($id_9dV260oVIp)
// --------------------
const $id_oJCXe6nyyh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// --------------------
const $id_X8FM3AG1sA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_gPQzqsnHwc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_acUmhqj8VN = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /pages/404.vue?macro=true ($id_wt0iNdA5Wu)
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /pages/event.vue?macro=true ($id_362bnXc8ls)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/404.vue ($id_WR0M2zDvVc)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/event.vue ($id_ZEJJ5zjuGh)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// --------------------
const $id_NYS6RIyZKQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/404.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/create.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/event.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/update/[id].vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/user/login.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/user/register.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "404",
    path: "/:catchAll(.*)*",
    file: "/Users/philipperobinet/Documents/NuxtJS/troov/pages/404.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/404.vue')
  },
  {
    name: "create",
    path: "/create",
    file: "/Users/philipperobinet/Documents/NuxtJS/troov/pages/create.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/create.vue')
  },
  {
    name: "event",
    path: "/event",
    file: "/Users/philipperobinet/Documents/NuxtJS/troov/pages/event.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/event.vue')
  },
  {
    name: "index",
    path: "/",
    file: "/Users/philipperobinet/Documents/NuxtJS/troov/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "update-id",
    path: "/update/:id",
    file: "/Users/philipperobinet/Documents/NuxtJS/troov/pages/update/[id].vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/update/[id].vue')
  },
  {
    name: "user-login",
    path: "/user/login",
    file: "/Users/philipperobinet/Documents/NuxtJS/troov/pages/user/login.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/user/login.vue')
  },
  {
    name: "user-register",
    path: "/user/register",
    file: "/Users/philipperobinet/Documents/NuxtJS/troov/pages/user/register.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/user/register.vue')
  }
];
}


// --------------------
// Request: /pages/404.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_wt0iNdA5Wu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "404",
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "container" }, _attrs))}><div class="texte-center my-5"><h1>Nous ne trouvons pas votre page</h1>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "btn btn-primary mt-5"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Retour \xE0 la page d&#39;accueil`);
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode("Retour \xE0 la page d'accueil")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/404.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /pages/404.vue?macro=true ($id_wt0iNdA5Wu)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /components/Card.vue ($id_JDqv8pOB1u)
// - /pages/event.vue?macro=true ($id_362bnXc8ls)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/404.vue ($id_WR0M2zDvVc)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/event.vue ($id_ZEJJ5zjuGh)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /layouts/default.vue ($id_dononVQSck)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_shX6HK8fbb = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/404.vue?macro=true ($id_wt0iNdA5Wu)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /components/Card.vue ($id_JDqv8pOB1u)
// - /pages/event.vue?macro=true ($id_362bnXc8ls)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/404.vue ($id_WR0M2zDvVc)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/event.vue ($id_ZEJJ5zjuGh)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /components/Nav.vue ($id_mEigpq54S5)
// - /layouts/default.vue ($id_dononVQSck)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_u7hjwQB3Fl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/create.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/create.vue?vue&type=style&index=0&scoped=true&lang.css ($id_R7S4rLLSur)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_2ZhLjEmLe5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Form/Textarea.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "create",
  setup(__props, { expose }) {
    expose();
    const cookie = __vite_ssr_import_0__.useCookie("troov-id");
    const router = __vite_ssr_import_0__.useRouter();
    const errorMessage = __vite_ssr_import_5__.ref(null);
    const event = __vite_ssr_import_5__.reactive({
      title: "",
      description: "",
      dateEvent: "",
      location: ""
    });
    const createEvent = async () => {
      __vite_ssr_import_6__.default.post("/event", {
        title: event.title,
        description: event.description,
        dateEvent: event.dateEvent,
        location: event.location,
        userId: cookie.value
      }).then((response) => {
        console.log(response);
        event.title = "";
        event.description = "";
        event.dateEvent = "";
        event.location = "";
        router.push("/event");
      }).catch((error) => {
        console.error(error.response.data);
        errorMessage.value = error.response.data;
      });
    };
    const __returned__ = { cookie, router, errorMessage, event, createEvent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default;
  const _component_FormTextarea = __vite_ssr_import_2__.default;
  const _component_nuxt_link = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "container" }, _attrs))} data-v-40a374b5><div class="text-center my-5" data-v-40a374b5><h1 data-v-40a374b5>Cr\xE9er un \xE9v\xE9nement</h1><hr data-v-40a374b5></div><div class="container my-5 pt-5" data-v-40a374b5><div class="row" data-v-40a374b5><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-40a374b5><div class="card border-0 shadow" data-v-40a374b5><div class="card-body" data-v-40a374b5><div class="text-center mb-5" data-v-40a374b5><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16" data-v-40a374b5><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" data-v-40a374b5></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" data-v-40a374b5></path></svg></div><form data-v-40a374b5>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.title,
    "onUpdate:modelValue": ($event) => $setup.event.title = $event,
    type: "text",
    label: "Titre",
    id: "title"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.location,
    "onUpdate:modelValue": ($event) => $setup.event.location = $event,
    type: "text",
    label: "O\xF9 se situe l'\xE9v\xE9nement",
    id: "location"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.dateEvent,
    "onUpdate:modelValue": ($event) => $setup.event.dateEvent = $event,
    type: "date",
    label: "Quelle est la date de l'\xE9v\xE9nement",
    id: "dateEvent"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormTextarea, {
    modelValue: $setup.event.description,
    "onUpdate:modelValue": ($event) => $setup.event.description = $event,
    label: "Description",
    id: "description"
  }, null, _parent));
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-40a374b5>${__vite_ssr_import_8__.ssrInterpolate($setup.errorMessage)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="text-center mt-3" data-v-40a374b5><button class="btn btn-primary" data-v-40a374b5> Envoyer </button>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, {
    class: "nav-link",
    to: "/user/login"
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vous avez d\xE9j\xE0 un compte ?`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Vous avez d\xE9j\xE0 un compte ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/create.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-40a374b5"], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/create.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Form/Input.vue
// Parents: 
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_u6x9vuREvZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  __name: 'Input',
  props: {
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
    require: true,
  },
  id: {
    type: String,
    default: "",
    requier: true,
  },
},
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
  expose();

const props = __props





const __returned__ = { props, emit, ref: __vite_ssr_import_0__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "form-floating my-4 py-2" }, _attrs))
  }><input${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      id: $props.id,
      value: $props.modelValue
    }, _ctx.$attrs, {
      class: "form-control",
      placeholder: $props.label
    }))
  }>`)
  if ($props.label) {
    _push(`<label${
      __vite_ssr_import_2__.ssrRenderAttr("for", $props.id)
    }>${
      __vite_ssr_import_2__.ssrInterpolate($props.label)
    }</label>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Form/Input.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/components/Form/Input.vue"]]);
}


// --------------------
// Request: /components/Form/Textarea.vue
// Parents: 
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /components/Form/Textarea.vue?vue&type=style&index=0&scoped=true&lang.css ($id_Keo3gcRaV7)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_H91K3lp7jd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  __name: 'Textarea',
  props: {
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
    require: true,
  },
  id: {
    type: String,
    default: "",
    requier: true,
  },
},
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
  expose();

const props = __props





const __returned__ = { props, emit, ref: __vite_ssr_import_0__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0

  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "form-floating my-4 py-2" }, _attrs))
  } data-v-e287bf0c><textarea${
    __vite_ssr_import_2__.ssrRenderAttrs(_temp0 = __vite_ssr_import_1__.mergeProps({
      id: $props.id,
      value: $props.modelValue
    }, _ctx.$attrs, {
      class: "form-control text",
      placeholder: $props.label
    }), "textarea")
  } data-v-e287bf0c>${
    __vite_ssr_import_2__.ssrInterpolate(("value" in _temp0) ? _temp0.value : "")
  }</textarea>`)
  if ($props.label) {
    _push(`<label${
      __vite_ssr_import_2__.ssrRenderAttr("for", $props.id)
    } data-v-e287bf0c>${
      __vite_ssr_import_2__.ssrInterpolate($props.label)
    }</label>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Form/Textarea.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Form/Textarea.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-e287bf0c"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/components/Form/Textarea.vue"]]);
}


// --------------------
// Request: /components/Form/Textarea.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// Dependencies: 

// --------------------
const $id_Keo3gcRaV7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.text[data-v-e287bf0c] {\n  height: 150px;\n}\n";
}


// --------------------
// Request: /node_modules/axios/index.js
// Parents: 
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /pages/event.vue?macro=true ($id_362bnXc8ls)
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/create.vue ($id_kQLTPFB8yW)
// - /pages/event.vue ($id_ZEJJ5zjuGh)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /pages/user/register.vue ($id_ublemiS0hw)
// - /components/Nav.vue ($id_mEigpq54S5)
// Dependencies: 

// --------------------
const $id_mg2sFjNRNK = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/axios/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/axios/index.js\".")
  })


// --------------------
// Request: /pages/create.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/create.vue?macro=true ($id_2ZhLjEmLe5)
// - /pages/create.vue ($id_kQLTPFB8yW)
// Dependencies: 

// --------------------
const $id_R7S4rLLSur = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.error-message[data-v-40a374b5] {\n  color: red;\n  font-style: italic;\n  font-size: small;\n}\n";
}


// --------------------
// Request: /pages/event.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /components/Card.vue ($id_JDqv8pOB1u)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_362bnXc8ls = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Card.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");



const _sfc_main = {
  __name: 'event',
  setup(__props, { expose }) {
  expose();

let datas = __vite_ssr_import_2__.ref([]);

async function getUser() {
  try {
    const response = await __vite_ssr_import_1__.default.get("/event");
    datas.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
getUser();

const __returned__ = { datas, getUser, axios: __vite_ssr_import_1__.default, ref: __vite_ssr_import_2__.ref, reactive: __vite_ssr_import_2__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "container" }, _attrs))}><div class="text-center my-5"><h1>Liste des événements</h1><hr></div><div class="row"><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.datas, (data, index) => {
    _push(`<div class="col-lg-4 col-md-6 col-sm-12">`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Card, { data: data }, null, _parent))
    _push(`</div>`)
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/event.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/pages/event.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Card.vue
// Parents: 
// - /pages/event.vue?macro=true ($id_362bnXc8ls)
// - /pages/event.vue ($id_ZEJJ5zjuGh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_JDqv8pOB1u = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  __name: 'Card',
  props: {
  data: {
    type: Object,
    required: true,
  },
},
  setup(__props, { expose }) {
  expose();

const props = __props

const cookie = __vite_ssr_import_0__.useCookie("troov-id");


const event = __vite_ssr_import_2__.ref(props.data);

const __returned__ = { cookie, props, event, ref: __vite_ssr_import_2__.ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_1__.default

  _push(`<div${
    __vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "card border-secondary mb-5 shadow-sm" }, _attrs))
  }><div class="card-header"><h2>${
    __vite_ssr_import_4__.ssrInterpolate($props.data.title)
  }</h2></div><div class="card-body"><div class="card-text"><p>Description: ${
    __vite_ssr_import_4__.ssrInterpolate($props.data.description)
  }</p><p>Date: ${
    __vite_ssr_import_4__.ssrInterpolate($props.data.dateEvent)
  }</p><p>Lieu: ${
    __vite_ssr_import_4__.ssrInterpolate($props.data.location)
  }</p></div>`)
  if ($setup.cookie === $props.data.userId) {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nuxt_link, {
      to: `/update/${$setup.event._id}`,
      class: "btn btn-outline-warning rounded-pill float-end"
    }, {
      default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(` Modifier `)
        } else {
          return [
            __vite_ssr_import_3__.createTextVNode(" Modifier ")
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`</div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Card.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/components/Card.vue"]]);
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_SqnmXgZXcZ)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_XdcCQB7w7V = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<!--[--><div data-v-2a183b29><div class="headImg" style="${__vite_ssr_import_2__.ssrRenderStyle({"background-image":"url('../assets/img/bg.jpeg')"})}" data-v-2a183b29><div class="head-overlay d-flex justify-content-center align-items-center" data-v-2a183b29><div class="singleCol container text-center" data-v-2a183b29><h1 data-v-2a183b29>Bienvenue sur Troov~Test</h1><p class="lead" data-v-2a183b29><strong data-v-2a183b29> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet dolore praesentium quia accusamus, fugit officia nam minima cum totam nihil inventore. </strong></p>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: "/event",
    class: "btn btn-outline-light"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<strong data-v-2a183b29${_scopeId}>Nos évenements</strong>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("strong", null, "Nos évenements")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div></div><main data-v-2a183b29><div class="darkBG py-5" data-v-2a183b29><div class="container singleCol" data-v-2a183b29><p class="lead" data-v-2a183b29> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt inventore ex ratione accusamus accusantium odio consequatur! Asperiores reprehenderit voluptates, molestias deserunt facilis iusto voluptate. Velit dignissimos sed ipsa illo laudantium? </p></div></div><div class="container" data-v-2a183b29><div class="row py-4" data-v-2a183b29><div class="col-12 col-md-4" data-v-2a183b29><p class="lead" data-v-2a183b29> lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem </p></div><div class="col-12 col-md-4" data-v-2a183b29><p class="lead" data-v-2a183b29> lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem </p></div><div class="col-12 col-md-4" data-v-2a183b29><p class="lead" data-v-2a183b29> lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem </p></div></div></div></main><!--]-->`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 

// --------------------
const $id_SqnmXgZXcZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.headImg[data-v-2a183b29] {\n  background-size: cover;\n  min-height: 80vh;\n  position: relative;\n  color: white;\n}\n.head-overlay[data-v-2a183b29] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\nh1[data-v-2a183b29] {\n  font-size: 3rem;\n}\n.singleCol[data-v-2a183b29] {\n  margin: auto;\n  max-width: 750px;\n}\n.darkBG[data-v-2a183b29] {\n  background-color: #363636;\n  color: white;\n}\n";
}


// --------------------
// Request: /pages/update/[id].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/update/[id].vue?vue&type=style&index=0&scoped=true&lang.css ($id_KMtSiSZxIz)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_AGpwRlMB66 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Form/Textarea.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/axios/index.js");



const _sfc_main = {
  __name: '[id]',
  setup(__props, { expose }) {
  expose();

const router = __vite_ssr_import_0__.useRouter();
const route = __vite_ssr_import_0__.useRoute();
const event = __vite_ssr_import_3__.ref([]);
const errorMessage = __vite_ssr_import_3__.ref(null);

const getOneEvent = () => {
  __vite_ssr_import_4__.default
    .get(`/event/${route.params.id}`)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};
getOneEvent();

const deleteEvent = () => {
  __vite_ssr_import_4__.default
    .delete(`/event/${route.params.id}`)
    .then((response) => {
      console.log(response);
      router.push("/event");
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};

const updateEvent = async () => {
  __vite_ssr_import_4__.default
    .patch(`/event/${route.params.id}`, {
      title: event.value.title,
      description: event.value.description,
      dateEvent: event.value.dateEvent,
      location: event.value.location,
      userId: event.value.userId,
    })
    .then((response) => {
      console.log(response);
      event.value.title = "";
      event.value.description = "";
      event.value.dateEvent = "";
      event.value.location = "";
      router.push("/event");
    })
    .catch((error) => {
      errorMessage.value = error.response.data;
    });
};

const __returned__ = { router, route, event, errorMessage, getOneEvent, deleteEvent, updateEvent, ref: __vite_ssr_import_3__.ref, axios: __vite_ssr_import_4__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default
  const _component_FormTextarea = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "container" }, _attrs))} data-v-c8a938f8><div class="text-center my-5" data-v-c8a938f8><h1 data-v-c8a938f8>Modifier votre événement</h1><hr data-v-c8a938f8></div><div class="container my-5 py-5" data-v-c8a938f8><div class="row" data-v-c8a938f8><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-c8a938f8><div class="card border-0 shadow" data-v-c8a938f8><div class="card-body" data-v-c8a938f8><div class="text-center mb-5" data-v-c8a938f8><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16" data-v-c8a938f8><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" data-v-c8a938f8></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" data-v-c8a938f8></path></svg></div><form data-v-c8a938f8>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.title,
    "onUpdate:modelValue": $event => (($setup.event.title) = $event),
    label: "Titre",
    id: "title",
    type: "text"
  }, null, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.location,
    "onUpdate:modelValue": $event => (($setup.event.location) = $event),
    label: "Où se situe l'événement",
    id: "location",
    type: "text"
  }, null, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.dateEvent,
    "onUpdate:modelValue": $event => (($setup.event.dateEvent) = $event),
    label: "Quelle est la date de l'événement",
    id: "dateEvent",
    type: "date"
  }, null, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormTextarea, {
    modelValue: $setup.event.description,
    "onUpdate:modelValue": $event => (($setup.event.description) = $event),
    label: "Description",
    id: "description"
  }, null, _parent))
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-c8a938f8>${__vite_ssr_import_6__.ssrInterpolate($setup.errorMessage)}</p>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<div class="text-center" data-v-c8a938f8><div class="btn-group" role="group" aria-label="Basic mixed styles example" data-v-c8a938f8><button type="button" class="btn btn-success" data-v-c8a938f8> Modifier </button><button type="button" class="btn btn-danger" data-v-c8a938f8> Supprimer </button></div></div></form></div></div></div></div></div></div>`)
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/update/[id].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/update/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-c8a938f8"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/pages/update/[id].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/update/[id].vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/update/[id].vue?macro=true ($id_AGpwRlMB66)
// - /pages/update/[id].vue ($id_6aIXS57ME8)
// Dependencies: 

// --------------------
const $id_KMtSiSZxIz = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.error-message[data-v-c8a938f8] {\n  color: red;\n  font-style: italic;\n  font-size: small;\n}\n";
}


// --------------------
// Request: /pages/user/login.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /store/profileStore.js ($id_2d5ML4HenY)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/user/login.vue?vue&type=style&index=0&scoped=true&lang.css ($id_tbyNOAyVRG)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_hCqukOuM1U = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/store/profileStore.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    const router = __vite_ssr_import_0__.useRouter();
    const profileStore = __vite_ssr_import_5__.useProfileStore();
    const user = __vite_ssr_import_4__.reactive({
      email: "",
      password: ""
    });
    const errorMessage = __vite_ssr_import_4__.ref(null);
    const login = async () => {
      __vite_ssr_import_6__.default.post("/user/login", {
        email: user.email,
        password: user.password
      }).then(() => {
        user.email = "";
        user.password = "";
        profileStore.isLoggedIn = true;
        router.push("/event");
      }).catch((error) => {
        console.error("error login: ", error.response.data);
        errorMessage.value = error.response.data;
      });
    };
    const __returned__ = { router, profileStore, user, errorMessage, login };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default;
  const _component_nuxt_link = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "container" }, _attrs))} data-v-802e0a44><div class="text-center my-5" data-v-802e0a44><h1 data-v-802e0a44>Connexion</h1><hr data-v-802e0a44></div><div class="container my-5 pt-5" data-v-802e0a44><div class="row" data-v-802e0a44><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-802e0a44><div class="card border-0 shadow" data-v-802e0a44><div class="card-body" data-v-802e0a44><div class="text-center" data-v-802e0a44><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" data-v-802e0a44><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" data-v-802e0a44></path></svg></div><form data-v-802e0a44>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.email,
    "onUpdate:modelValue": ($event) => $setup.user.email = $event,
    label: "Email",
    type: "text",
    id: "email"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.password,
    "onUpdate:modelValue": ($event) => $setup.user.password = $event,
    label: "Mot de passe",
    type: "password",
    id: "password"
  }, null, _parent));
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-802e0a44>${__vite_ssr_import_8__.ssrInterpolate($setup.errorMessage)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="text-center mt-3" data-v-802e0a44><button class="btn btn-primary" data-v-802e0a44> Envoyer </button>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, {
    class: "nav-link",
    to: "/user/register"
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vous n&#39;avez pas encore de compte ?`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Vous n'avez pas encore de compte ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/user/login.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-802e0a44"], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/user/login.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /store/profileStore.js
// Parents: 
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// - /components/Nav.vue ($id_mEigpq54S5)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_sZIGJFdlmr)
// --------------------
const $id_2d5ML4HenY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


const useProfileStore = __vite_ssr_import_0__.defineStore('profile', {
  state: () => {
    return {
      isLoggedIn: false,
    }
  },

  actions: {
    toggleIsLoggedIn() {
      console.log('toggleIsLoggedIn: ', this.state.isLoggedIn);
      this.state.isLoggedIn = !this.state.isLoggedIn;
    }
  }
})
Object.defineProperty(__vite_ssr_exports__, "useProfileStore", { enumerable: true, configurable: true, get(){ return useProfileStore }});;
}


// --------------------
// Request: /node_modules/pinia/dist/pinia.mjs
// Parents: 
// - /store/profileStore.js ($id_2d5ML4HenY)
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// - /node_modules/@pinia/nuxt/dist/runtime/composables.mjs ($id_Z1toVhSsqJ)
// Dependencies: 

// --------------------
const $id_sZIGJFdlmr = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/philipperobinet/Documents/NuxtJS/troov/node_modules/pinia/dist/pinia.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/pinia/dist/pinia.mjs\".")
  })


// --------------------
// Request: /pages/user/login.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/user/login.vue?macro=true ($id_hCqukOuM1U)
// - /pages/user/login.vue ($id_mac5qKoyz4)
// Dependencies: 

// --------------------
const $id_tbyNOAyVRG = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.error-message[data-v-802e0a44] {\n  color: red;\n  font-style: italic;\n  font-size: small;\n}\n";
}


// --------------------
// Request: /pages/user/register.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/user/register.vue?vue&type=style&index=0&scoped=true&lang.css ($id_1tZMl7ke4G)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_m7QQwFqhrZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "register",
  setup(__props, { expose }) {
    expose();
    const router = __vite_ssr_import_0__.useRouter();
    const user = __vite_ssr_import_4__.reactive({
      name: "",
      email: "",
      password: ""
    });
    const errorMessage = __vite_ssr_import_4__.ref(null);
    const register = () => {
      __vite_ssr_import_5__.default.post("/user/register", {
        name: user.name,
        email: user.email,
        password: user.password
      }).then((response) => {
        console.log(response);
        user.name = "";
        user.email = "";
        user.password = "";
        router.push("/user/login");
      }).catch((error) => {
        console.error(error.response.data);
        errorMessage.value = error.response.data;
      });
    };
    const __returned__ = { router, user, errorMessage, register };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default;
  const _component_nuxt_link = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "container" }, _attrs))} data-v-f11a6d84><div class="text-center my-5" data-v-f11a6d84><h1 data-v-f11a6d84>Inscription</h1><hr data-v-f11a6d84></div><div class="container my-5 pt-5" data-v-f11a6d84><div class="row" data-v-f11a6d84><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-f11a6d84><div class="card border-0 shadow" data-v-f11a6d84><div class="card-body" data-v-f11a6d84><div class="text-center" data-v-f11a6d84><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" data-v-f11a6d84><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" data-v-f11a6d84></path></svg></div><form class="my-4 py-2" data-v-f11a6d84>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.name,
    "onUpdate:modelValue": ($event) => $setup.user.name = $event,
    type: "text",
    label: "Nom d'utilisateur",
    id: "username"
  }, null, _parent));
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.email,
    "onUpdate:modelValue": ($event) => $setup.user.email = $event,
    type: "text",
    label: "E-mail",
    id: "email"
  }, null, _parent));
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.password,
    "onUpdate:modelValue": ($event) => $setup.user.password = $event,
    type: "password",
    label: "Mot de passe",
    id: "password"
  }, null, _parent));
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-f11a6d84>${__vite_ssr_import_7__.ssrInterpolate($setup.errorMessage)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="text-center mt-3" data-v-f11a6d84><button class="btn btn-primary" data-v-f11a6d84> Envoyer </button>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_nuxt_link, {
    class: "nav-link",
    to: "/user/login"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vous avez d\xE9j\xE0 un compte ?`);
      } else {
        return [
          __vite_ssr_import_6__.createTextVNode("Vous avez d\xE9j\xE0 un compte ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div></div></div></div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/user/register.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f11a6d84"], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/user/register.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/user/register.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/user/register.vue?macro=true ($id_m7QQwFqhrZ)
// - /pages/user/register.vue ($id_ublemiS0hw)
// Dependencies: 

// --------------------
const $id_1tZMl7ke4G = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.error-message[data-v-f11a6d84] {\n  color: red;\n  font-style: italic;\n  font-size: small;\n}\n";
}


// --------------------
// Request: /pages/404.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_WR0M2zDvVc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "404",
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "container" }, _attrs))}><div class="texte-center my-5"><h1>Nous ne trouvons pas votre page</h1>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "btn btn-primary mt-5"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Retour \xE0 la page d&#39;accueil`);
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode("Retour \xE0 la page d'accueil")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/404.vue"]]);
;
}


// --------------------
// Request: /pages/create.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/create.vue?vue&type=style&index=0&scoped=true&lang.css ($id_R7S4rLLSur)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_kQLTPFB8yW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Form/Textarea.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "create",
  setup(__props, { expose }) {
    expose();
    const cookie = __vite_ssr_import_0__.useCookie("troov-id");
    const router = __vite_ssr_import_0__.useRouter();
    const errorMessage = __vite_ssr_import_5__.ref(null);
    const event = __vite_ssr_import_5__.reactive({
      title: "",
      description: "",
      dateEvent: "",
      location: ""
    });
    const createEvent = async () => {
      __vite_ssr_import_6__.default.post("/event", {
        title: event.title,
        description: event.description,
        dateEvent: event.dateEvent,
        location: event.location,
        userId: cookie.value
      }).then((response) => {
        console.log(response);
        event.title = "";
        event.description = "";
        event.dateEvent = "";
        event.location = "";
        router.push("/event");
      }).catch((error) => {
        console.error(error.response.data);
        errorMessage.value = error.response.data;
      });
    };
    const __returned__ = { cookie, router, errorMessage, event, createEvent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default;
  const _component_FormTextarea = __vite_ssr_import_2__.default;
  const _component_nuxt_link = __vite_ssr_import_3__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "container" }, _attrs))} data-v-40a374b5><div class="text-center my-5" data-v-40a374b5><h1 data-v-40a374b5>Cr\xE9er un \xE9v\xE9nement</h1><hr data-v-40a374b5></div><div class="container my-5 pt-5" data-v-40a374b5><div class="row" data-v-40a374b5><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-40a374b5><div class="card border-0 shadow" data-v-40a374b5><div class="card-body" data-v-40a374b5><div class="text-center mb-5" data-v-40a374b5><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16" data-v-40a374b5><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" data-v-40a374b5></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" data-v-40a374b5></path></svg></div><form data-v-40a374b5>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.title,
    "onUpdate:modelValue": ($event) => $setup.event.title = $event,
    type: "text",
    label: "Titre",
    id: "title"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.location,
    "onUpdate:modelValue": ($event) => $setup.event.location = $event,
    type: "text",
    label: "O\xF9 se situe l'\xE9v\xE9nement",
    id: "location"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.dateEvent,
    "onUpdate:modelValue": ($event) => $setup.event.dateEvent = $event,
    type: "date",
    label: "Quelle est la date de l'\xE9v\xE9nement",
    id: "dateEvent"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormTextarea, {
    modelValue: $setup.event.description,
    "onUpdate:modelValue": ($event) => $setup.event.description = $event,
    label: "Description",
    id: "description"
  }, null, _parent));
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-40a374b5>${__vite_ssr_import_8__.ssrInterpolate($setup.errorMessage)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="text-center mt-3" data-v-40a374b5><button class="btn btn-primary" data-v-40a374b5> Envoyer </button>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, {
    class: "nav-link",
    to: "/user/login"
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vous avez d\xE9j\xE0 un compte ?`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Vous avez d\xE9j\xE0 un compte ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/create.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-40a374b5"], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/create.vue"]]);
;
}


// --------------------
// Request: /pages/event.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /components/Card.vue ($id_JDqv8pOB1u)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_ZEJJ5zjuGh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Card.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");



const _sfc_main = {
  __name: 'event',
  setup(__props, { expose }) {
  expose();

let datas = __vite_ssr_import_2__.ref([]);

async function getUser() {
  try {
    const response = await __vite_ssr_import_1__.default.get("/event");
    datas.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
getUser();

const __returned__ = { datas, getUser, axios: __vite_ssr_import_1__.default, ref: __vite_ssr_import_2__.ref, reactive: __vite_ssr_import_2__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "container" }, _attrs))}><div class="text-center my-5"><h1>Liste des événements</h1><hr></div><div class="row"><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.datas, (data, index) => {
    _push(`<div class="col-lg-4 col-md-6 col-sm-12">`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Card, { data: data }, null, _parent))
    _push(`</div>`)
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/event.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/pages/event.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_SqnmXgZXcZ)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_zKWOlz8EPO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<!--[--><div data-v-2a183b29><div class="headImg" style="${__vite_ssr_import_2__.ssrRenderStyle({"background-image":"url('../assets/img/bg.jpeg')"})}" data-v-2a183b29><div class="head-overlay d-flex justify-content-center align-items-center" data-v-2a183b29><div class="singleCol container text-center" data-v-2a183b29><h1 data-v-2a183b29>Bienvenue sur Troov~Test</h1><p class="lead" data-v-2a183b29><strong data-v-2a183b29> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet dolore praesentium quia accusamus, fugit officia nam minima cum totam nihil inventore. </strong></p>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: "/event",
    class: "btn btn-outline-light"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<strong data-v-2a183b29${_scopeId}>Nos évenements</strong>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("strong", null, "Nos évenements")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div></div><main data-v-2a183b29><div class="darkBG py-5" data-v-2a183b29><div class="container singleCol" data-v-2a183b29><p class="lead" data-v-2a183b29> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt inventore ex ratione accusamus accusantium odio consequatur! Asperiores reprehenderit voluptates, molestias deserunt facilis iusto voluptate. Velit dignissimos sed ipsa illo laudantium? </p></div></div><div class="container" data-v-2a183b29><div class="row py-4" data-v-2a183b29><div class="col-12 col-md-4" data-v-2a183b29><p class="lead" data-v-2a183b29> lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem </p></div><div class="col-12 col-md-4" data-v-2a183b29><p class="lead" data-v-2a183b29> lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem </p></div><div class="col-12 col-md-4" data-v-2a183b29><p class="lead" data-v-2a183b29> lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem </p></div></div></div></main><!--]-->`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/pages/index.vue"]]);
}


// --------------------
// Request: /pages/update/[id].vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /components/Form/Textarea.vue ($id_H91K3lp7jd)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/update/[id].vue?vue&type=style&index=0&scoped=true&lang.css ($id_KMtSiSZxIz)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_6aIXS57ME8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Form/Textarea.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/axios/index.js");



const _sfc_main = {
  __name: '[id]',
  setup(__props, { expose }) {
  expose();

const router = __vite_ssr_import_0__.useRouter();
const route = __vite_ssr_import_0__.useRoute();
const event = __vite_ssr_import_3__.ref([]);
const errorMessage = __vite_ssr_import_3__.ref(null);

const getOneEvent = () => {
  __vite_ssr_import_4__.default
    .get(`/event/${route.params.id}`)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};
getOneEvent();

const deleteEvent = () => {
  __vite_ssr_import_4__.default
    .delete(`/event/${route.params.id}`)
    .then((response) => {
      console.log(response);
      router.push("/event");
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};

const updateEvent = async () => {
  __vite_ssr_import_4__.default
    .patch(`/event/${route.params.id}`, {
      title: event.value.title,
      description: event.value.description,
      dateEvent: event.value.dateEvent,
      location: event.value.location,
      userId: event.value.userId,
    })
    .then((response) => {
      console.log(response);
      event.value.title = "";
      event.value.description = "";
      event.value.dateEvent = "";
      event.value.location = "";
      router.push("/event");
    })
    .catch((error) => {
      errorMessage.value = error.response.data;
    });
};

const __returned__ = { router, route, event, errorMessage, getOneEvent, deleteEvent, updateEvent, ref: __vite_ssr_import_3__.ref, axios: __vite_ssr_import_4__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default
  const _component_FormTextarea = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "container" }, _attrs))} data-v-c8a938f8><div class="text-center my-5" data-v-c8a938f8><h1 data-v-c8a938f8>Modifier votre événement</h1><hr data-v-c8a938f8></div><div class="container my-5 py-5" data-v-c8a938f8><div class="row" data-v-c8a938f8><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-c8a938f8><div class="card border-0 shadow" data-v-c8a938f8><div class="card-body" data-v-c8a938f8><div class="text-center mb-5" data-v-c8a938f8><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16" data-v-c8a938f8><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" data-v-c8a938f8></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" data-v-c8a938f8></path></svg></div><form data-v-c8a938f8>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.title,
    "onUpdate:modelValue": $event => (($setup.event.title) = $event),
    label: "Titre",
    id: "title",
    type: "text"
  }, null, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.location,
    "onUpdate:modelValue": $event => (($setup.event.location) = $event),
    label: "Où se situe l'événement",
    id: "location",
    type: "text"
  }, null, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.event.dateEvent,
    "onUpdate:modelValue": $event => (($setup.event.dateEvent) = $event),
    label: "Quelle est la date de l'événement",
    id: "dateEvent",
    type: "date"
  }, null, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_FormTextarea, {
    modelValue: $setup.event.description,
    "onUpdate:modelValue": $event => (($setup.event.description) = $event),
    label: "Description",
    id: "description"
  }, null, _parent))
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-c8a938f8>${__vite_ssr_import_6__.ssrInterpolate($setup.errorMessage)}</p>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<div class="text-center" data-v-c8a938f8><div class="btn-group" role="group" aria-label="Basic mixed styles example" data-v-c8a938f8><button type="button" class="btn btn-success" data-v-c8a938f8> Modifier </button><button type="button" class="btn btn-danger" data-v-c8a938f8> Supprimer </button></div></div></form></div></div></div></div></div></div>`)
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/update/[id].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/update/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-c8a938f8"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/pages/update/[id].vue"]]);
}


// --------------------
// Request: /pages/user/login.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /store/profileStore.js ($id_2d5ML4HenY)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/user/login.vue?vue&type=style&index=0&scoped=true&lang.css ($id_tbyNOAyVRG)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_mac5qKoyz4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/store/profileStore.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    const router = __vite_ssr_import_0__.useRouter();
    const profileStore = __vite_ssr_import_5__.useProfileStore();
    const user = __vite_ssr_import_4__.reactive({
      email: "",
      password: ""
    });
    const errorMessage = __vite_ssr_import_4__.ref(null);
    const login = async () => {
      __vite_ssr_import_6__.default.post("/user/login", {
        email: user.email,
        password: user.password
      }).then(() => {
        user.email = "";
        user.password = "";
        profileStore.isLoggedIn = true;
        router.push("/event");
      }).catch((error) => {
        console.error("error login: ", error.response.data);
        errorMessage.value = error.response.data;
      });
    };
    const __returned__ = { router, profileStore, user, errorMessage, login };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default;
  const _component_nuxt_link = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "container" }, _attrs))} data-v-802e0a44><div class="text-center my-5" data-v-802e0a44><h1 data-v-802e0a44>Connexion</h1><hr data-v-802e0a44></div><div class="container my-5 pt-5" data-v-802e0a44><div class="row" data-v-802e0a44><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-802e0a44><div class="card border-0 shadow" data-v-802e0a44><div class="card-body" data-v-802e0a44><div class="text-center" data-v-802e0a44><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" data-v-802e0a44><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" data-v-802e0a44></path></svg></div><form data-v-802e0a44>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.email,
    "onUpdate:modelValue": ($event) => $setup.user.email = $event,
    label: "Email",
    type: "text",
    id: "email"
  }, null, _parent));
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.password,
    "onUpdate:modelValue": ($event) => $setup.user.password = $event,
    label: "Mot de passe",
    type: "password",
    id: "password"
  }, null, _parent));
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-802e0a44>${__vite_ssr_import_8__.ssrInterpolate($setup.errorMessage)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="text-center mt-3" data-v-802e0a44><button class="btn btn-primary" data-v-802e0a44> Envoyer </button>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_nuxt_link, {
    class: "nav-link",
    to: "/user/register"
  }, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vous n&#39;avez pas encore de compte ?`);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode("Vous n'avez pas encore de compte ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div></div></div></div>`);
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/user/login.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_11__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-802e0a44"], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/user/login.vue"]]);
;
}


// --------------------
// Request: /pages/user/register.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs ($id_NYS6RIyZKQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/Form/Input.vue ($id_u6x9vuREvZ)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /pages/user/register.vue?vue&type=style&index=0&scoped=true&lang.css ($id_1tZMl7ke4G)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_ublemiS0hw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Form/Input.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "register",
  setup(__props, { expose }) {
    expose();
    const router = __vite_ssr_import_0__.useRouter();
    const user = __vite_ssr_import_4__.reactive({
      name: "",
      email: "",
      password: ""
    });
    const errorMessage = __vite_ssr_import_4__.ref(null);
    const register = () => {
      __vite_ssr_import_5__.default.post("/user/register", {
        name: user.name,
        email: user.email,
        password: user.password
      }).then((response) => {
        console.log(response);
        user.name = "";
        user.email = "";
        user.password = "";
        router.push("/user/login");
      }).catch((error) => {
        console.error(error.response.data);
        errorMessage.value = error.response.data;
      });
    };
    const __returned__ = { router, user, errorMessage, register };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_1__.default;
  const _component_nuxt_link = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "container" }, _attrs))} data-v-f11a6d84><div class="text-center my-5" data-v-f11a6d84><h1 data-v-f11a6d84>Inscription</h1><hr data-v-f11a6d84></div><div class="container my-5 pt-5" data-v-f11a6d84><div class="row" data-v-f11a6d84><div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto" data-v-f11a6d84><div class="card border-0 shadow" data-v-f11a6d84><div class="card-body" data-v-f11a6d84><div class="text-center" data-v-f11a6d84><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" data-v-f11a6d84><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" data-v-f11a6d84></path></svg></div><form class="my-4 py-2" data-v-f11a6d84>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.name,
    "onUpdate:modelValue": ($event) => $setup.user.name = $event,
    type: "text",
    label: "Nom d'utilisateur",
    id: "username"
  }, null, _parent));
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.email,
    "onUpdate:modelValue": ($event) => $setup.user.email = $event,
    type: "text",
    label: "E-mail",
    id: "email"
  }, null, _parent));
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormInput, {
    modelValue: $setup.user.password,
    "onUpdate:modelValue": ($event) => $setup.user.password = $event,
    type: "password",
    label: "Mot de passe",
    id: "password"
  }, null, _parent));
  if ($setup.errorMessage) {
    _push(`<p class="error-message text-center" data-v-f11a6d84>${__vite_ssr_import_7__.ssrInterpolate($setup.errorMessage)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="text-center mt-3" data-v-f11a6d84><button class="btn btn-primary" data-v-f11a6d84> Envoyer </button>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_nuxt_link, {
    class: "nav-link",
    to: "/user/login"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Vous avez d\xE9j\xE0 un compte ?`);
      } else {
        return [
          __vite_ssr_import_6__.createTextVNode("Vous avez d\xE9j\xE0 un compte ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div></div></div></div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/user/register.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f11a6d84"], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/pages/user/register.vue"]]);
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_eDfNBsdIJm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_9dV260oVIp = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs ($id_EviSavUWra)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_sZIGJFdlmr)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// --------------------
const $id_i9ItelNnNP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin((nuxtApp) => {
  const pinia = __vite_ssr_import_0__.createPinia();
  nuxtApp.vueApp.use(pinia);
  __vite_ssr_import_0__.setActivePinia(pinia);
  if (true) {
    nuxtApp.payload.pinia = pinia.state.value;
  } else if (nuxtApp.payload && nuxtApp.payload.pinia) {
    pinia.state.value = nuxtApp.payload.pinia;
  }
  return {
    provide: {
      pinia
    }
  };
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// - /node_modules/@pinia/nuxt/dist/runtime/composables.mjs ($id_Z1toVhSsqJ)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_qBEL58R1ls)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/@pinia/nuxt/dist/runtime/composables.mjs ($id_Z1toVhSsqJ)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_27UVWcb1VH)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_aSmmIHQt8x)
// --------------------
const $id_2kASXsSBem = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useMeta }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.isVue3 }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtLink }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useTransitionState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@pinia/nuxt/dist/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "usePinia", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.usePinia }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.definePageMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "useLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useLink }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_DFcXpE295m)
// --------------------
const $id_qBEL58R1ls = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_qBEL58R1ls)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// --------------------
const $id_DFcXpE295m = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/@pinia/nuxt/dist/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// - /node_modules/pinia/dist/pinia.mjs ($id_sZIGJFdlmr)
// --------------------
const $id_Z1toVhSsqJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const usePinia = () => __vite_ssr_import_0__.useNuxtApp().$pinia;
Object.defineProperty(__vite_ssr_exports__, "usePinia", { enumerable: true, configurable: true, get(){ return usePinia }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// Dependencies: 

// --------------------
const $id_27UVWcb1VH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/root-component.mjs
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_BRAQOzjvms = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/root-component.mjs ($id_BRAQOzjvms)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/error-component.mjs ($id_lHz0Z9oGM6)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_6btoGdWLJh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_lHz0Z9oGM6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/error-component.mjs ($id_lHz0Z9oGM6)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_jMbXP0vyaY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_5otrOPr3UP)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_uQ1ND2iuUo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: ``
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_5otrOPr3UP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-573335c0]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-573335c0]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-573335c0]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-573335c0]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-573335c0]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-573335c0]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-573335c0]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-573335c0]:hover::before{background-position:-50% 0;opacity:1}*[data-v-573335c0],[data-v-573335c0]:before,[data-v-573335c0]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*[data-v-573335c0]{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}[data-v-573335c0]:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a[data-v-573335c0]{color:inherit;text-decoration:inherit}body[data-v-573335c0]{margin:0;font-family:inherit;line-height:inherit}html[data-v-573335c0]{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\";line-height:1.5}h1[data-v-573335c0],p[data-v-573335c0]{margin:0}h1[data-v-573335c0]{font-size:inherit;font-weight:inherit}.bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0px}.right-0[data-v-573335c0]{right:0px}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_orO3Ccf7NQ)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_FMi1dBhUQk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: ``
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_orO3Ccf7NQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-0914425d]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}*[data-v-0914425d],[data-v-0914425d]:before,[data-v-0914425d]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*[data-v-0914425d]{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}[data-v-0914425d]:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body[data-v-0914425d]{margin:0;font-family:inherit;line-height:inherit}html[data-v-0914425d]{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\";line-height:1.5}h1[data-v-0914425d],p[data-v-0914425d]{margin:0}h1[data-v-0914425d]{font-size:inherit;font-weight:inherit}.bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0px}.right-0[data-v-0914425d]{right:0px}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs ($id_2kASXsSBem)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_JpEWTLBcMj)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_vC10oUHchO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: ``
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_JpEWTLBcMj = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-1da4697d]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*[data-v-1da4697d],[data-v-1da4697d]:before,[data-v-1da4697d]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*[data-v-1da4697d]{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}[data-v-1da4697d]:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body[data-v-1da4697d]{margin:0;font-family:inherit;line-height:inherit}html[data-v-1da4697d]{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\";line-height:1.5}h1[data-v-1da4697d],p[data-v-1da4697d],pre[data-v-1da4697d]{margin:0}h1[data-v-1da4697d]{font-size:inherit;font-weight:inherit}pre[data-v-1da4697d]{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0px}.right-0[data-v-1da4697d]{right:0px}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/app-component.mjs
// Parents: 
// - /Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry ($id_SCPTyPkgXQ)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// --------------------
const $id_bmYmgYQY1l = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/app-component.mjs ($id_bmYmgYQY1l)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_bGEBDyzLuq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/layouts.mjs ($id_oxghfohTLP)
// --------------------
const $id_OQA4gz7rLc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /layouts/default.vue ($id_dononVQSck)
// --------------------
const $id_oxghfohTLP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/layouts.mjs ($id_oxghfohTLP)
// Dependencies: 
// - /components/Nav.vue ($id_mEigpq54S5)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /layouts/default.vue?vue&type=style&index=0&lang.css ($id_X6TkHqaum0)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_dononVQSck = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Nav.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Nav = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Nav, null, null, _parent))
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/layouts/default.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/philipperobinet/Documents/NuxtJS/troov/layouts/default.vue"]]);
}


// --------------------
// Request: /components/Nav.vue
// Parents: 
// - /layouts/default.vue ($id_dononVQSck)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/vue/dist/vue.cjs.js ($id_YPBhX5dq3F)
// - /store/profileStore.js ($id_2d5ML4HenY)
// - /node_modules/axios/index.js ($id_mg2sFjNRNK)
// - /node_modules/vue/server-renderer/index.js ($id_shX6HK8fbb)
// - /components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css ($id_LFDkqkBlmk)
// - /@id/plugin-vue:export-helper ($id_u7hjwQB3Fl)
// --------------------
const $id_mEigpq54S5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/store/profileStore.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "Nav",
  setup(__props, { expose }) {
    expose();
    const profileStore = __vite_ssr_import_2__.useProfileStore();
    const logout = () => {
      __vite_ssr_import_3__.default.post("/user/logout");
      profileStore.isLoggedIn = false;
    };
    const __returned__ = { profileStore, logout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default;
  _push(`<section${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "section-nav" }, _attrs))} data-v-738fae98><nav class="navbar navbar-expand-lg navbar-light" data-v-738fae98><div class="container" data-v-738fae98><!-- Name --><div class="header-left px-5 d-flex justify-content-center" data-v-738fae98>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "label d-inline mx-2"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Troov~Test`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Troov~Test")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!-- Nav Item --><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" data-v-738fae98><span class="navbar-toggler-icon" data-v-738fae98></span></button><div class="collapse navbar-collapse" id="navbarTogglerDemo01" data-v-738fae98><ul class="navbar-nav me-auto" data-v-738fae98><li class="nav-item" data-v-738fae98>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
    to: "/event",
    class: "nav-link",
    "aria-current": "page"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Events`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Events")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-738fae98>`);
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
    to: "/create",
    class: "nav-link"
  }, {
    default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cr\xE9ers un \xE9v\xE9nement`);
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode("Cr\xE9ers un \xE9v\xE9nement")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
  if (!$setup.profileStore.isLoggedIn) {
    _push(`<div class="form-inline my-2 my-lg-0" data-v-738fae98><ul class="navbar-nav me-auto" data-v-738fae98><li class="nav-item" data-v-738fae98>`);
    _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
      to: "/user/login",
      class: "nav-link"
    }, {
      default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Connexion`);
        } else {
          return [
            __vite_ssr_import_4__.createTextVNode("Connexion")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="nav-item" data-v-738fae98>`);
    _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
      to: "/user/register",
      class: "nav-link"
    }, {
      default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Inscription`);
        } else {
          return [
            __vite_ssr_import_4__.createTextVNode("Inscription")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul></div>`);
  } else {
    _push(`<div class="form-inline my-2 my-lg-0" data-v-738fae98><div class="navbar-nav me-auto" data-v-738fae98><p class="nav-item" data-v-738fae98>`);
    _push(__vite_ssr_import_5__.ssrRenderComponent(_component_nuxt_link, {
      to: "/user/login",
      class: "nav-link"
    }, {
      default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Logout`);
        } else {
          return [
            __vite_ssr_import_4__.createTextVNode("Logout")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</p></div></div>`);
  }
  _push(`</div></div></nav></section>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-738fae98"], ["__file", "/Users/philipperobinet/Documents/NuxtJS/troov/components/Nav.vue"]]);
;
}


// --------------------
// Request: /components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/Nav.vue ($id_mEigpq54S5)
// Dependencies: 

// --------------------
const $id_LFDkqkBlmk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.section-nav[data-v-738fae98] {\n  width: 100%;\n  color: rgb(0, 0, 0);\n  background-color: rgb(255, 255, 255);\n}\n.section-nav nav[data-v-738fae98] {\n  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);\n}\n.section-nav .label[data-v-738fae98] {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 20px;\n  text-decoration: none;\n}\n.section-nav .nav-link[data-v-738fae98] {\n  font-weight: 400;\n  color: black !important;\n}\n.section-nav .nav-link[data-v-738fae98]:hover {\n  font-weight: 400;\n}\n";
}


// --------------------
// Request: /layouts/default.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /layouts/default.vue ($id_dononVQSck)
// Dependencies: 

// --------------------
const $id_X6TkHqaum0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\nbody {\n  font-family: \"Noto Sans TC\", sans-serif;\n  background-color: #f7f8f9;\n}\n";
}


const __modules__ = {
  "/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry": $id_SCPTyPkgXQ,
  "/node_modules/vue/dist/vue.cjs.js": $id_YPBhX5dq3F,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_eAIXxFjGLW,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/paths.mjs": $id_H9duAcIsFo,
  "/node_modules/ufo/dist/index.mjs": $id_YU3gYOEqyI,
  "/node_modules/nuxt/dist/app/index.mjs": $id_NpJ0d20vMd,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_4GnUEZ7ifE,
  "/node_modules/hookable/dist/index.mjs": $id_osgRxHGQwS,
  "/node_modules/unctx/dist/index.mjs": $id_pWnKLdtXja,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_sGenmuNLlo,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_UzRZUO1GKq,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_aSmmIHQt8x,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_1baiIWALJh,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_31ETNgPfBU,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_AGPfGxS2fu,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_fYchCJb7XZ,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_bBQ8Yk34eC,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_QfWuTouFBP,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_URtEHTJ6vX,
  "/node_modules/cookie-es/dist/index.mjs": $id_9JdSYd7S59,
  "/node_modules/h3/dist/index.mjs": $id_V9fe1no0d6,
  "/node_modules/destr/dist/index.mjs": $id_A9FezTYJBC,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_xIZrp1mIW8,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_202QqPjMtu,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_Fhvn5egKy1,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_6yHtfHy3cx,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_tzUUgT5kx6,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_BOqVBAGCOv,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_hSsGoupXYm,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/css.mjs": $id_89b97MJmrE,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/plugins/server.mjs": $id_EviSavUWra,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_mHG7oNEQOP,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/components.plugin.mjs": $id_2mFpTqVjFR,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_5vEgA2Fgrh,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_wDImTp8t2G,
  "/node_modules/defu/dist/defu.mjs": $id_16rZclLIWW,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_omUDQe4IGe,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_sqKdb79FW5,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/meta.config.mjs": $id_lDSN2a105W,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_oJCXe6nyyh,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_X8FM3AG1sA,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_gPQzqsnHwc,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_acUmhqj8VN,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/routes.mjs": $id_NYS6RIyZKQ,
  "/pages/404.vue?macro=true": $id_wt0iNdA5Wu,
  "/node_modules/vue/server-renderer/index.js": $id_shX6HK8fbb,
  "/@id/plugin-vue:export-helper": $id_u7hjwQB3Fl,
  "/pages/create.vue?macro=true": $id_2ZhLjEmLe5,
  "/components/Form/Input.vue": $id_u6x9vuREvZ,
  "/components/Form/Textarea.vue": $id_H91K3lp7jd,
  "/components/Form/Textarea.vue?vue&type=style&index=0&scoped=true&lang.css": $id_Keo3gcRaV7,
  "/node_modules/axios/index.js": $id_mg2sFjNRNK,
  "/pages/create.vue?vue&type=style&index=0&scoped=true&lang.css": $id_R7S4rLLSur,
  "/pages/event.vue?macro=true": $id_362bnXc8ls,
  "/components/Card.vue": $id_JDqv8pOB1u,
  "/pages/index.vue?macro=true": $id_XdcCQB7w7V,
  "/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css": $id_SqnmXgZXcZ,
  "/pages/update/[id].vue?macro=true": $id_AGpwRlMB66,
  "/pages/update/[id].vue?vue&type=style&index=0&scoped=true&lang.css": $id_KMtSiSZxIz,
  "/pages/user/login.vue?macro=true": $id_hCqukOuM1U,
  "/store/profileStore.js": $id_2d5ML4HenY,
  "/node_modules/pinia/dist/pinia.mjs": $id_sZIGJFdlmr,
  "/pages/user/login.vue?vue&type=style&index=0&scoped=true&lang.css": $id_tbyNOAyVRG,
  "/pages/user/register.vue?macro=true": $id_m7QQwFqhrZ,
  "/pages/user/register.vue?vue&type=style&index=0&scoped=true&lang.css": $id_1tZMl7ke4G,
  "/pages/404.vue": $id_WR0M2zDvVc,
  "/pages/create.vue": $id_kQLTPFB8yW,
  "/pages/event.vue": $id_ZEJJ5zjuGh,
  "/pages/index.vue": $id_zKWOlz8EPO,
  "/pages/update/[id].vue": $id_6aIXS57ME8,
  "/pages/user/login.vue": $id_mac5qKoyz4,
  "/pages/user/register.vue": $id_ublemiS0hw,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/router.options.mjs": $id_eDfNBsdIJm,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/middleware.mjs": $id_9dV260oVIp,
  "/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs": $id_i9ItelNnNP,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/imports.mjs": $id_2kASXsSBem,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_qBEL58R1ls,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_DFcXpE295m,
  "/node_modules/@pinia/nuxt/dist/runtime/composables.mjs": $id_Z1toVhSsqJ,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_27UVWcb1VH,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/root-component.mjs": $id_BRAQOzjvms,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_6btoGdWLJh,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/error-component.mjs": $id_lHz0Z9oGM6,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_jMbXP0vyaY,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_uQ1ND2iuUo,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_5otrOPr3UP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_FMi1dBhUQk,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_orO3Ccf7NQ,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_vC10oUHchO,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_JpEWTLBcMj,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/app-component.mjs": $id_bmYmgYQY1l,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_bGEBDyzLuq,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_OQA4gz7rLc,
  "/@id/virtual:nuxt:/Users/philipperobinet/Documents/NuxtJS/troov/.nuxt/layouts.mjs": $id_oxghfohTLP,
  "/layouts/default.vue": $id_dononVQSck,
  "/components/Nav.vue": $id_mEigpq54S5,
  "/components/Nav.vue?vue&type=style&index=0&scoped=true&lang.css": $id_LFDkqkBlmk,
  "/layouts/default.vue?vue&type=style&index=0&lang.css": $id_X6TkHqaum0
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/philipperobinet/Documents/NuxtJS/troov/node_modules/nuxt/dist/app/entry")