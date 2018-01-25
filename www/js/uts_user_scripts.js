/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
//         return false;
        localStorage.clear();
        window.location = "index.html";
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
