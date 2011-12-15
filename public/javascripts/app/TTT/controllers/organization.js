Ext.regController('organization',{

  init: function(options) {
    var store = Ext.getStore('localOrganizations');
    store.getProxy().clear();
    store.data.clear();
    store.sync();
    senchamvc.stores.remoteOrganizations.load();
    senchamvc.stores.localOrganizations.load();
  },

  index: function(options) {
    senchamvc.stores.localOrganizations.load();
    if (! this.index)
      {
      this.indexView = this.render({
      xtype: 'OrganizationIndex',
      });
    }
    senchamvc.views.viewport.setActiveItem(this.index, options.animation);
  },

});
