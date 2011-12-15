senchamvc.views.BusinessIndex = Ext.extend(Ext.Panel, {
  dockedItems: [
    {
      xtype: 'toolbar',
      title: 'Businesses',
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
    id: 'businessesindex',
    scroll: 'vertical',
    width: Ext.Element.getViewportWidth()*0.9,
    store: senchamvc.stores.localBusinesses,
    //store: senchamvc.stores.remoteBusinesses,
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
    ),
    onItemDisclosure: function(record){
      Ext.dispatch({
        controller: 'business',
        action: 'show',
        id: record.getId(),
        animation: {type: 'slide', direction: 'left'}
      });
    },
    onItemTap: function(item) {
      record = this.getRecord(item);
      Ext.dispatch({
        controller: 'business',
        action: 'show',
        id: record.getId(),
        animation: {type: 'slide', direction: 'left'}
       });
     }
  }],
  initComponent: function() {
    senchamvc.stores.localBusinesses.load();
    senchamvc.views.BusinessIndex.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('BusinessIndex', senchamvc.views.BusinessIndex);
