import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileLogHomeComponent } from './home/FileLog-home.component';
import { FileLogNewComponent } from './new/FileLog-new.component';
import { FileLogDetailComponent } from './detail/FileLog-detail.component';

const routes: Routes = [
  {path: '', component: FileLogHomeComponent},
  { path: 'new', component: FileLogNewComponent },
  { path: ':id', component: FileLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FileLog-detail-permissions'
      }
    }
  }
];

export const FILELOG_MODULE_DECLARATIONS = [
    FileLogHomeComponent,
    FileLogNewComponent,
    FileLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileLogRoutingModule { }