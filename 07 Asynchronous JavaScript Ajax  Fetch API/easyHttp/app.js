const http = new easyHttp;

// Get posts
const posts = http.get('https://jsonplaceholder.typicode.com/posts',
function(err, response) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(response);
    }
}
);