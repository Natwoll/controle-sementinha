import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

import { VoluntaryService } from 'src/app/services/voluntary/voluntary.service';
import { Voluntary } from 'src/app/models/voluntary.models';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.scss']
})
export class VoluntariosComponent implements OnInit {

  voluntaryForm: FormGroup
  voluntary: Voluntary
  voluntarios: Array<Voluntary>
  constructor(
    private formBuilder: FormBuilder,
    private voluntaryService: VoluntaryService
  ) { 
    this.voluntary = new Voluntary()
    this.voluntarios = new Array<Voluntary>()
  }

  ngOnInit() {
    this.voluntaryForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      contact: ['', Validators.required]
    });

    this.voluntaryService.getAllVoluntaries().subscribe((voluntaries: Array<Voluntary>) => {
      this.voluntarios = voluntaries
    })
  }

  public get f() {
    return this.voluntaryForm.controls
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.voluntary.name = this.f.name.value
    this.voluntary.age = this.f.age.value
    this.voluntary.contact = this.f.contact.value


    this.voluntaryService.createVoluntary(this.voluntary).subscribe((voluntary: Voluntary) => {
      this.voluntary = voluntary
      this.voluntarios.push(voluntary)
    })

    formDirective.resetForm()
    this.voluntaryForm.reset()
  }

  public deleteVoluntario(voluntarioId): void{
    this.voluntaryService.deleteVoluntary(voluntarioId).subscribe(response => {
      this.voluntarios = this.voluntarios.filter(voluntary => voluntary.id !== voluntarioId)
    })
  }

}
