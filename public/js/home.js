import "../css/home.css";
import "./basic";
$(document).ready(() => {

    $(window).scroll(function() {
        var y = $(this).scrollTop();
        if (window.matchMedia("(orientation: portrait)")) {
            $('.generalDescCont').children().fadeIn(600)
        } else {
            if (y > 150 && y < 1000) {
            $('#generalDescCont1').children().fadeIn(600);
            } else {
            $('#generalDescCont1').children().fadeOut(600);
            //   $('.holder').css('display', 'show')
            }
            if (y > 500 && y < 1250) {
                $('#generalDescCont2').children().fadeIn(600);
            } else {
                $('#generalDescCont2').children().fadeOut(600);
            }
            if (y > 750 && y < 1750) {
                $('#generalDescCont3').children().fadeIn(600);

            } else {
                $('#generalDescCont3').children().fadeOut(600);
            }
            if (y > 1000  && y < 2000) {
                $('#generalDescCont4').children().fadeIn(600);

            } else {
                $('#generalDescCont4').children().fadeOut(600);
            }
        }
    });

    $('.areaPoint').on('click', event => {
        let area = $(event.currentTarget).attr('id');
        $('.popUp').toggle(500);
        depopulateTemplate();
        selectArea(area);
    })
    
    $('.gallaryGrid').on('click', ('img'), (event) => {
        let newSrc = $(event.currentTarget).attr('src');
        let oldSrc = $('#popUpImgCont').children('img').attr('src');
        $(event.currentTarget).attr('src', oldSrc);
        $('#popUpImgCont').children('img').attr('src', newSrc);
        // $('#section1').animate({scrollTop: 0}, 'fast');
    } )

    $('.back').on('click', event => {
        depopulateTemplate();
        $('.popUp').toggle(500);
    })

});

function selectArea(section) {
    switch (section) {
        case 'euroJenny':
            populateTemplate(euroJennyArr, 'Down hubbers and the euro', 'Image of the euro and the ramp to ramp.');
            break;
        case 'bowl':
            populateTemplate(bowlArr, 'The Bowl','Image of the large bowl.');
            break;
        case 'halfPipe':
            populateTemplate(halfPipeArr, 'The Halfpipe n Hubbers','Image of the half pipe.');
            break;
        case 'miniHalfPipeHip':
            populateTemplate(minihalfpipeArr, 'The Mini-halfpipe and Hip', 'Image of the mini half pip and hip.');
            break;
        case 'stairsHipAFrame':
            populateTemplate(stairsHipAframeArr, 'Large Hip and A-Frame','Image of the large hip and the A frame.');
            break;
        case 'street':
            populateTemplate(streetArr, 'The Street section', 'Image of the street section in level.');
            break;
        default:
            populateTemplate(streetArr, 'The Street section', 'Image of the street section in level.');
            break;
    };
}

function populateTemplate(imgArr, spotName, alt) {
    const popUpImgCont = document.getElementById('popUpImgCont');
    const popUpImg = document.createElement('img');
    popUpImg.src = imgArr[0]
    popUpImg.alt = alt;
    popUpImg.id = 'popUpImg';
    popUpImgCont.appendChild(popUpImg);
    document.getElementById('popUpName').textContent = spotName;
    let firstElement = imgArr.shift()
    // gallary population
    const gallaryGrid = document.getElementById('gallaryGrid');
    for (let imageSrc of imgArr) {
        let spotImg = document.createElement('img');
        spotImg.src = imageSrc;
        spotImg.alt = alt;
        gallaryGrid.appendChild(spotImg);
    }
    imgArr.unshift(firstElement)
}

function depopulateTemplate() {
    const popUpImg = document.getElementById('popUpImg')
    const popUpImgCont = document.getElementById('popUpImgCont');
    const gallaryGrid = document.getElementById('gallaryGrid');
    if (popUpImg) {
        popUpImgCont.removeChild(popUpImg);
        console.log(gallaryGrid.firstChild)
        while (gallaryGrid.firstChild) {
            
            gallaryGrid.removeChild(gallaryGrid.firstChild);
        };
    };
};


const euroJennyArr = [
    '../resources/level_imgs/eurojenny1.JPG',
    '../resources/level_imgs/eurojenny2.JPG',
    '../resources/level_imgs/eurojenny4.JPG',
    '../resources/level_imgs/eurojenny5.JPG',
    '../resources/level_imgs/eurojenny6.JPG',
    '../resources/level_imgs/eurojenny7.JPG',
    '../resources/level_imgs/eurojenny8.JPG'
]

const bowlArr = [
    '../resources/level_imgs/bowl1.JPG',
    '../resources/level_imgs/bowl2.JPG',
    '../resources/level_imgs/bowl3.JPG',
    '../resources/level_imgs/bowl4.JPG',
    '../resources/level_imgs/bowl5.JPG'
]

const halfPipeArr = [
    '../resources/level_imgs/halfpipe3.JPG',
    '../resources/level_imgs/halfpipe1.JPG',
    '../resources/level_imgs/halfpipe2.JPG',
    '../resources/level_imgs/halfpipe.JPG'
]

const minihalfpipeArr = [
    '../resources/level_imgs/minihalfpipe.JPG',
    '../resources/level_imgs/minihalfpipe2.JPG',
    '../resources/level_imgs/minihalfpipe4.JPG',
    '../resources/level_imgs/minihalfpipe6.JPG'
]
const stairsHipAframeArr = [
    '../resources/level_imgs/stairsHipAframe2.JPG',
    '../resources/level_imgs/stairsHipAframe3.JPG',
    '../resources/level_imgs/stairsHipAframe4.JPG',
    '../resources/level_imgs/stairsHipAframe5.JPG',
    '../resources/level_imgs/stairsHipAframe6.JPG'
]

const streetArr = [
    '../resources/level_imgs/street1.JPG',
    '../resources/level_imgs/street2.JPG',
    '../resources/level_imgs/street3.JPG',
    '../resources/level_imgs/street4.JPG'    
]
