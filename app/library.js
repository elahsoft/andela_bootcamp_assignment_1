module.exports = {
 fizzBuzz: function(number){
 	var response = number;
 	if(number % 15 == 0){ 
 			return 'FizzBuzz';

 	}
 	if(number % 3 == 0){
 		response = 'Fizz';
 		return response;
 	}
 	else if(number % 5 == 0){
 			response = 'Buzz';
 			return response;
 		}
 	
 	 	
	return number;
}

}

