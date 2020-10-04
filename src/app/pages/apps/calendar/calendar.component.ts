import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import { EventInput } from '@fullcalendar/core';

import { Event } from './event.model';

import { category, calendarEvents } from './data';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

/**
 * Calendar component - handling calendar with sidebar and content
 */
export class CalendarComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // create event
  formCreateEvent: FormGroup;

  // edit event
  formEditEvent: FormGroup;

  submitted: boolean;

  // Form category data
  category: Event[];

  // Date added in event
  newEventDate: Date;

  // Edit event
  editEvent: EventInput;

  // Delete event
  deleteEvent: EventInput;

  // calendar plugin
  calendarPlugins = [dayGridPlugin, bootstrapPlugin, timeGrigPlugin, interactionPlugin, listPlugin];
  calendarWeekends: any;
  // show events
  calendarEvents: EventInput[];

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Calendar', active: true }];

    this.formCreateEvent = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    /**
     * Edit Event Model Data
     */
    this.formEditEvent = this.formBuilder.group({
      editTitle: ['', [Validators.required]],
    });

    /**
     * Fetches Data
     */
    this._fetchData();
  }

  /**
   * Returns the form
   */
  get createForm() {
    return this.formCreateEvent.controls;
  }

  /**
   * Edit form
   */
  get editForm() {
    return this.formEditEvent.controls;
  }

  /**
   * Creates new event
   */
  createNewEvent() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formCreateEvent.invalid) {
      return;
    }

    if (this.formCreateEvent.valid) {
      const title = this.formCreateEvent.get('name').value;
      // tslint:disable-next-line: no-shadowed-variable
      const category = this.formCreateEvent.get('category').value;

      this.calendarEvents = this.calendarEvents.concat({
        id: this.calendarEvents.length + 1,
        title,
        className: category,
        start: this.newEventDate || new Date()
      });
      this.formCreateEvent = this.formBuilder.group({
        name: '',
        category: ''
      });
      this.modalService.dismissAll();
    }
  }

  /**
   * Open Event Modal
   * @param content modal content
   * @param event calendar event
   */
  openModal(content: any, event?: any) {
    this.newEventDate = event ? event.date : new Date();
    this.modalService.open(content);
  }

  /**
   * Open Event Modal For Edit
   * @param editcontent modal content
   * @param event calendar event
   */
  openEditModal(editcontent: any, event: any) {
    this.formEditEvent = this.formBuilder.group({
      editTitle: event.event.title,
    });
    // tslint:disable-next-line: max-line-length
    this.editEvent = { id: event.event.id, title: event.event.title, start: event.event.start, classNames: event.event.classNames };
    this.modalService.open(editcontent);
  }

  /**
   * Upldated event title save in calendar
   */
  editEventSave() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formEditEvent.invalid) {
      return;
    }

    const editTitle = this.formEditEvent.get('editTitle').value;
    const editId = this.calendarEvents.findIndex(x => x.id + '' === this.editEvent.id + '');
    // tslint:disable-next-line: radix
    this.calendarEvents[editId] = { ...this.editEvent, title: editTitle, id: parseInt(this.editEvent.id + ''), className: '' };
    this.formEditEvent = this.formBuilder.group({
      editTitle: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Delete the event from calendar
   */
  deleteEventData() {
    const deleteId = this.editEvent.id;
    const deleteEvent = this.calendarEvents.findIndex(x => x.id + '' === deleteId + '');
    this.calendarEvents[deleteEvent] = { ...this.deleteEvent, id: '' };
    delete this.calendarEvents[deleteEvent].id;
    this.modalService.dismissAll();
  }

  /**
   * Fetches the required data
   */
  private _fetchData() {
    // Event category
    this.category = category;
    // Calender Event Data
    this.calendarEvents = calendarEvents;

    // form submit
    this.submitted = false;
  }
}
