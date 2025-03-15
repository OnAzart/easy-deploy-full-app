/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/summarize/route";
exports.ids = ["app/api/summarize/route"];
exports.modules = {

/***/ "(rsc)/./app/api/summarize/route.ts":
/*!************************************!*\
  !*** ./app/api/summarize/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const toolName = searchParams.get('toolName');\n    const backendUrl = \"https://easy-deploy-full-app-production.up.railway.app/summarize\";\n    console.log(\"NEXT_PUBLIC_BACKEND_URL:\", backendUrl); // Log the backend URL (Verification)\n    try {\n        console.log(\"Fetching from:\", `${backendUrl}?tool_name=${toolName}`); // Log the full URL\n        const response = await fetch(`${backendUrl}?tool_name=${toolName}`, {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n        if (!response.ok) {\n            console.error(\"Backend responded with error:\", response.status, response.statusText);\n            throw new Error(`Backend responded with status: ${response.status}`);\n        }\n        const data = await response.json();\n        console.log(\"Backend response:\", data); // Log the response data\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            summary: data.summary\n        });\n    } catch (error) {\n        console.error(\"Error calling backend:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to get summary from backend'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1bW1hcml6ZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUVwQyxlQUFlQyxJQUFJQyxPQUFnQjtJQUN4QyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7SUFDNUMsTUFBTUMsV0FBV0gsYUFBYUksR0FBRyxDQUFDO0lBRWxDLE1BQU1DLGFBQWFDLGtFQUFtQztJQUN0REcsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QkwsYUFBYSxxQ0FBcUM7SUFFMUYsSUFBSTtRQUNGSSxRQUFRQyxHQUFHLENBQUMsa0JBQWtCLEdBQUdMLFdBQVcsV0FBVyxFQUFFRixVQUFVLEdBQUcsbUJBQW1CO1FBQ3pGLE1BQU1RLFdBQVcsTUFBTUMsTUFBTSxHQUFHUCxXQUFXLFdBQVcsRUFBRUYsVUFBVSxFQUFFO1lBQ2xFVSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxJQUFJLENBQUNILFNBQVNJLEVBQUUsRUFBRTtZQUNoQk4sUUFBUU8sS0FBSyxDQUFDLGlDQUFpQ0wsU0FBU00sTUFBTSxFQUFFTixTQUFTTyxVQUFVO1lBQ25GLE1BQU0sSUFBSUMsTUFBTSxDQUFDLCtCQUErQixFQUFFUixTQUFTTSxNQUFNLEVBQUU7UUFDckU7UUFFQSxNQUFNRyxPQUFPLE1BQU1ULFNBQVNVLElBQUk7UUFDaENaLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJVLE9BQU8sd0JBQXdCO1FBQ2hFLE9BQU92QixxREFBWUEsQ0FBQ3dCLElBQUksQ0FBQztZQUFFQyxTQUFTRixLQUFLRSxPQUFPO1FBQUM7SUFDbkQsRUFBRSxPQUFPTixPQUFZO1FBQ25CUCxRQUFRTyxLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPbkIscURBQVlBLENBQUN3QixJQUFJLENBQUM7WUFBRUwsT0FBTztRQUFxQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMxRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvbnR1dHkvRG93bmxvYWRzL1Byb2plY3RzL2Vhc3lfZGVwbG95X2Z1bGxfYXBwL2Zyb250ZW5kL2FwcC9hcGkvc3VtbWFyaXplL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgY29uc3QgdG9vbE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0b29sTmFtZScpO1xuXG4gIGNvbnN0IGJhY2tlbmRVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTDtcbiAgY29uc29sZS5sb2coXCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTDpcIiwgYmFja2VuZFVybCk7IC8vIExvZyB0aGUgYmFja2VuZCBVUkwgKFZlcmlmaWNhdGlvbilcblxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgZnJvbTpcIiwgYCR7YmFja2VuZFVybH0/dG9vbF9uYW1lPSR7dG9vbE5hbWV9YCk7IC8vIExvZyB0aGUgZnVsbCBVUkxcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2JhY2tlbmRVcmx9P3Rvb2xfbmFtZT0ke3Rvb2xOYW1lfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5lcnJvcihcIkJhY2tlbmQgcmVzcG9uZGVkIHdpdGggZXJyb3I6XCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhY2tlbmQgcmVzcG9uZGVkIHdpdGggc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwiQmFja2VuZCByZXNwb25zZTpcIiwgZGF0YSk7IC8vIExvZyB0aGUgcmVzcG9uc2UgZGF0YVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1bW1hcnk6IGRhdGEuc3VtbWFyeSB9KTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyAvLyBTcGVjaWZ5IHR5cGUgZm9yIGVycm9yXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhbGxpbmcgYmFja2VuZDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGdldCBzdW1tYXJ5IGZyb20gYmFja2VuZCcgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInRvb2xOYW1lIiwiZ2V0IiwiYmFja2VuZFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiZXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJkYXRhIiwianNvbiIsInN1bW1hcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/summarize/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ntuty_Downloads_Projects_easy_deploy_full_app_frontend_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/summarize/route.ts */ \"(rsc)/./app/api/summarize/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/summarize/route\",\n        pathname: \"/api/summarize\",\n        filename: \"route\",\n        bundlePath: \"app/api/summarize/route\"\n    },\n    resolvedPagePath: \"/Users/ntuty/Downloads/Projects/easy_deploy_full_app/frontend/app/api/summarize/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ntuty_Downloads_Projects_easy_deploy_full_app_frontend_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdW1tYXJpemUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm50dXR5JTJGRG93bmxvYWRzJTJGUHJvamVjdHMlMkZlYXN5X2RlcGxveV9mdWxsX2FwcCUyRmZyb250ZW5kJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm50dXR5JTJGRG93bmxvYWRzJTJGUHJvamVjdHMlMkZlYXN5X2RlcGxveV9mdWxsX2FwcCUyRmZyb250ZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL250dXR5L0Rvd25sb2Fkcy9Qcm9qZWN0cy9lYXN5X2RlcGxveV9mdWxsX2FwcC9mcm9udGVuZC9hcHAvYXBpL3N1bW1hcml6ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3VtbWFyaXplL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3VtbWFyaXplXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdW1tYXJpemUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbnR1dHkvRG93bmxvYWRzL1Byb2plY3RzL2Vhc3lfZGVwbG95X2Z1bGxfYXBwL2Zyb250ZW5kL2FwcC9hcGkvc3VtbWFyaXplL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fntuty%2FDownloads%2FProjects%2Feasy_deploy_full_app%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();