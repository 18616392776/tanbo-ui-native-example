import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

@Component({
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    home = HomeComponent;
    messages = MessagesComponent;
    settings = SettingsComponent;
    user = UserComponent;
}