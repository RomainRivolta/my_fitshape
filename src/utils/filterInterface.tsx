interface IFilter{
    id: number;
    name:string;
    count?:number;
}

export interface IFilterDataText extends IFilter {
    href?:string;
}

export interface IFilterDataCheckbox extends IFilter{
    value: string | number;
}