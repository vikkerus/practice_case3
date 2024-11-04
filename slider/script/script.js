// установка индекса по-умолчанию
let imageIndex = 1;

// вызов функции показа слайда
showImages(imageIndex);

// показ следующего слайда, посде увелчиения индекса на 1
function nextImage() {
    showImages(imageIndex += 1);
}

// показ предыдущего слайда, посде уменьшения индекса на 1
function previousImage() {
    showImages(imageIndex -= 1);  
}

// установка текущего слайда
function currentImage(n) {
    showImages(imageIndex = n);
}

// функция перелистывания слайдов
function showImages(n) {

    let Images = document.getElementsByClassName("item");
    
    if (n > Images.length) {
      imageIndex = 1
    }
    if (n < 1) {
        imageIndex = Images.length
    }
  
    // перебор всех слайдов, делаем все слайды невидиммыми
    for (let Image of Images) {
        Image.style.display = "none";
    }
    // кроме текущего
    Images[imageIndex - 1].style.display = "block";    
}