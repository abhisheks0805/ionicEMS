import { Component, OnInit } from '@angular/core';
import { IonicRestService } from '../services/service.service';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.page.html',
  styleUrls: ['./add-employee-page.page.scss'],
})
export class AddEmployeePagePage implements OnInit {
  private data ={
    name: '',
    uid:null,
    email: '',
    phone: null,
    designation: '',
  };
  constructor(private webService: IonicRestService) {}

  ngOnInit() {}

  onClickSubmit() {
    let data = {
      name: this.data.name,
      uid:this.data.uid,
      email: this.data.email,
      phone: this.data.phone,
      designation: this.data.designation,
    };
    this.webService.postData(data).subscribe((response) => {
      console.log('response value: ', response);
    });
  }
}
