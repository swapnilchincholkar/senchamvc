senchamvc.views.Viewport = Ext.extend(Ext.Panel, {
  fullscreen: true,
  layout: 'card',
  cardSwitchAnimation: 'slide',
  dockedItems: [
    {
     xtype: 'TabBarMvc',
     items: [
       {
        text: 'Businesses',
        iconCls: 'home',
        route: 'Business/index'
       },
       {
        text: 'Causes',
        iconCls: 'info',
        route: 'Organization/index'
       },
     ],
    },
  ],
});
