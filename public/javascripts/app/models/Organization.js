
senchamvc.models.Organization = new Ext.regModel('senchamvc.models.Organization', {
  fields: [
    {name: 'id' , type: 'int'},
    {name: 'remote_id', type: 'int'},
    {name: 'name', type: 'string'},
    {name: 'is_supported', type: 'boolean'}
    ]
});
  
senchamvc.stores.remoteOrganizations = new Ext.data.Store({
  id: 'remoteOrganizations',
  model: 'senchamvc.models.Business',
  proxy: {
    type: 'ajax',
    url: 'http://192.168.1.159:3000/organizations.json',
    reader:
     {
      type: 'json',
      root: 'organizations',
      record: 'organization'
      },
    writer: {
      type: 'json',
      record: 'organization'
     }
  }
});

senchamvc.stores.localOrganizations = new Ext.data.Store({
  id: 'localOrganizations',
  model: 'senchamvc.models.Business',
  proxy: {
    type: 'localstorage',
    id: 'organizations'
  }
});


senchamvc.stores.remoteOrganizations.addListener('load', function () {
  var store = Ext.getStore('localOrganizations');
  store.getProxy().clear();
  store.data.clear();
  store.sync();
  this.each(function (record) {
    var organization = senchamvc.stores.localOrganizations.add(record.data)[0];
  });
  senchamvc.stores.localOrganizations.sync();
});
    
