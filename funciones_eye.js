const eye = document.getElementById('eyes');
const eye_c = document.getElementById('eye_close');


eye.addEventListener("click", function(){
	document.getElementById('presupuestototal').innerHTML = "------";

	$('.fa-eye').addClass(`change-eye`);
	$('.fa-eye').hide();
	$('.fa-eye-slash').addClass(`change-eye-b`);
	$('.fa-eye-slash').show();


})

eye_c.addEventListener("click", function(){
	/*document.getElementById('presupuestototal').innerHTML = formatoMoneda(presupuesto);*/
	$('.fa-eye-slash').hide();
	$('.fa-eye-slash').addClass(`change-eye`);
	$('.fa-eye').addClass(`change-eye-b`);
	$('.fa-eye').show();
	
})

