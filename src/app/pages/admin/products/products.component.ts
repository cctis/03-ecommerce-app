import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  isSidePanelVisible : boolean = false;
  productObj:any ={
    
      "productId": 0,
      "productSku": "string",
      "productName": "string",
      "productPrice": 0,
      "productShortName": "string",
      "productDescription": "string",
      "createdDate": new Date(),
      "deliveryTimeSpan": "string",
      "categoryId": 2147483647,
      "productImageUrl": "string",
  }
categoryList: any[]= [];

  constructor(private productoServ: ProductService){}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.productoServ.getAllCategory().subscribe((res:any)=>{
      this.categoryList= res.data;
      console.log()
    });
  }

  openSidePanel(){
    this.isSidePanelVisible=true;
  }

  closeSidePanel(){
    this.isSidePanelVisible=false;
  }
  onDelete(){}
  onPageChange(){}

}
