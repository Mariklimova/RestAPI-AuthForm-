const button = document.querySelector('button');

button.addEventListener('click', async () => {
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const pwd = document.querySelector('.pwd').value;

    const usernameP = document.querySelector('.username_p');
    const emailP = document.querySelector('.email_p');
    const phoneP = document.querySelector('.phone_p');
    const id = document.querySelector('.id_p');

    const body = JSON.stringify({ username, email, phone, pwd });
    const response = await fetch('http://localhost:3002/user/reg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
    const result = await response.json();
    console.log(result);

    usernameP.innerHTML = result[0].username;
    emailP.innerHTML = result[0].email;
    phoneP.innerHTML = result[0].phone;
    id.innerHTML = result[0].id;
})