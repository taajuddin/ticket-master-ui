// const players = ['sachin', 'virat', 'dhoni','yuvi']
// const indices = [1,3]

// function arrayExcept(players, indices) {
//         const selectedPlayer=players.filter(play=>{
//             return play.includes(play[indices])
//         })
    
//     // console.log(selectedPlayer)
//     return console.log(selectedPlayer)

// }

// console.log(arrayExcept(players, indices)) // ['sachin','dhoni'] 
// function twoSum(nums, target_num) {
//     var map = [];
//     var indexnum = [];
    
//     for (var x = 0; x < nums.length; x++)
//     {
//     if (map[nums[x]] != null)
//     {
//     var index = map[nums[x]];
//     indexnum[0] = index;
//     indexnum[1] = x;
//     break;
//     }
//     else
//     {
//     map[target_num - nums[x]] = x;
//     }
//     }
//     return indexnum;
//     }
//   console.log(twoSum([10,20,10,40,50,60,70],50));

// function firstNonRepeated(s) {
//  for(let i=0;i<s.length;i++) {
//     if (s.split('').filter(e => e === s[i]).length === 1) {
//       return s[i];
//     }
  
//   }
//   return null;
// }
// console.log(firstNonRepeated('abacddbec'))//e
// var getMax = function (str) {
//   var max = 0,
//       maxChar = '';
//    str.split('').forEach(function(char){
//      if(str.split(char).length > max) {
//          max = str.split(char).length;
//          maxChar = char;
//       }
//    });
//    return maxChar;
//  };
// function highestOccurance(a) {
//   let max = 0;
//   let result = ''
//   let cont=a.split('')
//   cont.forEach(function(char) {
//     if(a.split(char).length > max) {
//                max = a.split(char).length;
//                result = char;
//             }
//   })
//   return result
// }
// console.log(highestOccurance('aabbbbcccccccccd'))
// }
// function call(a){
//   let cont=a.split('')
//  return cont
// }
// console.log(call('aaaaaaaa bbbbbcd hello'))

//  //console.log(highestOccurance('aaabbbbcccccccccccdde'))
// function toCamelCase(str){
//   return str.split(' ').map(function(word,index){
//     // If it is the first word make sure to lowercase all the chars.
//     if(index == 0){
//       return word.toLowerCase();
//     }
//     // If it is not the first word only upper case the first char and lowercase the rest.
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join('');
// }
// //   let sum=str.split(' ')
//   let value 
//     sum.map(function(word,index){
//       if(index ===0){
//         return word.toLowerCase()
//       }
//       value= word.charAt(0).toUpperCase() +word.slice(1).toLowerCase()
//     }).join('');
//     return value
// }
//console.log(toCamelCase("javaScriptExercises"))
// function concat(){
//   // console.log(arguments,arguments.length)
//   let array=[]
//   for(let i=0;i<arguments.length;i++)
//   array.push(...arguments[i]);
//   return array
// }
// console.log(concat([10,20,30],[12,13]))

// function highestOccurance(a) {
//   let b = 7
//   let c = a.split('')
//   let result = ''
//   let count=0
//   for (let i = 0; i < c.length; i++){
//       count = 0
//       for (let j = 0; j < c.length; j++){
//           if (c[i] === c[j]) {
//               count = count+1
//           }
//       }
//       if (count > b) {
//           result=c[i]
//       }
//   }
//   return result
// }
// console.log(highestOccurance('aaaaaaaaaaabbbbbbccdde'))

// function Weight(a,b){
//   let A=a.toLowerCase();
//   let B= b.toLowerCase();
//   let resultA=0
//   let resultB=0
//   for(let i=0;i<A.length;i++){
//       resultA +=A.charCodeAt(i)
//   }
//   for(let i=0;i<B.length;i++){
//       resultB +=B.charCodeAt(i);
//   }
//     if(resultA>resultB){
//        return "1"
//      }
//      else if(resultA<resultB){
//        return "2"
//      }
//      else{
//       return "Equal"
//      }
     
// }
// console.log(Weight('javascript','javascript'))


// var ch = 'abc';
// for(let i=0;i<ch.length;i++){
//   var result = String.fromCharCode(ch[i]);
// console.log(result);

// }


/*
	Output: 65
*/

// function port(a,b){
//   let result , result1,result2
//   let y=0
//   let total=0
//   let obj={}
//   for(let i=0;i<b.length;i++){
//         y=a.indexOf(b[i][0])
//       //   if(total==0){
//       //    isNaN(y+1)?[y+1]:'company does not exist'
//       //   total=a[y+1]*b[i][1]
//       //   result1=obj[a[y]]=total
//       //   }
//       //   else{
//       //     total=a[y+1]*b[i][1]
//       //     result2=obj[a[y]]=total
//       //   }
//       // }
        
//    if(y>=0 && (a[y+1])>0){
//      if(total==0){
//       total=a[y+1]* b[i][1]
//       result1=obj[a[y]]=total
//     }else{
//       total=a[y+1]* b[i][1]
//       result2=obj[a[y]]=total
//     }
      
//      }
//     else{
//       obj[a[y+1]]=b[i][1]
//       obj[a[y]]="company does not exist"
//       obj.total=b[i][1]
//       return obj
//     }
    
//   }
//   result=result1+result2
//   obj.total=result
//   return obj
// }
// var ticker = ['ABC', 10, 'XYZ', 'BBB', 5];
// var portfolio = [['XYZ', 20], ['BBB', 10],['HOPE',10]];
// console.log(port(ticker,portfolio))


function totalPortfolioValue(a, b) {
  let output = {total: 0}
  for (const ele of b) {
      for (let i = 0; i < a.length; i++){
          if (ele[0] == a[i]) {
              output[ele[0]] = ele[1] * a[i + 1]
              output.total += ele[1]*a[i+1]
              break
          }
          else {
              output[ele[0]]='company doesnot exist'
          }
      }
  }
  return output
}
  var ticker = ['ABC', 10, 'XYZ', 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10],['HOPE',10]];
console.log(totalPortfolioValue(ticker,portfolio))
