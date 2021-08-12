import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute ,  private router: Router) { }

  product!: Product;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {

    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto foi atualizado com sucesso!")
      this.router.navigate(["/products"]);
    })

  }


  cancel(): void {
    this.router.navigate(['/products']);
  }

}
