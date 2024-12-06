import myGallery from './gallery.js';
const galleryDiv = document.querySelector('.imgmain2');
let myCard = '';



const section = (myImg) =>{

    myCard = document.createElement('div');
    myCard.classList.add('imagecarddiv');
    const galleryimg = document.createElement('img');
    galleryimg.classList.add('imagecard');
    galleryimg.src = myImg.img;
    galleryimg.alt='img'
    myCard.append(galleryimg);
};
myGallery.map((e)=> {
    galleryDiv.append(myCard);
    section(e);
});
