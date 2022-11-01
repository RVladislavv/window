import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    //получить все формы со страницы и все импуты
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    
    //проверка, чтоб вводились именно цифры(через регулярку остальное удалятся будет)
    checkNumInputs('input[name="user_phone"]'); //селектор форм с вводом телефонов

    //Объект с текстами для пользователя(загрузка, успешно, неуспешно)
    const message = {
        fail: 'Ошибка',
        wait: 'Идёт отправка',
        success: 'Отправлено',
    };

    //функия по отправке сообщений
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.wait; //вывод статуса 
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    //функция для очистки формы
    const clearValue = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    //перебераем все формы, отменяем для каждой стандартное поведение браузера
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            //сообщение о статусе отправки
            let messageDiv = document.createElement('div');
            messageDiv.classList.add('status');
            item.appendChild(messageDiv);

            //объект Форма
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') { //Отправка итогового окна из калькулятора
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            //отправляем данные на сервер, 
            //а дальеш получаем ответ и выводим ответ в див созданный
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    messageDiv.textContent = message.success;
                })
                .catch(() => messageDiv.textContent = message.fail)
                .finally(() => {
                    clearValue();
                    setTimeout(() => {
                        messageDiv.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;