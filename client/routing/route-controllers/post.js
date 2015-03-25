PostController = RouteController.extend({
    layoutTemplate  : 'masterLayout',
    template        : 'postView',

    waitOn : function(){
        var postId = this.params._id;

        return [
            orion.subs.subscribe( 'entity' , 'posts' , { _id : postId } )
        ];
    },

    data : function(){
        var postId = this.params._id;

        if( this.ready() ){
            return orion.entities.posts.collection.findOne( postId );
        }
    }
});
