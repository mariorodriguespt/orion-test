
Router.route('homepage',{
    path: '/',
    controller: 'HomeController'
});

Router.route('post',{
    path: '/post/:_id',
    controller: 'PostController'
});
