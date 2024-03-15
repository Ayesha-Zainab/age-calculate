    document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('date');
    var btn = document.getElementById('btn');
    var ages = document.getElementById('ages');

    btn.addEventListener('click', function () {
        var dob = new Date(input.value);
        var date = new Date();
        var age = date.getFullYear() - dob.getFullYear();

        if (date.getMonth() < dob.getMonth() ||
            (date.getMonth() === dob.getMonth() && date.getDate() < dob.getDate())) {
            age--;
        }

        ages.innerHTML = "Your age is: " + age;
    });
});

