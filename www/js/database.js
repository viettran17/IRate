const listRestaurant = [
    {
        r_type: "Sea Food",
        r_name: "King Sea",
        user_name: "Viet",
        image: "https://images.foody.vn/res/g88/871419/prof/s1242x600/foody-upload-api-foody-mobile-toan-canh-190805090602.jpg",
        food_rate: "Nice",
        service_rate: "Nice",
        clean_rate: "Nice",
        m_price: "400.000",
        note: "Good",
    },
    
    {
        r_type: "Sea Food",
        r_name: "King Sea",
        user_name: "Viet",
        image: "https://images.foody.vn/res/g88/871419/prof/s1242x600/foody-upload-api-foody-mobile-toan-canh-190805090602.jpg",
        food_rate: "Nice",
        service_rate: "Nice",
        clean_rate: "Nice",
        m_price: "400.000",
        note: "Good",
    }
]

var database;
    var request = window.indexedDB.open("I-Rate Restaurant", 1);
    request.onupgradeneeded = function(event) {
        var database = event.target.result;
        var objectStore = database.createObjectStore("IR Restaurant", {keyPath: "id", autoIncrement: true});
            for(var i in listRestaurant){
                objectStore.add(listRestaurant[i])
            }
    }
request.onsuccess = function(event) {
    database = request.result;
    console.log("Success: "+ database);
};

function getAllData(collectionName) {
    const transaction = database.transaction([collectionName],"readonly")
    const objectStore = transaction.objectStore(collectionName)
    request = objectStore.getAll();
    return request
}