function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	var total ;
	$scope.services = [
		{
			name: 'Android App Development',
			price: 500,
			active:true
		},{
			name: 'IOS App Development',
			price: 800,
			active:false
		},{
			name: 'Website Development',
			price: 250,
			active:false
		},{
			name: 'Backend API Development',
			price: 300,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		 total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};

	$scope.payTotal = function(){
		alert("Great! Your order has been placed. Complete your order by Paying "+total+"$ through Paytm to my number : xxx-xxx-xxxx");
	}
}
