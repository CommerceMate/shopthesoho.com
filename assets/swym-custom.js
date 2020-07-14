function swymCallbackFn(){
  // your API calls go here
  if(_swat){

    document.addEventListener("swym:page-loaded",function(event){
      //console.time("swym:filter-loaded");
      var rBody = event.detail.data;
      var emptyElem = document.createElement('div');
      var emptyScriptContainer = document.createElement('div');
      emptyScriptContainer.className = "swym-filter-script-tags";
      emptyElem.innerHTML = rBody;
      var swymDataElems = emptyElem.querySelectorAll('script.swym-product-view-snippet');
      //console.log("swymDataElems", swymDataElems.length);
      for(var i = 0; i < swymDataElems.length; i++) {
        var scriptData = swymDataElems[i];
        var fn = new Function(scriptData.innerText);
        fn.call();
      }
      window.SwymCallbacks = window.SwymCallbacks || [];
      window.SwymCallbacks.push(function() {
        window._swat.initializeActionButtons('.CustomQuickshopModal');
      });
     // console.timeEnd("swym:filter-loaded");
    });

  }
}

if(!window.SwymCallbacks){
  window.SwymCallbacks = [];
}
window.SwymCallbacks.push(swymCallbackFn);
