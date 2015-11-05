/**
* Lock.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      device_identifier:{
        type:'string'
      },
      owner:{
        model: 'user'
      },
      logs:{
        collection: 'log',
        via: 'lock'
      }
  }
};

