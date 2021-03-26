$(document).ready(function(){




	
	$('.categ').click(function(){
		var catEgreso = $(this).attr('value');
		console.log(catEgreso);



		$('.egreso_descripcion1').hide();
		$('.valor_egreso1').hide();
		$('.cate').hide();
		$('.close1').hide();

		$('.egreso_descripcion1[value="'+catEgreso+'"]').show();
		$('.valor_egreso1[value="'+catEgreso+'"]').show();
		$('.cate[value="'+catEgreso+'"]').show();
		$('.close1[value="'+catEgreso+'"]').show();
		


		
	});


	$('.categ[value="todo"]').click(function(){
		$('.egreso_descripcion1').show();
		$('.valor_egreso1').show();
		$('.cate').show();
		$('.close1').show();


	});




});