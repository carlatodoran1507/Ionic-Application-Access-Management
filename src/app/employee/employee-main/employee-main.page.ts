import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {ApiService} from "../../api.service";
import {WebsocketService} from "../../websocket.service";
import {DatabaseService} from "../../database.service";
import {GetRangePage} from "../get-range/get-range.page";
import {GetLimitPage} from "../get-limit/get-limit.page";

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.page.html',
  styleUrls: ['./employee-main.page.scss'],
  providers: [WebsocketService]
})
export class EmployeeMainPage implements OnInit {
  toValue: string | undefined
  fromValue: string | undefined
  limit: string | undefined

  constructor(public modalCtrl: ModalController, private apiService: ApiService, private websocketService: WebsocketService,
              private alertController: AlertController, private loadingCtrl: LoadingController, private db: DatabaseService) { }

  ngOnInit() {
  }

  async getRulesInRange() {
    const modal = await this.modalCtrl.create({
      component: GetRangePage
    })
    return await modal.present();
  }

  async getRulesWithLimit() {
    const modal = await this.modalCtrl.create({
      component: GetLimitPage
    })
    return await modal.present();
  }
}
