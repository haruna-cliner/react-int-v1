let xAppKey = "x-app-key";
let xRefreshKey = "x-refresh-key";

const storeToken = token => sessionStorage.setItem(xAppKey, token);

const getToken = () => sessionStorage.getItem(xAppKey);

const storeRefresh = token => sessionStorage.setItem(xRefreshKey, token);

const getRefresh = () => sessionStorage.getItem(xRefreshKey);

export default {
    authSet: storeToken,
    authGet: getToken,
    refreshSet: storeRefresh,
    refreshGet: getRefresh
}
