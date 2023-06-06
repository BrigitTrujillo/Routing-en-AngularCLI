import { Component } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploadFiles: Array<File> = [];

  constructor(private uploadService: UploadService){

}

onUpload(){
  //console.log('Upload');
  let formData = new FormData();
  for(let i = 0; i < this.uploadFiles.length; i++){
    formData.append("uploads[]", this.uploadFiles[i], this.uploadFiles[i].name)
  }
  // Call Service Upload
  this.uploadService.uploadFile(formData).subscribe((res) => {
    console.log('Response:', res);
  });
}

onFileChange(e: any){
  //console.log(e);
  this.uploadFiles = e.target.files;
}

}
