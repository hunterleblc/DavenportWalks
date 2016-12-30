function scan(){
 console.log("clicked");
 cordova.plugins.barcodeScanner.scan(function(result){
 //success callback
 window.location.href=result.text;

 },function(error){
 //error callback
 alert(JSON.stringify(error));

 });
}