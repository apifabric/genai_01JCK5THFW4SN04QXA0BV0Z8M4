import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpuLogHomeComponent } from './home/CpuLog-home.component';
import { CpuLogNewComponent } from './new/CpuLog-new.component';
import { CpuLogDetailComponent } from './detail/CpuLog-detail.component';

const routes: Routes = [
  {path: '', component: CpuLogHomeComponent},
  { path: 'new', component: CpuLogNewComponent },
  { path: ':id', component: CpuLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CpuLog-detail-permissions'
      }
    }
  },{
    path: ':cpu_log_id/FileLog', loadChildren: () => import('../FileLog/FileLog.module').then(m => m.FileLogModule),
    data: {
        oPermission: {
            permissionId: 'FileLog-detail-permissions'
        }
    }
}
];

export const CPULOG_MODULE_DECLARATIONS = [
    CpuLogHomeComponent,
    CpuLogNewComponent,
    CpuLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpuLogRoutingModule { }