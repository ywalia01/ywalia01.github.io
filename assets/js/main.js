var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/ywalia01/repos', true);

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
}

request.send();