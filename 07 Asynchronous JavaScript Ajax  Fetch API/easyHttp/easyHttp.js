function easyHttp() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    // Common way to Fix in S5
    let self = this
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        }
        else{
            callback('Error: ' + self.http.status);
        }
    }

    // this.http.onload = () => {
    //     if(this.http.status === 200) {
    //         console.log(this.http.responseText);
    //     }
    // }

    this.http.send();
}