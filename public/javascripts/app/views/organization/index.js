senchamvc.views.OrganizationIndex = Ext.extend(Ext.Panel, {
  dockedItems: [
    {
      xtype: 'toolbar',
      title: 'Organizations',
      items: []
    } 
  ],
  layout: {
    type: 'vbox',
    align: 'center',
    pack: 'center'
  },
  items: [{
    xtype: 'list',
    id: 'organizationsindex',
    scroll: 'vertical',
    width: Ext.Element.getViewportWidth()*0.9,
    store: senchamvc.stores.localOrganizations,
    style: {
      background: '#ffffff'
    },
    itemTpl: new Ext.XTemplate(
       '<tpl for=".">',
       '<div>',
       '{name}',
       '</div>',
       '<div>',
       '{address}',
       '</div>',
       '</tpl>'
    )
  }],
  initComponent: function() {
    senchamvc.stores.localOrganizations.load();
    senchamvc.views.OrganizationIndex.superclass.initComponent.apply(this, arguments);
  }
});
Ext.reg('OrganizationIndex', senchamvc.views.OrganizationIndex);

