import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

import { EventService } from 'src/app/services/event/event.service';
import { Event } from 'src/app/models/event.models';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  eventForm: FormGroup
  event: Event
  opened: boolean = false;
  listPastEvents: boolean = false;

  today: Array<Event>
  week: Array<Event>
  month: Array<Event>
  other: Array<Event>
  past: Array<Event>
  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.event = new Event()
    this.today = new Array<Event>()
    this.week = new Array<Event>()
    this.month = new Array<Event>()
    this.other = new Array<Event>()
    this.past = new Array<Event>()
  }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      hours: ['', Validators.required],
      minutes: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.eventService.getAllEvents().subscribe((events: Array<Event>) => {
      events.map(event => this.addEvent(event))
    })
  }

  public get f() {
    return this.eventForm.controls
  }

  public newEvent(): void {
    this.opened = !this.opened;
  }

  public showPastEvents(): void {
    this.listPastEvents = !this.listPastEvents;
  }

  public changeColor(color: string): void {
    let colorTAG = document.getElementById('colorTAG');
    switch (color) {
      case 'red':
        colorTAG.className = this.event.color = "color-red";
        break;
      case 'yellow':
        colorTAG.className = this.event.color = "color-yellow";
        break;
      case 'green':
        colorTAG.className = this.event.color = "color-green";
        break;
      case 'blue':
        colorTAG.className = this.event.color = "color-blue";
        break;
      case 'magenta':
        colorTAG.className = this.event.color = "color-magenta";
        break;
    }
  }

  private addEvent(event: Event): void {
    const eventDate = new Date(event.date)
    const currentDate = new Date()
    const first = currentDate.getDate() - currentDate.getDay()
    const last = first + 6
    const firstDayOfWeek = new Date(currentDate.setDate(first))
    const lastDayOfWeek = new Date(currentDate.setDate(last))

    if (eventDate.toLocaleDateString('pt-br') === new Date().toLocaleDateString('pt-br'))
      this.today.push(event)
    if (eventDate >= firstDayOfWeek && eventDate <= lastDayOfWeek)
      this.week.push(event)
    if (eventDate.getMonth() === new Date().getMonth())
      this.month.push(event)
    if(eventDate < new Date())
      this.past.push(event)

    this.other.push(event)
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.event.name = this.f.name.value
    this.event.date = new Date(`${this.date.toLocaleDateString('en-us')} ${this.f.hours.value || '00'}:${this.f.minutes.value || '00'}:00`)
    this.event.description = this.f.description.value
    
    console.log(this.event)

    if (!this.validEvent())
      return


    this.eventService.createEvent(this.event).subscribe((event: Event) => {
      this.event = event
      this.addEvent(event)
    })
    formDirective.resetForm()
    this.eventForm.reset()
    this.newEvent()
  }

  private get date(): Date {
    return new Date(this.f.date.value)
  }

  private validEvent(): boolean {
    if (!this.event.name || !this.event.description || !this.event.date || !this.event.color)
      return false

    return true
  }
}
