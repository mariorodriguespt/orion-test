Meteor.publish('authorName' , function( userId ){
    return Meteor
            .users.find({
            _id : userId
        },{
            fields : {
                'profile.name' : 1
            }
        })
});
