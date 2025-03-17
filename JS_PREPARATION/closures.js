// Promises

function datafetch() {
    return new Promise((resolve, reject) => { // Fixed missing {}
        setTimeout(() => {
            let userdata = false;
            if (userdata) {
                resolve("Data toh hai");
            } else {
                reject("Data nhi h");
            }
        }, 3000);
    });
}

datafetch()
    .then((data) => console.log(data))
    .catch((error)=>console.log(error))
