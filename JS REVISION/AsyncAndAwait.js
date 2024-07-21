function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Some data";
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log(data);
        return fetchData();
    })
    .then(data2 => {
        console.log(data2);
        return fetchData();
    })
    .then(data3 => {
        console.log(data3);
    })
    .catch(error => {
        console.error(error);
    });
