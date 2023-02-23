
const { multiplication } = require('./model/calculator');

var readline = require('readline');

var dataInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//______________________________________________________________________________________________________//

dataInput.question('Please insert the smallest multiplication table\n' , function(minimulMultiplicationTable){

  multiplicationTableMinumum = minimulMultiplicationTable

    if(minimulMultiplicationTable == ''){
        console.log('Please insert all data')
        dataInput.close()

    }else if( 100 < minimulMultiplicationTable || 2 > minimulMultiplicationTable ){
        console.log('Please insert number betwenn 2 and 100')
        dataInput.close()

    }else if( isNaN(minimulMultiplicationTable)){
        console.log('Please insert numeric values')
        dataInput.close()

    }else{//MAXIMUM TABLE VALUE ____________________________________________________________________________//

     dataInput.question('Please insert the biggest multiplication table\n', function(maximumMultiplicationTable){
      multiplicationTableMaximum = maximumMultiplicationTable

      if(maximumMultiplicationTable == ''){
        console.log('Please insert all data')
        dataInput.close()

       }else if( 100 < maximumMultiplicationTable || 2 > maximumMultiplicationTable){
        console.log('Please insert number betwenn 2 and 100')
        dataInput.close()

       }else if( isNaN(maximumMultiplicationTable)){
        console.log('Please insert numeric values')
        dataInput.close()

       }else{ //MINUMUM VALUE______________________________________________________________________________//
      
        dataInput.question('Please insert the  minimum multiplier\n' ,function(minimumMultiplier){
          
            multiplierMinimum = minimumMultiplier

            if(minimumMultiplier == ''){
                console.log('Please insert all data')
                dataInput.close()
        
            }else if( 50 < minimumMultiplier || 1 > minimumMultiplier){
                console.log('Please insert number betwenn 1 and 50')
                dataInput.close()
        
            }else if( isNaN(minimumMultiplier)){
                console.log('Please insert numeric values')
                dataInput.close()
        
            }else{

             dataInput.question('Please insert the maximum multiplier\n' , function(maximumMultiplier){

                multiplierMaximum = maximumMultiplier

                if(maximumMultiplier == ''){
                    console.log('Please insert all data')
                    dataInput.close()
            
                }else if( 50 < maximumMultiplier || 1 > maximumMultiplier){
                    console.log('Please insert number betwenn 1 and 50')
                    dataInput.close()
            
                }else if( isNaN(maximumMultiplier)){
                    console.log('Please insert numeric values')
                    dataInput.close()
            
                }else{
                    
                    multi = multiplication(1,2);

                     console.log(multi);

                }
             });
            }
        });
       }
      });
            
    }
});



