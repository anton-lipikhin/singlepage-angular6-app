import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { textValidator } from '../validators/text-validator.directive';
import { UppercaseDirective } from '../validators/uppercase.directive';
import { RequestService } from '../services/request.service';
import { StorageService } from '../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-number',
  templateUrl: './contract-number.component.html',
  styleUrls: ['./contract-number.component.css']
})
export class ContractNumberComponent implements OnInit {

  constructor(
    private request: RequestService,
    private storage: StorageService,
    private router: Router
  ) { }

  contractNumberForm: FormGroup;

  submitted = false;
  model = {
    value: '',
    placeholder: 'AAA-123456789FF'
  }

  onSubmit() {
    this.submitted = true;
    this.request.getUser(1).subscribe(data => {
      this.storage.updateUserData(data);
      this.router.navigateByUrl('/result');
    });
  }

  get contractNumber() { return this.contractNumberForm.get('contractNumber'); }

  ngOnInit() {
    this.contractNumberForm = new FormGroup({
      'contractNumber': new FormControl(this.model.value, [
        Validators.required,
        textValidator(/^([a-zA-Zа-яА-Я]{3}-)[0-9]{9}[a-zA-Zа-яА-Я]{2}$/)
      ])
   });
  }

}
