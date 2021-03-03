import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  verNotas:boolean;
  errorValidacion:boolean
  inputNom=""
  inputTel:number
  inputEmail:string
  inputNotas:string
  constructor(public alertController:AlertController,
    public datosServer:DatosService) {
    this.verNotas=false
    this.errorValidacion=false
  }

  async exito() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Confirmacion',
      message: 'Contacto añadido con exito',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Desea agregar dicho contacto?',
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
            this.agregarPersona();
            
          }
        }
      ]
    });

    await alert.present();
  }

  agregarPersona(){
    if(this.inputTel!=null && this.inputNom!="" && this.inputEmail!="" && this.inputNotas!=""){
      let newPersona={nombre:this.inputNom,telefono:this.inputTel,email:this.inputEmail,notas:this.inputNotas}
      this.datosServer.personas.push(newPersona)
      this.inputTel=null
      this.inputNom=""
      this.inputEmail=""
      this.inputNotas=""
      this.errorValidacion=false
      this.exito();
    }
    else if(this.inputTel==null || this.inputNom=="" || this.inputEmail=="" || this.inputNotas==""){
      this.errorValidacion=true
    }
    
  }

}
