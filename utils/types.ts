
export type FieldType = {
   label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
     name: string | undefined;
     placeHolder: string | undefined; 
     type: string | (string & {}) | undefined; 
     index?: React.Key | null | undefined;
  }[];


  export interface UserSchema {
    id :Int8Array|null|undefined | any;
    created_at:Date|null|undefined | any;
    username :string|null|undefined|any;
    email:string|null|undefined|any;
    user_auth_id:string|null|undefined|any;
  }


  export interface Message{
    id?:Int8Array|null|undefined | any;
    created_at?:Date|null|undefined | any;
    user_id?:string|null|undefined|any;
    content?:string|null|undefined|any;
    role?:string|null|undefined|any;
    meesage_id?:string|null|undefined|any;
}