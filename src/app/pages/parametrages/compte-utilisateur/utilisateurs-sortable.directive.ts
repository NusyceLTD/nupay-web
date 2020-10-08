import { Directive, EventEmitter, Input, Output } from '@angular/core';
import {SortEvent} from '../compte-utilisateur/utilisateurs-sortable.directive';
// import {SortEvent} from "../../ui/tables/advanced/advanced-sortable.directive";
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: string;
  direction: SortDirection;
}
@Directive({
 // selector: '[appUtilisateursSortable]',
  // tslint:disable-next-line: directive-selector
  selector: 'th[sortable]',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class UtilisateursSortableDirective {

  constructor() { }
  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }

}
