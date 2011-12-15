senchamvc.models.organization = new Ext.regModel('senchamvc.models.organization', {

  // fields for organization record
  // Declaration syntax is {name: <Name of data field>, type: '<data type>'}
  fields: [
    {name: 'id' , type: 'int'},
    {name: 'name', type: 'string'},
    {name: 'address', type: 'string'}
  ],
  proxy: {
    type: 'ajax',
    url: 'http://localhost:3000/organizations',
    reader: {
      type: 'json',
      record: 'organiation'
    },
    writer: {
      type: 'json',
      record: 'organization'
    }
  }
});

// Data store to get organizations from remote server
// also can be used to send updated data to remote server
senchamvc.stores.remoteOrganizations = new Ext.data.Store({
  id: 'remoteOrganizations',
  model: 'senchamvc.models.organization',
  proxy: {
    type: 'ajax',
    url: 'http://localhost:3000/organizations.json',
    reader: {
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

// Data store of locally stored organizations 
senchamvc.stores.localOrganizations = new Ext.data.Store({
  id: 'localOrganizations',
  model: 'senchamvc.models.organization',
  proxy: {
    type: 'localstorage',
    id: 'organizationses'
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
