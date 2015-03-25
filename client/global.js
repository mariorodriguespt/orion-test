var helpers = {
    humanDate : function( date ){
        return moment( date).format('h:ma L');
    }
};

_.each(helpers, function(helper, key) {
    Template.registerHelper(key, helper);
});