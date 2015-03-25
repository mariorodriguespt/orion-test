Template.homepage.created = function(){
    this.orionSub = orion.subs.subscribe('entity', 'posts');
};

Template.homepage.helpers({
    isReady : function(){
       var instance = Template.instance();
       return instance.orionSub.ready();
    },
    posts : function(){
        return orion.entities.posts.collection.find();
    }
});
