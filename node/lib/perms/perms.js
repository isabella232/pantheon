// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var perms,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  perms = {};

  perms._has_resource_role = function(user, resource, role) {
    var _ref;
    return _ref = resource + '|' + role, __indexOf.call(user.roles, _ref) >= 0;
  };

  perms._has_team_role = function(user, team, role) {
    var user_id;
    user_id = user.name;
    return __indexOf.call(team.roles[role] || [], user_id) >= 0;
  };

  perms._is_resource_admin = function(user, resource) {
    return perms._has_resource_role(user, resource, 'admin');
  };

  perms._is_team_admin = function(user, team) {
    return perms._has_team_role(user, team, 'admin');
  };

  if (typeof window !== "undefined" && window !== null) {
    window.kratos = {
      perms: perms
    };
  } else if (typeof exports !== "undefined" && exports !== null) {
    require('./kratos')(perms);
    require('./gh')(perms);
    module.exports = perms;
  }

}).call(this);
