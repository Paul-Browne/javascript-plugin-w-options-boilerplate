
// IIFE - Immediately-Invoked Function Expression
(function(){
  
  // declare args as global for reference later 
  var args,
  
      // define defaults here
      defaults = {
        size: 30,
        color: "blue"
      };
  
  // the actual plugin
  fontify = function (options){
  
    // the arguments that will be passed to the plugin (if any)
    args = arguments[0];
    
    // check if the user has set any options, 
    // if so, check if the option set was
    // the one we are interested in. 
    // otherwise use the defaults
    var size = options ? (options.size ? options.size : defaults.size) : defaults.size;
    var color = options ? (options.color ? options.color : defaults.color) : defaults.color;
    
    // just a very simple script for use as an example
    var w = window.innerWidth;
    var bod = document.getElementsByTagName("body")[0];
    bod.style.fontSize = size + (w/10)+"px";
    bod.style.color = color;    
  };
 
  // attach an event listener (if needed)
  window.addEventListener("resize", function(){
  
    // pass the options that were set by the user (if any)
    fontify(args);
  });

})();
  
  
  
  // initiate the plugin
  // the user would usually call this
  // just before the closing body tag
  // or in some other plugin/framework
  fontify({
    color:"pink",
    size : 20
  });
