let display=document.getElementById("display")
        
        function addValue(value){
            display.value=display.value+value;
        }
        function deleteval(){
            display.value=display.value.slice(0,-1)
        }
        function clearvalue(){
         display.value='';   
        }