const api = require('./srv/api');
const port = process.env.PORT || 3000;

api.listen(port, function () {
      console.log('API service listening on port ' + port);
    });