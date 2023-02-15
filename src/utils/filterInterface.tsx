interface IFilter{
    id: number;
    name:string;
}

export interface IFilterDataText extends IFilter {
    href?:string;
    count?:number;
}

export interface IFilterDataCheckbox extends IFilter{
    label: string;
    count?:number;
}