const box = document.getElementById('interactive-box');


box.addEventListener('click',() => {
    const isCircle = box.style.borderRadius === '50%';
    if (isCircle) {
        box.style.backgroundColor = '#007bff';
        box.style.borderRadius = '5px';
    }else {
        box.style.backgroundColor = '#28a754';
        box.style.borderRadius = '50%';

    }
});