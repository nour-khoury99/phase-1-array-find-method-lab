// code your solution here
/*Array.prototype.filter() :want a list of all elements that meet in one donsition
  Array.prototype.find() : take a callback function
  Array.prototype.indexOf() : is the only one that doesn't takes a callback function
 */


  const record = [
    {year:"2018" , result:"L"},
    {year:"2017",result:"W"},
    {year:"2016",result:"N/A"}
  ]


  function superbowlWin(element,result){

   if( element.result == "W" ){
        return "win";
   }else{
    return undefined;
   }
    
  }

  console.log(record.find(superbowlWin));
