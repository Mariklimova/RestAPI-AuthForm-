const button = document.querySelector('button');

button.addEventListener('click', async () => {
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const pwd = document.querySelector('.pwd').value;

    const update_username = document.querySelector('.update_username');
    const update_email = document.querySelector('.update_email');
    const update_phone = document.querySelector('.update_phone');
    const update_id = document.querySelector('.update_id');


    const response = await fetch('http://localhost:3002/user/9', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, phone, pwd })
    })
    const result = await response.json();
    console.log(result);

    update_username.innerHTML = result[0].username;
    update_email.innerHTML = result[0].email;
    update_phone.innerHTML = result[0].phone;
    update_id.innerHTML = result[0].id;
})