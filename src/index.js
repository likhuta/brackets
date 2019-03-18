
// // const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// // // let str='((()))()';
// // // let str='())(';
// let str='|()|';
// let str='|(|)';
// // let str='([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())';
// const config1 =[['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


module.exports = function check(str, bracketsConfig) { 
  // function check(str, bracketsConfig) { 

  let arrForCheck=str.split('');
  console.log(arrForCheck);
  let currentInd=0;
  let status=true; 

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
    let countSimillar=0;
    let {open, close}= findOpenClose();
    if(open==false || close==false){
      return false;
    }

    do{
      console.log('total---',total)
      console.log(open, close)
      if(open==close){
       
      }
   
      if(arrForCheck[currentInd]==open && open!=close){
        console.log('here ++')
        total++;
        console.log('total---',total)
      }
      if(arrForCheck[currentInd]==close && open!=close ){
        console.log('here --')
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
      currentInd++;
      console.log('currentInd---',currentInd)
      // console.log(arrForCheck.length-1)
    }
    while(currentInd<=arrForCheck.length)
  }
while(currentInd<=arrForCheck.length-1 && status==true){
  console.log('new call')
  status=compare();
  // console.log(status);
  currentInd++;
        console.log('currentInd---',currentInd)
}

  return status
}
// console.log( check(str,config1 ) )

