// Table data
import {Table} from '../../ui/tables/advanced/advanced.model';
export class Utilisateurs {
  name: string;
  position: string;
  office: string;
  age: number;
  date: string;
  salary: string;
}
// Search Data
export interface SearchResult {
  tables: Utilisateurs[];
  total: number;
}
