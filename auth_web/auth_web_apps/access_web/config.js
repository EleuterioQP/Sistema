var authsUrl = 'https://boxing-leaf-10460.herokuapp.com/api/auths/';


var config = {

    authsUrl: authsUrl,


};

app

    .value('config_access', config);

app

    .constant('CONFIG', config);
