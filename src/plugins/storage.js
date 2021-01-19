import axios from "axios";

const  install =function (app){
    const  getStorage = storageType => ({

        set(key, value) {
            try {
                window[storageType].setItem(key, JSON.stringify({
                    data: value
                }));
            } catch (e) {
                if (storageType === 'localStorage') {
                    window[storageType].clear();
                }
            }
            return this;
        },
        get(key) {
            return (JSON.parse(window[storageType].getItem(key)) || {}).data;
        },
        remove(key) {
            window[storageType].removeItem(key);
            return this;
        },
        clear() {
            window[storageType].clear();
        },
        kill(kill_id = '2019-01-21') {
            const id = this.get('kill_id');
            if (id !== kill_id) {
                this.clear();
                this.set('kill_id', kill_id);
            }
        }
    });
    window.LS = getStorage('localStorage');
    window.SS = getStorage('sessionStorage');
    // app.config.globalProperties.$ls = getStorage('localStorage');
    // app.config.globalProperties.$ss = getStorage('sessionStorage');
    app.mixin({
        data(){
            return {
                LS: getStorage('localStorage'),
                SS: getStorage('sessionStorage')
            }
        }
    })
}
export   default   {install}
