function userAdd() {
    var klientPhone = prompt('Введите номер телефона для связи:');
    while (true) {
        if (klientPhone !== "" ) {
            break;
        }
        else {
            alert("Введите, пожалуйста, свой номер телефона - поле не может быть пустым");
            var klientPhone = prompt('Введите номер телефона для связи:');
        }
    }
    
}