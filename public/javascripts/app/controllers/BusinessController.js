Ext.regController('Business',{

  init: function(options) {
    senchamvc.stores.remoteBusinesses.load();
    senchamvc.stores.localBusinesses.load();
  },

  index: function(options) {
    senchamvc.stores.localBusinesses.load();
    if (! this.indexView)
    {
        this.indexView = this.render({
          xtype: 'BusinessIndex',
        });
    }
    senchamvc.views.viewport.setActiveItem(this.indexView, options.animation);
  },

  show: function(options) {
    var id = parseInt(options.id);
    var business = senchamvc.stores.localBusinesses.getById(id);
    if (business) 
    {
      if (! this.showView)
      {
        this.showView = this.render({
          xtype: 'BusinessShow',
        });
      }
    this.showView.updateWithRecord(business);
    senchamvc.views.viewport.setActiveItem(this.showView, options.animation);
    }
  },

});
