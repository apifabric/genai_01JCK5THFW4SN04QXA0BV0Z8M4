import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadHomeComponent } from './home/FileUpload-home.component';
import { FileUploadNewComponent } from './new/FileUpload-new.component';
import { FileUploadDetailComponent } from './detail/FileUpload-detail.component';

const routes: Routes = [
  {path: '', component: FileUploadHomeComponent},
  { path: 'new', component: FileUploadNewComponent },
  { path: ':id', component: FileUploadDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FileUpload-detail-permissions'
      }
    }
  },{
    path: ':file_upload_id/FileLog', loadChildren: () => import('../FileLog/FileLog.module').then(m => m.FileLogModule),
    data: {
        oPermission: {
            permissionId: 'FileLog-detail-permissions'
        }
    }
}
];

export const FILEUPLOAD_MODULE_DECLARATIONS = [
    FileUploadHomeComponent,
    FileUploadNewComponent,
    FileUploadDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }