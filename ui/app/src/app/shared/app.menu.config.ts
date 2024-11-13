import { MenuRootItem } from 'ontimize-web-ngx';

import { CpuLogCardComponent } from './CpuLog-card/CpuLog-card.component';

import { FileLogCardComponent } from './FileLog-card/FileLog-card.component';

import { FileUploadCardComponent } from './FileUpload-card/FileUpload-card.component';

import { UserCardComponent } from './User-card/User-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'CpuLog', name: 'CPULOG', icon: 'view_list', route: '/main/CpuLog' }
    
        ,{ id: 'FileLog', name: 'FILELOG', icon: 'view_list', route: '/main/FileLog' }
    
        ,{ id: 'FileUpload', name: 'FILEUPLOAD', icon: 'view_list', route: '/main/FileUpload' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CpuLogCardComponent

    ,FileLogCardComponent

    ,FileUploadCardComponent

    ,UserCardComponent

];