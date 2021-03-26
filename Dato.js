class Dato{
	constructor(descripcion, valor,cat){
		this._descripcion = descripcion;
		this._valor = valor;
		this._cat = cat;
	}

	get descripcion(){
		return this._descripcion;
	}
	set descripcion(descripcion){
		this._descripcion = descripcion;
	}
	get valor(){
		return this._valor;
	}
	set valor(valor){
		this._valor = valor;
	}

	get cat(){
		return this._cat;
	}
	set cat(cat){
		this._cat = cat;
	}
}