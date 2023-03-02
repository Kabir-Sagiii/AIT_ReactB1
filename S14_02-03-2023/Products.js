class Products {

    pname 
    bname
    price
    category
    Quantity 
    totalAmount 

    //   constructor(){
    //     //you call constructor of parent class
    //     this.pname = "Iphone"
    //     this.bname = "Apple"
    //     this.category = "Electronic"
    //     this.Quantity = 10
    //     this.price = 90000
    //     this.totalAmount = 0
    //   }

    constructor(pname,bname,qty,price,category,totalAmount){
        //you call constructor of parent class
        this.pname = pname
        this.bname = bname
        this.category = category
        this.Quantity = qty
        this.price = price
        this.totalAmount = totalAmount
      }



     display(){
        console.log(this.pname,this.bname,this.price,this.category,this.Quantity,this.totalAmount)
     }

     CaltotoalAmount(){
        this.totalAmount = this.price * this.Quantity

     }

}

var iphone14 = new Products("Iphone 14","Apple",20,90000,"electronic",0)
iphone14.display()

var iphone12= new Products("Iphone 12","Apple",60,70000,"electronic",0)
iphone12.display()

// iphone14.pname = "Iphone 14 Pro"
// iphone14.bname = "Apple"