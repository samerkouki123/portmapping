"use strict";

module.exports.portmapping = function(parent) {
  var obj = {};
  obj.parent = parent;
  obj.meshServer = parent.parent;
  obj.debug = obj.meshServer.debug;
  obj.exports = [
    "onWebUIStartupEnd",
    "openSettings",
    "goPageStart",
    "mapUpdate",
    "resizeContent",
    "onDeviceRefreshEnd",
    "setUserRdpLinks",
    "updateUserRdpLinks",
    "dlRDPfile",
    "updateRdpDeviceLinks",
    "cantMap"
  ];

  obj.server_startup = function() {
    console.log("SERVER_STARTED");
  };

  obj.hook_agentCoreIsStable = function(myparent, gp) {
    console.log("AGENT_IS_CONNECTED");
  };

  return obj;
};