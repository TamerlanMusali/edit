let users = [
    {
        name: "tamerlan13",
        password: "tamerlan13",
        todos: [
            {
                id: 1,
                title: 'Title', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, quibusdam nemo vitae cum earum aperiam odit neque explicabo est voluptatem autem. Ipsam velit minima quo earum provident nam alias quae?',
            },
        ],
    },
];


if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}

users = JSON.parse(localStorage.getItem('users'))


$('.place').on('input', function () {
    if (
        $('#name').val().length >= 8 &&
        $('#password').val().length >= 6
    ) {
        $('.btn').attr('disabled', false);
    } else {
        $('.btn').attr('disabled', true);
    }
});


$('form').on('submit', function (event) {
    event.preventDefault


    let userExist = users.some(
        (user) =>
            user.name === $('#name').val() && user.password === $('#password').val()
    )

    if (userExist) {
        localStorage.setItem('currentUser', $('#name').val())
        $('.place').val('')
        location.href = '../../Main.html'
    } else {
        alert('Your password or Name is incorrect')
    }
})