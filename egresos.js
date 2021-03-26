class Egresos extends Dato{
	static contadorEgresos = 0;


	constructor(descripcion, valor,cat){
		super(descripcion, valor,cat); //llamamos a los parametros de la clase padre
		this._id = ++Egresos.contadorEgresos;

	}
	get id(){
		return this._id;
	}
}