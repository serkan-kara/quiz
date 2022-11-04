function myFunction(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value === 'number') {
                resolve(value * 2);
            } else {
                reject('please enter a number');
            }
        }, 4000)
    })
}

myFunction(3)
    .then(data => {
        console.log(5 + data);
    });