async function f() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return await response.json();
    } catch (error) {
        console.log(error, 'errr');
    }
}

f().then(response => {
    console.log(response, 'res');
})
