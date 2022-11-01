const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        //открытие при клике по изображению
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            //так как у родителя оригинальный путь к большому изображению
            const path = target.parentNode.getAttribute('href'); 
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }
        //скрытие при клике на подложку
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;