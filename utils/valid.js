var valid = {
  checkParams: function(refobj,evalueobj){
    if(Object.keys(refobj).sort().toString() == Object.keys(evalueobj).sort().toString()){
      return true;
    }
    return false;
  },

  checkEmail: function(email){
    var exp = /^\w{1,}@\w{1,}[.]\w{2,3}$/g
    if (email.match(exp) == null){
      return false;
    }
    return true;
  },

  checkPassword: function(password){
    var contra = /^\w{0,}[A-Z]+\w{4,}[A-Z0-9a-z]$/g
    if(password.match(contra) == null){
      return false;
    }
    return true;
  }
};

module.exports = valid;
