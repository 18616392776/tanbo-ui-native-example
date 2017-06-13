import { Component } from '@angular/core';

import { TabComponent } from './tab/tab.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html'
})
export class AppComponent {
    rootPage = TabComponent;
}
