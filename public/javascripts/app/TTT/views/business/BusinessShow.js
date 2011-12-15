senchamvc.views.BusinessShow = Ext.extend(Ext.Panel, {
  scroll: 'vertical',
  styleHtmlContent: true,
  dockedItems: [{
    xtype: 'toolbar',
    title: 'Business',
    items: [{
      text: 'Back',
      ui: 'back',
      handler: function() {
        //Ext.redirect('Business/index');
        Ext.dispatch({
          controller: 'business',
          action: 'index',
          animation: {type: 'slide', direction: 'left'}
        });
      }
    }
  ]
  }
  ],
  items: [
    {tpl: [
      '<h4>{name}</h4>',
      '<br />',
      '<h4>{address}</h4>',
    ]},
  ],
  updateWithRecord: function(record) {
    Ext.each(this.items.items, function(item) {
      item.update(record.data);
    });
    var topToolbar = this.getDockedItems()[0];
    topToolbar.setTitle(record.get('name'));
  }

});
Ext.reg('BusinessShow', senchamvc.views.BusinessShow);
