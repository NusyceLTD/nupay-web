export class Role {
  id: number;
  name: string;
  slug: string;
  permissions: number[];
  isCoreRole = false;

  clear(): void {
    this.id = undefined;
    this.name = '';
    this.slug = '';
    this.permissions = [];
    this.isCoreRole = false;
  }
}
