class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo=codigo;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.costo=costo;
        this.siguiente=null;
        this.anterior=null;
    }
    info(){
        //4> lapiz (10) $20
        return `<div><h4> codigo: ${this.codigo} nombre: ${this.nombre} cantidad: ${this.cantidad} costo: $${this.costo}</h4></div>`;
        //return "Código: " + this.codigo + " Nombre: " + this.nombre + " Cantidad: " + this.cantidad + " Costo: " + this.costo;
    }
}