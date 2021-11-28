function imgSlider(any) {
    document.querySelector('.jacket').src = any;
}


const menutoggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}