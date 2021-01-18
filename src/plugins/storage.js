const getStorage = storageType => ({

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
console.log('这里是 00000000000000 的结果-------------', 2345)
window.$ls = getStorage('localStorage');
window.$ss = getStorage('sessionStorage');
export  {getStorage}
