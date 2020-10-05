const lgtv = require('../index');
/*---------------------------------------------------------------------------*/
const retry_timeout = 1;
const run_test = function() {
    lgtv.discover_ip(retry_timeout, function(err, ipaddr) {
      if (err) {
        console.log("Failed to find TV IP address on the LAN. Verify that TV is on, and that you are on the same LAN/Wifi.");
    
      } else {
        console.log("Found TV at address " + ipaddr + ", running example.");

        lgtv.connect(ipaddr, function(err){
          console.log(123123)
          if (!err) {
            lgtv.sw_info(function(e, response) {
              console.log(e, response)
            });
          }
        });
      }
    });
};

run_test();