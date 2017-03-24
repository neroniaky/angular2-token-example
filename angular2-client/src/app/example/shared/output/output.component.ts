import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';

import { AuthResponse } from '../';

@Component({
    selector: 'output',
    templateUrl: 'output.component.html',
    styleUrls: ['output.component.scss']
})
export class OutputComponent {

    output: AuthResponse;

    @Input()
    set data(res: Response) {

        this.output = <AuthResponse>{};

        if (res != null) {
            this.output.status = res.statusText + ' (' + res.status + ')';

            if (res.json().errors != null)
                if (res.json().errors.full_messages != null)
                    this.output.errors = res.json().errors.full_messages;
                else
                    this.output.errors = res.json().errors;
            else
                this.output.data   = res.json().data;
        }
    }

}