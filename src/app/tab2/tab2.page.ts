import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController:AlertController,public datosServer:DatosService) {}

  async eliminarConfirm(i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Desea eliminar: '+this.datosServer.personas[i].nombre,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.elimiarPersona(i);
          }
        }
      ]
    });

    await alert.present();
  }

  elimiarPersona(i){
    this.datosServer.personas.splice(i,1);
  }

}
