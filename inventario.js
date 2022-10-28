class Inventario{
    constructor(){
        this.primero=null;
        this.ultimo=null;
    }

    agregar(nuevo){ 
        if (this.primero==null){
            this.primero=nuevo;
            this.ultimo=nuevo;
        }
        else if(nuevo.codigo<this.primero.codigo){
            this.primero.anterior=nuevo;
            nuevo.siguiente=this.primero;
            this.primero=nuevo;
        }
        else if(this.ultimo.codigo<nuevo.codigo){
            this.ultimo.siguiente=nuevo;
            nuevo.anterior=this.ultimo;
            this.ultimo=nuevo;
        }
        else{
            let temp=this.primero;
            while (temp.siguiente!=null){
                if(temp.codigo<nuevo.codigo && temp.siguiente.codigo> nuevo.codigo){
                    temp.siguiente.anterior=nuevo;
                    nuevo.siguiente= temp.siguiente;
                    nuevo.anterior=temp;
                    temp.siguiente=nuevo;
                }
                temp=temp.siguiente;
            }
        }
        console.log(nuevo);
    }
    
    eliminar(codigo){
        if(this.primero.codigo==codigo){
            this.primero=this.primero.siguiente;
            return;
        }
        else{
            let aux=this.primero;
            while(aux!=null){
                if(aux.siguiente.codigo==codigo){
                    aux.siguiente.siguiente.anterior=aux;
                    aux.siguiente=aux.siguiente.siguiente;
                    return;
                }
                else{
                    aux=aux.siguiente;
                }
            }
        }
    }
    listado(){
        let res="";
        let aux=this.primero;
        while (aux!=null){
            res += aux.info();
            aux=aux.siguiente;
        }
        return res;
    }
    listadoInverso(){
        let res = "";
        let aux = this.primero;
        let aux2;
        while(aux!=null){
          aux2 = res;
          res = "";
          res += aux.info() + ""+ aux2;  
          aux = aux.siguiente
        }
        return res;
    }
    buscar(codigo){
        let aux = this.primero;
        while(aux!= null){
            if(aux.codigo==codigo){
                return aux;
            }
            else{
                aux= aux.siguiente;
            }
        }
    }
}