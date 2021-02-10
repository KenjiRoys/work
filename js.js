let image = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25'
]
let activeImageIndex = 0;
function changeImage(change) {
    let newIndex = activeImageIndex + change;
    if(newIndex >= image.length) {
        newIndex = 0;
    } else if(newIndex < 0){
        newIndex = image.length - 1;
    }
    activeImageIndex = newIndex;

    image.forEach(element => {
        document.getElementById(element).classList.remove('displayed-image');
    });
    let activeImageID = image[activeImageIndex];
    document.getElementById(activeImageID).classList.add('displayed-image');
}