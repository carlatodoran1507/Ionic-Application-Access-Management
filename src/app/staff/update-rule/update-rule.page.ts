import {Component, Input, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {ApiService} from "../../api.service";
import {WebsocketService} from "../../websocket.service";
import {DatabaseService} from "../../database.service";

@Component({
  selector: 'app-update-rule',
  templateUrl: './update-rule.page.html',
  styleUrls: ['./update-rule.page.scss'],
  providers: [WebsocketService]
})
export class UpdateRulePage implements OnInit {
  @Input() item: any;
  name: string | undefined;
  level: string | undefined;
  status: string | undefined;
  from: string | undefined;
  to: string | undefined;
  element = {};

  constructor(public modalCtrl: ModalController, private apiService: ApiService, private websocketService: WebsocketService,
              private alertController: AlertController, private loadingCtrl: LoadingController, private db: DatabaseService) { }

  ngOnInit() {
    this.name = this.item.name;
    this.level = this.item.level;
    this.status = this.item.status;
    this.from = this.item.from;
    this.to = this.item.to;
  }

  async updateElement() {
    if (!this.name || !this.level || !this.status || !this.from || !this.to) {
      this.showAlert('Please complete all fields!');
    } else {

      this.element = ({ id: this.item.id, name: this.name, level: this.level,
        status: this.status, from: this.from, to: this.to })

      this.apiService.updateElement(this.element).subscribe(  {
        error: (error: any) => {
          this.showAlert('Disconnected from server! You are offline!\n Check your internet connection and refresh page!');
          const message = error.error?.error ?? 'Unknown server error';
          console.log(message);
        },
      })

      await this.dismiss();
    }
  }

  showAlert(message: string) {
    this.alertController.create({
      header: 'Info',
      subHeader: 'New entry added',
      message: message,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
