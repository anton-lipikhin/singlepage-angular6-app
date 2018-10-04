import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private storage: StorageService) { }

  userData = null;

  ngOnInit() {
    this.userData = this.storage.userData;
  }

}
