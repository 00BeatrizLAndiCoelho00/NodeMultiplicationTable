

const { multiplication } = require('./model/calculator');
var multi = require('./model/calculator')

var readline = require('readline');

var dataInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//______________________________________________________________________________________________________//

console.log('\n (.❛ ᴗ ❛.) Hello, welcome to table calculator\n')

dataInput.question('♡ Please insert the smallest multiplication table ♡\n' , function(minimulMultiplicationTable){

  multiplicationTableMinumum = minimulMultiplicationTable

    if(minimulMultiplicationTable == ''){
        console.log('Please insert all data ( ﾒ ⌣̀ _ ⌣́ )')
        dataInput.close()

    }else if( 100 < minimulMultiplicationTable || 2 > minimulMultiplicationTable ){
        console.log('Please insert number betwenn 2 and 100 ( ﾒ ⌣̀ _ ⌣́ )')
        dataInput.close()

    }else if( isNaN(minimulMultiplicationTable)){
        console.log('Please insert numeric values ( ﾒ ⌣̀ _ ⌣́ ) ')
        dataInput.close()

    }else{//MAXIMUM TABLE VALUE ____________________________________________________________________________//

     dataInput.question('♡ Please insert the biggest multiplication table ♡\n', function(maximumMultiplicationTable){
      multiplicationTableMaximum = maximumMultiplicationTable

      if(maximumMultiplicationTable == ''){
        console.log('Please insert all data ( ﾒ ⌣̀ _ ⌣́ )')
        dataInput.close()

       }else if( 100 < maximumMultiplicationTable || 2 > maximumMultiplicationTable){
        console.log('Please insert number betwenn 2 and 100 ( ﾒ ⌣̀ _ ⌣́ )')
        dataInput.close()

       }else if( isNaN(maximumMultiplicationTable)){
        console.log('Please insert numeric values ( ﾒ ⌣̀ _ ⌣́ )')
        dataInput.close()

       }else{ //MINUMUM VALUE______________________________________________________________________________//
      
        dataInput.question('♡ Please insert the  minimum multiplier ♡ \n' ,function(minimumMultiplier){
          
            multiplierMinimum = minimumMultiplier

            if(minimumMultiplier == ''){
                console.log('Please insert all data ( ﾒ ⌣̀ _ ⌣́ )')
                dataInput.close()
        
            }else if( 50 < minimumMultiplier || 1 > minimumMultiplier){
                console.log('Please insert number betwenn 1 and 50 ( ﾒ ⌣̀ _ ⌣́ )')
                dataInput.close()
        
            }else if( isNaN(minimumMultiplier)){
                console.log('Please insert numeric values ( ﾒ ⌣̀ _ ⌣́ )')
                dataInput.close()
        
            }else{

                console.log('ok, now to finish (o ^ ▽ ^ o)')
             dataInput.question('♡ Please insert the maximum multiplier ♡ \n' , function(maximumMultiplier){

                multiplierMaximum = maximumMultiplier

                if(maximumMultiplier == ''){
                    console.log('Please insert all data ( ﾒ ⌣̀ _ ⌣́ )')
                    dataInput.close()
            
                }else if( 50 < maximumMultiplier || 1 > maximumMultiplier){
                    console.log('Please insert number betwenn 1 and 50 ( ﾒ ⌣̀ _ ⌣́ )')
                    dataInput.close()
            
                }else if( isNaN(maximumMultiplier)){
                    console.log('Please insert numeric values ( ﾒ ⌣̀ _ ⌣́ )')
                    dataInput.close()
            
                }else{
                    
                    multi = multi.multiplication(10, 20, 1, 7);
                     console.log(multi);
                     dataInput.close()

                }
             });
            }
        });
       }
      });      
    }
});



