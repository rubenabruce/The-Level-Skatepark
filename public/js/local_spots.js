import "../css/local_spots.css";
import "./basic";

$(document).ready(() => {
    var script = document.createElement('script');

    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCfXXiUvsUU0Q3gM2RtIYfp6JRRhyLmmN8&callback=initMap';
    script.defer = true;

    // Attach your callback function to the `window` object
    window.initMap = function(position) {
        var uluru = position;
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 14, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map, draggable: false, title:"Drag me!", animation: google.maps.Animation.DROP});
        // console.log(uluru)
        // JS API is loaded and available
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            $('#location').val(evt.latLng);
            // console.log('Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3));

        });
    };

    // Append the 'script' element to 'head'
    document.head.appendChild(script);

    // make request for data 
    getData();
    async function getData() {
        const response = await fetch('local_spots.html/api');
        const data = await response.json();
        // console.log(data);
        window.spotsArray = data.spots;
        for (let item of spotsArray) {
            spotTemplate(item.id, item);
        }
    }

    // creating spot template
    function spotTemplate(index, obj) {
        const section2grid = document.getElementById('section2grid');
        let rating = 4; // will change this to obj.rating once completed
        const spotCont = document.createElement('div');
        const spotImage = document.createElement('img');
        const spotDesc = document.createElement('div');
        const spotName = document.createElement('h3');
        // const starCont = document.createElement('div')
        const spotDescP = document.createElement('p');

        spotCont.className = `spotCont`;
        spotCont.id =  index;

        spotImage.src = obj.main_image;
        spotImage.alt = "A spot";
        spotCont.appendChild(spotImage);

        spotDesc.className = 'spotDesc';
        spotCont.appendChild(spotDesc);

        spotName.textContent = obj.name;
        spotDesc.appendChild(spotName);

        // for stars
        // for (let i = 0;i < 5;i++) {
        //     let starContSpan = document.createElement('span');
        //     let starContSpanDiv = document.createElement('div');
        //     starContSpanDiv.className = "star";
        //     if (rating < i) {
        //         starContSpanDiv.className = "star checked"
        //     }
        //     starContSpan.appendChild(starContSpanDiv);
        //     starCont.appendChild(starContSpan);
        // }

        // starCont.className = "starCont";
        // spotDesc.appendChild(starCont);

        spotDescP.textContent = obj.desc;
        spotCont.appendChild(spotDescP);

        section2grid.appendChild(spotCont);
    }

    $('.section2grid').on('click', ('.spotCont'), (event) => {

        depopulateTemplate();
        depopulateComments();
        

        let id = $(event.currentTarget)[0].id - 1;
        console.log(id)
        console.log(window.spotsArray) 
        
        const positionArr = window.spotsArray[id].position.split(',');

        populateTemplate(id);
        populateComments(id);

        let positionObj = {
            lat: parseFloat(positionArr[0].substring(1)),
            lng: parseFloat(positionArr[1].slice(0, -1))
        }

        window.initMap(positionObj);

        $('.main').addClass("mainJQ", 500);

        $('body').css({
            backgroundColor: '#7f8688',
            backgroundImage: 'none'
        })

        $('.inWall').animate({
            left: '0px'
        })

        $('.titleCont').addClass("hide")
        
        $(".section2").addClass("section2JQ", 500);

        $(".section2grid").addClass("section2gridJQ", 500);

        $(".section2gridContainer").addClass("section2gridContainerJQ", 500);

        $(".bottomNav").addClass("bottomNavJQ", 500);
    });

    $("#arrow").on('mouseenter', () => {
        $("#arrow").toggleClass('flip');
    }).on('mouseleave', () => {
        $("#arrow").toggleClass('flip');
    });

    $("#arrow").on('click', () => {

        depopulateTemplate();
        depopulateComments();

        $('.main').removeClass("mainJQ", 500);

        $('.inWall').animate({
            left: '-100%'
        })

        $('.titleCont').removeClass("hide", 600);
        
        $(".section2").removeClass("section2JQ", 500);

        $(".section2grid").removeClass("section2gridJQ", 500);

        $(".section2gridContainer").removeClass("section2gridContainerJQ", 500);

        $(".bottomNav").removeClass("bottomNavJQ", 500);
    });

    $('footer').css('display', 'none');

    // Selecting an image from the gallary

    $('.gallaryGrid').on('click', ('img'), (event) => {
        let newSrc = $(event.currentTarget).attr('src');
        let oldSrc = $('#section1ImgCont').children('img').attr('src');
        $(event.currentTarget).attr('src', oldSrc);
        $('#section1ImgCont').children('img').attr('src', newSrc);
        $('#section1').animate({scrollTop: 0}, 'fast');
    } )

    //form
    document.querySelector('form').onsubmit = function(event){
        event.preventDefault() // prevent form from posting without JS
        
        let comment = {
            commentName: $('#commentName').val(),
            commentContent: $('#commentContent').val(),
            spotID: $('#spotID').val()
        }
        // console.log(comment)

        let nameboo = true;
        let contentboo = true;
        if ($('#commentName').val() == '') {
            nameboo = false;
            $('#commentName').addClass('invalidInput');
        }
        if ($('#commentContent').val() == '') {
            contentboo = false;
            $('#commentContent').addClass('invalidInput');
        }
        if (nameboo && contentboo) {
            $('#commentContent').removeClass('invalidInput');
            $('#commentName').removeClass('invalidInput');
            $.post('local_spots.html/comment', comment).done(function (data) {
                if (data) {
                    // console.log(comment)
                    // console.log(data.comment);
                    createComment(data.comment);
                    const count = document.querySelector('#commentsCounter').textContent;
                    document.querySelector('#commentsCounter').textContent = +count + 1;
                } else {
                    alert('err')
                }
            })
        }
        $('#commentContent').val('');
        $('#commentName').val('')
    }
     
    function createComment(comment) {
        const comments = document.createElement('div');
        comments.className = 'comments';

        const commentName = document.createElement('h5');
        commentName.textContent = comment.commentName;
        comments.appendChild(commentName);

        const commentP = document.createElement('p');
        commentP.textContent = comment.commentContent;
        comments.appendChild(commentP);

        document.querySelector('.commentsHolder').appendChild(comments);
    }

    function populateTemplate(id) {
        const flex = document.getElementById('flex');
        const section1ImgCont = document.getElementById('section1ImgCont');
        const section1DescCont = document.getElementById('section1DescCont');

        const spot = window.spotsArray[id];

        const section1Name = document.createElement('h2');
        const section1Img = document.createElement('img');
        const section1Desc = document.createElement('p');
        
        section1Name.textContent = spot.name;
        section1Name.id = 'section1Name';
        flex.appendChild(section1Name);

        section1Img.src = spot.main_image;
        section1Img.alt = 'A spot';
        section1Img.id = 'section1Img';
        section1ImgCont.appendChild(section1Img);

        section1Desc.textContent = spot.desc;
        section1Desc.id = 'section1Desc';
        section1DescCont.appendChild(section1Desc);

        // holds id of spot 
        $('#spotID').val(id);
        
        updateGallary(id)
    }

    function depopulateTemplate() {
        const section1Name = document.getElementById('section1Name');
        const section1Img = document.getElementById('section1Img');
        const section1Desc = document.getElementById('section1Desc');
        const gallaryGrid = document.getElementById('gallaryGrid');
        if ( section1Name || section1Img || section1Desc) {
            document.getElementById('flex').removeChild(section1Name);
            document.getElementById('section1ImgCont').removeChild(section1Img);
            document.getElementById('section1DescCont').removeChild(section1Desc);
            while (gallaryGrid.firstChild) {
                gallaryGrid.removeChild(gallaryGrid.firstChild);
            }
        }
    }

    function updateGallary(id) {
        let imagesArr = window.spotsArray[id].images.split(',');
        const gallaryGrid = document.getElementById('gallaryGrid');
        for (let imageSrc of imagesArr) {
            let spotImg = document.createElement('img');
            spotImg.src = imageSrc;
            spotImg.alt = "A spot";
            gallaryGrid.appendChild(spotImg);
        }
    }

    async function getComments(id) {
        const response = await fetch(`local_spots.html/comments/${id}`)
        const data = await response.json();
        return await data;
    }

    async function populateComments(id) {
        const commentArr = await getComments(id);
        document.querySelector('#commentsCounter').textContent = commentArr.comments.length;
        for (let comment of commentArr.comments) {
            createComment(comment);
        }
    }

    function depopulateComments() {
        document.querySelector('.commentsHolder').innerHTML = '';
    }
});