import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { StorageService } from '../../services/storage.service';

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

  //previewImage: string = ''

  @Output() onShareImage: EventEmitter<string> = new EventEmitter();

  constructor( private storageService: StorageService ) { }

  ngOnInit(): void {
  }

  // image picker

  productImages: any[] = [];

  loadImage(event: any) {

    //console.log(event)

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
            console.log(urlImagen);
           //this.previewImage = urlImagen!
           this.onShareImage.emit(urlImagen!)
          });
      }
    }
  }

}
