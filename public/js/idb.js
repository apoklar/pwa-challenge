let db;

const request = indexedDB.open('pwa-challenge', 1);

request.onupgradeneeded = function(event) {
    
    const db = event.target.result;
    
    db.createObjectStore('new_pizza', { autoIncrement: true });
};