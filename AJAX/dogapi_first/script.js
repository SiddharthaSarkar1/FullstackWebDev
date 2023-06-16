function fetchRandomDogImage() {
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);

        var responseJSON = JSON.parse(xhrRequest.response);
        var imageURL = responseJSON.message;
        $("#dog-img").attr('src', imageURL);
    };

    xhrRequest.onerror = function(){
        console.log("Request Failed!!");
    }

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();


    //*****Fetch using JQuery ajax method ===>

    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function (data) {
    //         console.log(data);
    //         var imageURL = data.message;
    //         $("#dog-img").attr('src', imageURL);
    //     }
    // }).fail(function(){
    //     console.log("Request Failed")
    // });;

    //****Fetch using JQuery get method ===>

    // $.get({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     success: function (data) {
    //         console.log(data);
    //         var imageURL = data.message;
    //         $("#dog-img").attr('src', imageURL);
    //     }
    // }).fail(function(){
    //     console.log("Request Failed")
    // });
}


$("#fetch-dog-image-button").click(fetchRandomDogImage);