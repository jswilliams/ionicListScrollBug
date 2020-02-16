import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  items: string[] = [];

  constructor(public alertController: AlertController) {}

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      let str: string = (Math.floor(Math.random() * 10000000) + 1).toString();
      this.items.push(str);
    }
  }

  async clicked(item: string) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: item + " clicked",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
