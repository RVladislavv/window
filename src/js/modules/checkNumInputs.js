const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    //проверка, чтоб вводились именно цифры
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;