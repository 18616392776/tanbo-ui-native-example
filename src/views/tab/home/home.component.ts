import { Component } from '@angular/core';
import { NavController } from 'tanbo-ui';

import { MusicListComponent } from './music-list/music-list.component';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(private navController: NavController) {
    }

    toMusicList() {
        this.navController.push(MusicListComponent);
    }
}