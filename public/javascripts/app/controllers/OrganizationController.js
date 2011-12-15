Ext.regController('Organization',{

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
    if ( ! this.indexView)
    {
      this.indexView = this.render({
        xtype: 'OrganizationIndex',
      });
    }
    senchamvc.views.viewport.setActiveItem(this.indexView, options.animation);
  },

  show: function(options) {
    var id = parseInt(options.id);
    var organization = senchamvc.stores.localOrganizations.getById(id);
    if (organization) 
    {
      senchamvc.views.organizationShow.updateWithRecord(organization);
      senchamvc.views.viewport.setActiveItem(senchamvc.views.organizationShow, options.animation);
     }
  },

});
