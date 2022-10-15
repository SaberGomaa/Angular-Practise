export interface IProduct {
    Id:number;
    Name : string;
    Quantity : number;
    Price : number;
    imgUrl : string ;

    categoryId? : number;
}
