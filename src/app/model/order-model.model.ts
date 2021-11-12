export class OrderModel {
  key?:string | null;
  user?:string;
  title?:string;
  description?:string;
  datetime?: string;
  address?:string;
  zip?:string;
  status?:string;
  phone?:string;
  file_name?: string;
  url?: string;
  file?: File;
  visitCharge?:string;
  // constructor(file: File) {
  //   this.file = file;
  // }
}
