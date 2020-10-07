import {Component} from '@angular/core';
import {ConnectionService} from 'ng-connection-service';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isConnected = true;
  noInternetConnection: boolean;

  constructor(private connectionService: ConnectionService, private toastr: ToastrService, private translate: TranslateService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.noInternetConnection = false;
      } else {
        this.noInternetConnection = true;
        translate.get('APPCOMPONENT.CONNECTIONERROR').subscribe((res: string) => {
          this.toastr.error(res, 'Statut de connexion', {
            timeOut: 7000,
          });
        });
      }
    });
  }
}
