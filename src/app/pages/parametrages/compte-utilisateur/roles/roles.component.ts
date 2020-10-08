import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Utilisateurs } from '../utilisateurs.model';

import { tableData } from '../data';

import { UtilisateursService } from '../utilisateurs.service';
import { UtilisateursSortableDirective, SortEvent } from '../utilisateurs-sortable.directive';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [UtilisateursService, DecimalPipe]
})
export class RolesComponent implements OnInit {
  // breadCrumbItems: any;

  // bread crum data
   breadCrumbItems: Array<{}>;

  // Table data
  tableData: Utilisateurs[];

  tables$: Observable<Utilisateurs[]>;
  total$: Observable<number>;

  @ViewChildren(UtilisateursSortableDirective) headers: QueryList<UtilisateursSortableDirective>;

  constructor(public service: UtilisateursService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Paramètrages', path: '/' }, { label: 'Compte utilisateur', path: '/' }, { label: 'Roles', active: true }];
    /**
     * fetch data
     */
    this._fetchData();
    /**
     * fetches the table value
     */
  }
  _fetchData() {
    this.tableData = tableData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
