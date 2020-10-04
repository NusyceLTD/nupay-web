export class Permission {
  id: number;
  slug: string;
  level: number;
  parentId: number;
  isSelected: boolean;
  name: string;
  // tslint:disable-next-line
  _children: Permission[];

  clear(): void {
    this.id = undefined;
    this.name = '';
    this.level = 1;
    this.parentId = undefined;
    this.isSelected = false;
    this.slug = '';
    this._children = [];
  }
}
