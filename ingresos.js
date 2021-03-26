class Ingresos extends Dato{
	static contadorIngresos = 0;


	constructor(descripcion, valor){
		super(descripcion,valor); //llamamos a los parametros de la clase padre
		this._id = ++Ingresos.contadorIngresos;

	}
	get id(){
		return this._id;
	}
}

