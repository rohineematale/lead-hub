exports.aboutus = {
  handler: function (request, reply) {
            reply.file('./views/static/aboutus.html');
        }
    // handler: {
    //     file: './index.html'
    //     // directory: {
    //     //     path: '../views',
    //     //     index: true,
    //     //     listing: true
    //     // }
    // }
};

exports.welcome = {
  handler: function (request, reply) {
    reply.file('./views/index.html');
  }
};