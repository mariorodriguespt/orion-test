Template.postView.rendered = function(){
    var self = this;

    //Josh: For a blog this is not the best approach, for a true app it is
    self.autorun(function(){
        var data = Template.currentData();

        self.subscribe( 'authorName' , data._id );
    });
};

Template.postView.helpers({
    authorName : function(){
        var user = Meteor.users.findOne( this.createdBy );

        return user && user.profile && user.profile.name;
    }
});
