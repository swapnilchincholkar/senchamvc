Ext.regController('business',{
  
  init: function(options) {
    var store = Ext.getStore('localBusinesses');
    store.getProxy().clear();
    store.data.clear();
    store.sync();
    senchamvc.stores.remoteBusinesses.load();
    senchamvc.stores.localBusinesses.load();
  },

  index: function(options) {
    senchamvc.stores.localBusinesses.load();
    if (!this.indexView)
    {
      this.indexView = this.render({
        xtype: 'BusinessIndex',
      });
    }
    senchamvc.views.viewport.setActiveItem(this.indexView, options.animation);
  },

  show: function(options) {
    var id = parseInt(options.id);
        
    // From data store get business having this id
    var business = senchamvc.stores.localBusinesses.getById(id);

    // if record exists then Update the view of show business to show data of fetched record
    // and set this view as active item in container
    if(business) 
    {
      if (!this.showView)
      {
        this.showView = this.render({
          xtype: 'BusinessShow',
        });
      }
      this.show.updateWithRecord(business);
      senchamvc.views.viewport.setActiveItem(this.showView, options.animation);
     }
  },

});
