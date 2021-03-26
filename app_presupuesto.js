const ingresos = [

];

const egresos = [

];

let cargarApp = ()=>{
	
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
	
}

let totalIngresos = ()=>{
	let totalIngreso = 0;
	for(let ingreso of ingresos){
		totalIngreso += ingreso.valor;
	}
	return totalIngreso;
}

let totalEgresos = ()=>{
	let totalEgreso = 0;
	for(let egreso of egresos){
		totalEgreso += egreso.valor;
	}
	return totalEgreso;
}










let cargarCabecero=()=>{
	let presupuesto = totalIngresos() - totalEgresos();
	let procentajeEgreso = (totalEgresos() / totalIngresos());
	if (totalIngresos() == 0 && totalEgresos() >0) {
		document.getElementById('porcentaje').innerHTML = "S/ingreso";
	}else if(totalEgresos() == 0 && totalIngresos() == 0){
	
	document.getElementById('porcentaje').innerHTML = null;
	
	}else if(totalIngresos()< totalEgresos()){
		document.getElementById('porcentaje').innerHTML = "S/ingreso";
	}else{
		document.getElementById('porcentaje').innerHTML = formatoPorcentaje(procentajeEgreso);
	}

	document.getElementById('presupuestototal').innerHTML = formatoMoneda(presupuesto);

	eye_c.addEventListener("click", function(){
		document.getElementById('presupuestototal').innerHTML = formatoMoneda(presupuesto);
		document.getElementById('ingresostotales').innerHTML = formatoMoneda(totalIngresos());
		document.getElementById('egresostotales').innerHTML = formatoMoneda(totalEgresos());
	
		$('.fa-eye-slash').hide();
		$('.fa-eye-slash').addClass(`change-eye`);
		$('.fa-eye').addClass(`change-eye-b`);
		$('.fa-eye').show();

	
	
})


	document.getElementById('ingresostotales').innerHTML = formatoMoneda(totalIngresos());
	document.getElementById('egresostotales').innerHTML = formatoMoneda(totalEgresos());

	
	
}



const formatoMoneda=(valor)=>{
	return valor.toLocaleString('en-AR', {style:'currency', currency:'USD', minimumFractionDigits:2});

}

const formatoPorcentaje=(valor)=>{
	return valor.toLocaleString('en-AR', {style:'percent', minimumFractionDigits:2});
}


const cargarIngresos =()=>{
	let ingresosHTML = '';
	for(let ingreso of ingresos){
		ingresosHTML += crearIngresoHTML(ingreso);
	
	}
	document.getElementById('lista-ingresos1').innerHTML = ingresosHTML;

}



const crearIngresoHTML = (ingreso)=>{
	let ingresoHTML = `<div class="limpiar">
				<div class="elemento_descripcion1">${ingreso.descripcion}</div>

				
				<div class="valor_elemento1">${formatoMoneda(ingreso.valor)}
			    </div>

			    
			  

			    <div class="limpiar">	
			    <div class="close"><ion-icon name="close-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon></div>
			  
			    `;



			    return ingresoHTML; 
		}




const eliminarIngreso = (id)=>{
	let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id);
	ingresos.splice(indiceEliminar,1);
	alert("INGRESO ELIMINADO CON EXITO");
	cargarCabecero();
	cargarIngresos();
}
	




const cargarEgresos = ()=>{
	let egresosHTML = '';
	for(let egreso of egresos){
		egresosHTML += crearEgresoHTML(egreso);
	}
	document.getElementById('lista-egresos1').innerHTML = egresosHTML;

}


const crearEgresoHTML = (egreso)=>{
	let egresoHTML = `
	<div class="limpiar">
	<div class="egreso_descripcion1" value = ${egreso.cat}>${egreso.descripcion}</div>
				<div class="valor_egreso1" value = ${egreso.cat}>${formatoMoneda(egreso.valor)}
				</div>
				<div class="cate" value = ${egreso.cat}>${egreso.cat}</div>

				<div class="limpiar">
			    <div class="close1" value = ${egreso.cat}><ion-icon name="close-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon></div>
			    

			    
	

	`;

	return egresoHTML;
}



const eliminarEgreso = (id)=>{
	let indiceEliminar2 = ingresos.findIndex( egreso => egreso.id === id);
	egresos.splice(indiceEliminar2,1);
	cargarCabecero();
	cargarEgresos();
}


let agregarDato =()=>{
	
	let forma = document.formulario;
	let tipo = formulario['tipo'];
	let categoria = formulario['catt'];
	let descripcion = formulario['descripcion'];
	let valor = formulario['valor'];
	if(descripcion.value != '' && valor.value !== ''){
		if(tipo.value === 'ingreso'){
			ingresos.push(new Ingresos(descripcion.value, +valor.value));
			cargarCabecero();
			cargarIngresos();
		}
		else if(tipo.value === 'egreso'){
			egresos.push(new Egresos(descripcion.value, +valor.value, categoria.value));
			cargarCabecero();
			cargarEgresos();

		}
		let in_eg = tipo.value;
		alert(in_eg.toUpperCase() + " agregado con exito");
	}


}

function habilitar(){
	let ig = document.getElementById('catt');
	let tipo = document.getElementById('tipo');
	if(tipo.value === 'egreso'){
		ig.disabled = false;


	}else
		ig.disabled = true;
	

}


//defino ojo cerrado no muestra contenido, ojo abierto muestra el contendido
const eye = document.getElementById('eyes');
const eye_c = document.getElementById('eye_close');


eye.addEventListener("click", function(){


	$('.fa-eye').addClass(`change-eye`);
	$('.fa-eye').hide();
	$('.fa-eye-slash').addClass(`change-eye-b`);
	$('.fa-eye-slash').show();

	document.getElementById('presupuestototal').innerHTML = "------";
	document.getElementById('ingresostotales').innerHTML = "------";
	document.getElementById('egresostotales').innerHTML = "------";
	

})











