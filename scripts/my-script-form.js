$( document ).ready(function() {
  // Handler for .ready() called.
  alert("Hello World");
 
  
  
 

  // this code is for the volunteer form

 $(document).on('change', '#t-size', chkSize);
  
  function chkSize(){
    
    var t_size = $('#t-size').val();
    
    if (t_size == 'other') {
      //alert(t_size);
      
      
      $('#other').removeAttr('disabled');
    } //end if
    else{
      $('#other').attr('disabled', true);
        $('#other').val('');
    }    
        
  } //end function
  
  
  
});
