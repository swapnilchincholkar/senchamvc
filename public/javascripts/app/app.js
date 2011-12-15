new Ext.Application({
  name: 'senchamvc',
  defaultUrl: 'Business/index',
  launch: function() {
    this.views.viewport = new senchamvc.views.Viewport();
  }
});
