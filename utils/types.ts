
type FieldType = {
    name: string;
    label: string;
    placeHolder: string;
    type: 'text' | 'email' | 'password';
  }[];


  export interface UserSchema {
    id :Int8Array|null|undefined | any;
    created_at:Date|null|undefined | any;
    username :string|null|undefined|any;
    email:string|null|undefined|any;
    user_auth_id:string|null|undefined|any;
  }