import "../css/upload_spot.css";
import "./basic"

$(document).ready(() => {
    var script = document.createElement('script');

    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCfXXiUvsUU0Q3gM2RtIYfp6JRRhyLmmN8&callback=initMap';
    // script.defer = true;

    // Attach your callback function to the `window` object
    window.initMap = function() {
        var uluru = {lat: 50.830741, lng: -0.133139};
        var map = new google.maps.Map(
            document.getElementById('locationSelector'), {zoom: 14, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map, draggable: true, title:"Drag me!", animation: google.maps.Animation.DROP});
        console.log(uluru)
    // JS API is loaded and available
        google.maps.event.addListener(marker, 'dragend', function (evt) {
            $('#location').val(evt.latLng);
            console.log('Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3));
            map.setCenter(marker.position);
            marker.setMap(map);
        });
    };

    // Append the 'script' element to 'head'
    document.head.appendChild(script);


    $('#spotName').keyup(function(){
        var currentText = $(this).val();
        $('#templateName').text(currentText);
    });
    $('#spotDesc').keyup(function(){
        var currentText = $(this).val();
        $('#section1Desc').text(currentText);
    });
    $("#fileUploadMain").on('change', function() {

        if (typeof (FileReader) !== "undefined") {

            const image_holder = $("#section1Img");
            image_holder.empty();

            const reader = new FileReader();
            reader.onload = function (e) {
                $("<img />", {
                    "src": e.target.result,
                    "class": "thumb-image"
                }).appendTo(image_holder);

            }
            image_holder.show();
            reader.readAsDataURL($(this)[0].files[0]);
            image_holder.css('height', 'unset')
        } else {
            alert("This browser does not support FileReader.");
        }
    });
    $("#fileUploadOthers").on('change', function () {

        //Get count of selected files
        var countFiles = $(this)[0].files.length;
   
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var image_holder = $(".gallaryGrid");
        image_holder.empty();
   
        if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof (FileReader) != "undefined") {
   
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles; i++) {
   
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $("<img />", {
                            "src": e.target.result,
                                "class": "thumb-image"
                        }).appendTo(image_holder);
                    }
   
                    image_holder.show();
                    reader.readAsDataURL($(this)[0].files[i]);
                }
   
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            alert("Please select only images");
        }
    });
    document.querySelector('form').onsubmit = function(event){
        event.preventDefault() // prevent form from posting without JS
        var xhttp = new XMLHttpRequest(); // create new AJAX request
    
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 201) { // sucess from server
            document.querySelector('.successUpload').style.display = 'flex';
            $('.successUpload').animate({
                top: '0'
            })
          } else { // errors occured
            document.querySelector(".uploadSpotForm h1").innerHTML = xhttp.status + 'error' ;
          }
        }
        let name = true;
        let desc = true;
        let location = true;
        let images = true;
        if ($('#spotName').val() == '') {
            $('#spotName').addClass('invalidInput');
            name = false;
        }
        if ($('#spotDesc').val() == '') {
            $('#spotDesc').addClass('invalidInput');
            desc = false;
        }
        if ($('#location').val() == '') {
            $('.map').addClass('invalidInput');
            $('#mapInvalid').fadeIn();
            location = false;
        }
        if ($('#fileUploadMain').val() == '') {
            $('#fileUploadMain').addClass('invalidInput');
            images = false;
        }
        if (name && desc && location && images) {
            $('#mapInvalid').fadeOut();
            $('.map').removeClass('invalidInput');
            xhttp.open("POST", "upload")
            const formData = new FormData();
            formData.append('name', document.getElementById('spotName').value)  // the name data
            formData.append('spotDesc', document.getElementById('spotDesc').value)  // the desc data
            formData.append('location', document.getElementById('location').value) // location data
            formData.append('mainImg', document.getElementById('fileUploadMain').files[0]) // since inputs allow multi files submission, therefore files are in array
            let othersLength = document.getElementById('fileUploadOthers').files.length;
            for (let i = 0;i < othersLength;i++) {
                formData.append('spotImgs', document.getElementById('fileUploadOthers').files[i])
            }
            xhttp.send(formData)
        }
    }
})    


