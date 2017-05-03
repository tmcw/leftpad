var jsc = require("jsverify");
var leftpad = require("./");

// it pads to a length
jsc.assert(
  jsc.forall("char", jsc.integer(2, 100), function(ch, len) {
    return leftpad(ch, len).length === len;
  })
);

// running it generates the same output
jsc.assert(
  jsc.forall("char", jsc.integer(2, 100), function(ch, len) {
    return leftpad(leftpad(ch, len), len) === leftpad(ch, len);
  })
);

// It also pads numbers
jsc.assert(
  jsc.forall(jsc.integer(1, 10), jsc.integer(2, 100), function(ch, len) {
    return leftpad(ch, len).length === len;
  })
);
