import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicRestService } from '../services/service.service';

@Component({
  selector: 'app-employee-details-page',
  templateUrl: './employee-details-page.page.html',
  styleUrls: ['./employee-details-page.page.scss'],
})
export class EmployeeDetailsPagePage implements OnInit {
  private data;
  constructor(private webService: IonicRestService) {
    this.webService.getData().subscribe((response) => {
      this.data = response.data;
    });
  }

  ngOnInit() {}
}
