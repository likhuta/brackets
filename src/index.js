
// // const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// // // let str='((()))()';
// let str='|()|(||)||';
// let str='|()|(||)||';

// // let str='|(|)';
// // let str='111115611111111222288888822225577877778775555666677777777776622222';
// // // // let str='([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())';
// const config1 =[['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8'], ['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


module.exports = function check(str, bracketsConfig) { 
  // function check(str, bracketsConfig) { 

  let arrForCheck=str.split('');
  console.log(arrForCheck);
  let currentInd=0;
  let status=true; 
  let countSimillar=0;


  function findOpenClose(){
    let open=false;
    let close=false;
    let i=0;
    bracketsConfig.forEach(item => {
      // console.log(item[i])
      // console.log(arrForCheck[currentInd])
      if(item[i]==arrForCheck[currentInd]){
        open=item[i];
        close=item[i+1];
        return
      }
    });
    return {open, close}
  }

  function compare (){
    let total=0;
    let nextStep=true;
    let {open, close}= findOpenClose();
    if(open==false || close==false){
      return false;
    }

    do{

      // console.log('total general',total)
      // console.log(open, close)
      if(open==close && arrForCheck[currentInd]==open){
        countSimillar++;
        if(countSimillar%2==0){
          console.log('  чет  ' , countSimillar)
          total--;
        }
        if(countSimillar%2!=0){
          console.log('  не чет ' , countSimillar)
          total++;
        }
      }
      if(arrForCheck[currentInd]==open && open!=close ){
        total++;
        console.log('total++',total)
      }
      if(arrForCheck[currentInd]==close &&  open!=close ){
        total--;
        console.log('total---',total)
      }
      if((arrForCheck[currentInd]!=close) && (arrForCheck[currentInd]!=open) ){
        console.log('here new')
        nextStep=compare();
      }
 
      if(total==0 ){
        console.log('here GOOD')
        return true;
      }
      if(total<0 ||  nextStep==false){
        return false;
      }

      console.log('currentInd---',currentInd,arrForCheck[currentInd] )
      console.log('-----NEXT-----')
      currentInd++;

      // console.log(arrForCheck.length-1)
    }
    while(currentInd<=arrForCheck.length)
  }
while(currentInd<=arrForCheck.length-1 && status==true){
  console.log('new call')
  status=compare();
  // console.log(status);
  currentInd++;
        // console.log('currentInd---',currentInd)
}

  return status
}
// console.log( check(str,config1 ) )

