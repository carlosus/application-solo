const entryApi = {
    save(entry) {
        // serialize to json
        const json = JSON.stringify(entry);
        // save to local storage
        localStorage.setItem('entry', json);
    }, 
    get() {
        // get from local storage
        const json = localStorage.getItem('entry');
        // deserialize to object
        const entry = JSON.parse(json);
        // return it
        return entry;
    }
};

export default entryApi;