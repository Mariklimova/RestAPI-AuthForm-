const button = document.querySelector('button');

button.addEventListener('click', async () => {
    const email = document.querySelector('.email').value;
    const pwd = document.querySelector('.pwd').value;

    const body = JSON.stringify({ email, pwd });
    const response = await fetch('http://localhost:3002/user/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
    const result = await response.json();
    console.log(result);
})