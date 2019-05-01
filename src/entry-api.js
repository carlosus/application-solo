const orderEntryApi = {
    save(orderEntry) {
        // serialize to json
        const json = JSON.stringify(orderEntry);
        // save to local storage
        localStorage.setItem('orderEntry', json);
    }, 
    get() {
        // get from local storage
        const json = localStorage.getItem('orderEntry');
        // deserialize to object
        const entry = JSON.parse(json);
        // return it
        return entry;
    }
};

export default orderEntryApi;