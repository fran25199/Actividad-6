export interface Iusuario {
    id:number;
    first_name:string;
    last_name:string;
    username:string;
    email:string;
    image:string;
}

export interface Idatos {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    results:     Iuser[];
}

export interface Iuser {
    _id:        string;
    id:         number;
    first_name: string;
    last_name:  string;
    username:   string;
    email:      string;
    image:      string;
}
