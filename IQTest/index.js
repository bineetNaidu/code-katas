/**
 * 
 * @param {string} numbers 
 * @returns number or null
 */
function iqTest(numbers) {
 const odds = [];
 const evens = [];
 
 numbers.split(" ").forEach((numStr, idx) => {
   const num = parseInt(numStr);
   
   if(num % 2 === 0){
     evens.push({
       tag: "even",
       idx: idx + 1,
     });
   } else {
     odds.push({tag: "odd", idx: idx + 1});
   };
 });
    
  if(odds.length === 1) return odds[0].idx;
  if(evens.length === 1) return evens[0].idx;
  return null
}