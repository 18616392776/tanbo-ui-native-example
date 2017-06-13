import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiNativeModule, UiComponentsModule } from 'tanbo-ui';

import { AppComponent } from './app';

import { TabComponent } from './tab/tab.component';
import { HomeComponent } from './tab/home/home.component';
import { MessagesComponent } from './tab/messages/messages.component';
import { SettingsComponent } from './tab/settings/settings.component';
import { UserComponent } from './tab/user/user.component';
import { MusicListComponent } from './tab/home/music-list/music-list.component';

@NgModule({
    imports: [
        BrowserModule,
        UiComponentsModule,
        UiNativeModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        TabComponent,
        HomeComponent,
        MessagesComponent,
        SettingsComponent,
        UserComponent,
        MusicListComponent
    ],
    entryComponents: [
        TabComponent,
        HomeComponent,
        MessagesComponent,
        SettingsComponent,
        UserComponent,
        MusicListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
