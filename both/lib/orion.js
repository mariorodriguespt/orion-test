orion.dictionary.addDefinition('body', 'texts',
    orion.attribute('froala', {
        label: 'Body',
        optional: true
    })
);

orion.addEntity('posts', {
    title: {
        type: String,
        label: "Title"
    },
    subheading:{
        type: String,
        label : 'SubHeading'
    },
    body: orion.attribute('froala', {
        label: 'Body',
        optional: true
    }),
    image :{
        type: String,
        label: 'Image'
    }
}, {
    icon: 'bookmark',
    sidebarName: 'Posts',
    pluralName: 'Posts',
    singularName: 'Post',
    tableColumns: [
        {
            data:'title',
            title: 'Title'
        },
        orion.attributeColumn( 'froala' , 'body', 'Preview' )
    ]
});

orion.dictionary.addDefinition('site-name', 'global', {
    type: String,
    label: "Site Title"
});