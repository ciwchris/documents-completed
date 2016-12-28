import { Component } from '@angular/core';
import { Query } from './query';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    model = new Query(new Date().toLocaleDateString('en-US'), 0);
    submitted = false;
    onSubmit() { this.submitted = true; }

    lookUp() {

    }
}
