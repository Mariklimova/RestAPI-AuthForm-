const button = document.querySelector('button');

button.addEventListener('click', async () => {
  
    const del_username = document.querySelector('.del_username');
    const del_email = document.querySelector('.del_email');
    const del_phone = document.querySelector('.del_phone');
    const del_id = document.querySelector('.del_id');


    const response = await fetch('http://localhost:3002/user/3', {
        method: 'DELETE',
    })

    const result = await response.json();
    console.log(result);

    del_username.innerHTML = result[0].username;
    del_email.innerHTML = result[0].email;
    del_phone.innerHTML = result[0].phone;
    del_id.innerHTML = result[0].id;
});

