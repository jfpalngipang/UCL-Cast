/**
 * Created by jfpalngipang on 3/5/15.
 */
window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
    if(loaded) {
        initializeCastApi();
    }
}