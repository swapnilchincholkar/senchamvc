senchamvc.models.Business = new Ext.regModel('senchamvc.models.Business', {

  fields: [
    {name: 'id' , type: 'int'},
    {name: 'remote_id', type: 'int'},
    {name: 'synced', type: 'boolean'},
    {name: 'name', type: 'string'},
    {name: 'contact_name', type: 'string'},
    {name: 'address', type: 'string'}
  ]
});

senchamvc.stores.remoteBusinesses = new Ext.data.Store({
  id: 'remoteBusinesses',
  model: 'senchamvc.models.Business',
  proxy: {
    type: 'ajax',
    url: 'http://192.168.1.159:3000/businesses.json',
    reader: {
      type: 'json',
      root: 'businesses',
      record: 'business'
    },
    writer: {
      type: 'json',
      record: 'business'
    }
  }
});

senchamvc.stores.localBusinesses = new Ext.data.Store({
  id: 'localBusinesses',
  model: 'senchamvc.models.Business',
  proxy: {
    type: 'localstorage',
    id: 'businessses'
  }
});

senchamvc.stores.remoteBusinesses.addListener('load', function () {
  var store = Ext.getStore('localBusinesses');
  store.getProxy().clear();
  store.data.clear();
  store.sync();
  this.each(function (record) {
    var business = senchamvc.stores.localBusinesses.add(record.data)[0];
  });
  senchamvc.stores.localBusinesses.sync();
});
