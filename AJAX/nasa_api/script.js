var nasaDemoUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function displayImage(data){
    // $("<img>", {
    //     src: data.url,
    //     height: "100%",
    //     width: "100%",
    // }).appendTo('#image-container');

    //Another way to do the same thing
    $(document.createElement('img')).attr('src', data.url).appendTo('#image-container');
}


$.ajax({
    //url: `${nasaDemoUrl}&date=2021-12-16`,
    url : "https://api.nasa.gov/planetary/apod", //For this url we have added query parameters seperately in data.
    method: "GET",
    success: displayImage,
    //Passing query paremeters seperately
    data: {
        api_key: "DEMO_KEY",
        date: "2021-12-17"
    }
});