import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../../websocket.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-get-range',
  templateUrl: './get-range.page.html',
  styleUrls: ['./get-range.page.scss'],
  providers: [WebsocketService]
})

export class GetRangePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
