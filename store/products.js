const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };

    console.log(producto1)

producto1.id = "id123"
producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"
producto1 ["detalle"]="escribir detalle"
producto1 ["color"]="gris"

console.log(producto1);


delete producto1["id"]
delete producto1.detalle
console.log(producto1);

console.log(producto1.nombre)



class Product {
      constructor(id, title, price, stock, images, onsale,supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
        this.stock = stock;
      }
    get getSupplier() {
        return this._supplier;
        }
        set setSupplier(newName) {
        this._supplier = newName;
        }
        
        sellUnits(units) {
            if (this.stock >= units) {
              this.stock -= units;
              console.log(`Se vendieron ${units} unidades.`);
            } else {
              console.log(`No hay suficiente stock para vender ${units} unidades.`);
            }
          }
          
    
    }
    
    const prod1 = new Product(555,"celular1",500)
    const prod2 = new Product(777,"celular2",700)
    const prod3 = new Product(888,"celular3",800,5,[],"oferta")
    const prod4 = new Product('id1234','Producto 4',50.00,10,[],false,'Proveedor ABC')
    const prod5 = new Product('id12345','Producto 5', 60.00, 12,[],false)
      
      


prod4.supplier = 'Nuevo Proveedor XYZ';

console.log(prod1)
console.log(prod2)
console.log(prod3)
console.log(prod4)
console.log(prod4.supplier)

prod5.sellUnits(10);
prod5.sellUnits(5);
console.log(prod5);

