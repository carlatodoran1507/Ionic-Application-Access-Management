import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {ApiService} from "../../api.service";
import {WebsocketService} from "../../websocket.service";
import {DatabaseService} from "../../database.service";
import {UpdateRulePage} from "../update-rule/update-rule.page";

@Component({
  selector: 'app-staff-main',
  templateUrl: './staff-main.page.html',
  styleUrls: ['./staff-main.page.scss'],
  providers: [WebsocketService]
})
export class StaffMainPage implements OnInit {
  elements: any[] | undefined
  levelRangeRules: any[] | undefined

  constructor(public modalCtrl: ModalController, private apiService: ApiService, private websocketService: WebsocketService,
              private alertController: AlertController, private loadingCtrl: LoadingController, private db: DatabaseService) {
    this.loadElements();
    websocketService.messages.subscribe(() => {
      this.getAllElements();
    });
  }

  ngOnInit() {
  }

  getAllElements() {
    const elems: any[] | undefined = [];

    this.apiService.getAllElements().subscribe( (returnedElems) => {
        // @ts-ignore
        for (const item of returnedElems) {
          console.log(item.id);
          const elem = {
            id: item.id,
            name: item.name,
            level: item.level,
            status: item.status,
            from: item.from,
            to: item.to,
          }
          elems.push(elem);
        }
        console.log(elems)
        this.elements = elems;
        this.db.setElements(elems).then(() => console.log('Local DB refreshed successfully!'));
      },
      error => {
        this.showAlert('Disconnected from server! You are offline!\n Check your internet connection and refresh page!');
        this.elements = this.db.getAllElements();
      })
  }

  loadElements() {
    this.simpleLoader();
    this.getAllElements();
    this.dismissLoader();
  }

  async updateElement(element: Object) {
    const modal = await this.modalCtrl.create({
      component: UpdateRulePage,
      componentProps: { item: element }
    })
    modal.onDidDismiss().then(() => {
      this.getAllElements();
    })

    return await modal.present();
  }

  getElement(id: any) {
    this.apiService.getElementById(id).subscribe( (returnedElem) => {
        const res = JSON.stringify(returnedElem);
        const entry = JSON.parse(res);
        const elem = {
            id: entry.id,
            name: entry.name,
            level: entry.level,
            status: entry.status,
            from: entry.from,
            to: entry.to,
        }
        console.log(elem)
        this.showAlert('Id: ' + entry.id + ', Name: ' + entry.name + ', Status: ' + entry.status);
      },
      error => {
        this.showAlert('Disconnected from server! You are offline!\n Check your internet connection and refresh page!');
      })
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

  simpleLoader() {
    this.loadingCtrl.create({
      duration: 700,
      message: 'Loading...'
    }).then((response) => {
      response.present();
    });
  }

  dismissLoader() {
    this.loadingCtrl.dismiss().then((response) => {
      console.log('Loader closed!', response);
    }).catch(() => {
      console.log();
    });
  }
}
