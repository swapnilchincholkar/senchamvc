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
            route: 'business/index'
          },
        {
            text: 'Causes',
            iconCls: 'info',
            route: 'organization/index'
          },
        ],
      },
    ],
});
