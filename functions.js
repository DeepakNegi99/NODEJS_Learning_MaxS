function red() {
    console.log("Inside red function");
}


function blue(callback) {
    console.log("some work is going on for 5 seconds in blue function");
    setTimeout(() => {
        callback("Callback executed after timeout in blue function");
    }, 5000);
}


let yellow = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved from yellow function');
        }, 1000);
    });
}

async function green() {
    let result = await yellow();
    console.log(result);
}

blue((message) => {
    console.log(message);
});

