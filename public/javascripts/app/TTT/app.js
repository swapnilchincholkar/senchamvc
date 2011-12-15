new Ext.Application({
  name: 'senchamvc',
  defaultUrl: 'business/index',
  launch: function() {
    this.views.viewport = new senchamvc.views.Viewport();
  }
});
