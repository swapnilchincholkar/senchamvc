senchamvc.models.Business = new Ext.regModel('senchamvc.models.Business', {

  // fields for business record
  // Declaration syntax is {name: <Name of data field>, type: '<data type>'}
  fields: [
    {name: 'id' , type: 'int'},
    {name: 'name', type: 'string'},
    {name: 'address', type: 'string'}
  ],
  proxy: {
    type: 'ajax',
    url: 'http://localhost:3000/businesses',
    reader: {
      type: 'json',
      record: 'business'
    },
    writer: {
      type: 'json',
      record: 'business'
    }
  }
});

// Data store to get businesses from remote server
// also can be used to send updated data to remote server
senchamvc.stores.remoteBusinesses = new Ext.data.Store({
  id: 'remoteBusinesses',
  model: 'senchamvc.models.business',
  proxy: {
    type: 'ajax',
    url: 'http://localhost:3000/businesses.json',
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

// Data store of locally stored businesses 
senchamvc.stores.localBusinesses = new Ext.data.Store({
  id: 'localBusinesses',
  model: 'senchamvc.models.business',
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
