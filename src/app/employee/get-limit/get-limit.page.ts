import {Component, Input, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {ApiService} from "../../api.service";
import {WebsocketService} from "../../websocket.service";
import {DatabaseService} from "../../database.service";

@Component({
  selector: 'app-get-limit',
  templateUrl: './get-limit.page.html',
  styleUrls: ['./get-limit.page.scss'],
  providers: [WebsocketService]
})
export class GetLimitPage implements OnInit {
  inputLimit: string | undefined;
  elements: any[] | undefined;

  constructor(public modalCtrl: ModalController, private apiService: ApiService, private websocketService: WebsocketService,
              private alertController: AlertController, private loadingCtrl: LoadingController, private db: DatabaseService) {
  }

  ngOnInit() {
  }

  getRulesWithLimit() {
    if (!this.inputLimit) {
      this.showAlert('Complete required input!')
    }
    const elems: any[] | undefined = [];

    this.apiService.getElementsWithLimit(this.inputLimit!!).subscribe( (returnedElems) => {
      // @ts-ignore
      for (const item of returnedElems) {
        const elem = {
          id: item.id,
          name: item.name,
          level: item.level,
          status: item.status,
          from: item.from,
          to: item.to,
        }
        if (elem.level == this.inputLimit) {
          elems.push(elem);
        }
      }
      if (elems.length == 0) {
        this.showAlert('No values were found!')
      }
      this.elements = elems;
      console.log(this.elements)
    })
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  showAlert(message: string) {
    this.alertController.create({
      header: 'Info',
      message: message,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }
}
