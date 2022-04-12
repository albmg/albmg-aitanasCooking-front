import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../../customers/interfaces/products.interface';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styles: [
    `
    #inputFile{
      display: none;
    }
    `
  ]
})
export class ImagePickerComponent implements OnInit {

  @Input() product!: Product

  @Output() onShareImage: EventEmitter<string> = new EventEmitter();

  constructor( private storageService: StorageService ) { }

  ngOnInit(): void {
    console.log('product on imagePicker', this.product)
  }

  // image picker
  productImages: any[] = [];

  loadImage(event: any) {
    let filePicked = event.target.files;
    let productName = "producto";

    for (let i = 0; i < filePicked.length; i++) {

      let reader = new FileReader();
      reader.readAsDataURL(filePicked[0]);
      reader.onloadend = () => {
        console.log(reader.result);
        this.productImages.push(reader.result);

        this.storageService.uploadImage(productName + "_" + Date.now(), reader.result)
          .then(urlImagen => {
            //console.log(urlImagen);
            this.onShareImage.emit(urlImagen!)
          });
      }
    }
  }

}
