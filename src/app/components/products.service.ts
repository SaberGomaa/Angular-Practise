import { Injectable } from '@angular/core';
import { IProduct } from './../Models/iproduct';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private proList: IProduct[];

    constructor() {
        this.proList = [
            { id: 1, Name: 'MacBook', Price: 450, Quantity: 5, categoryId: 1, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
            { id: 2, Name: 'LabDell', Price: 520, Quantity: 2, categoryId: 1, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
            { id: 10, Name: 'OPPO', Price: 20, Quantity: 1, categoryId: 2, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
            { id: 45, Name: 'Realme', Price: 80, Quantity: 12, categoryId: 2, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
            { id: 20, Name: 'LG TV', Price: 120, Quantity: 10, categoryId: 3, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
            { id: 41, Name: 'Samsung TV ', Price: 210, Quantity: 5, categoryId: 3, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" }
        ];
    }

    getAllProducts(): IProduct[] {
        return this.proList;
    }

    getProductByCatId(catId: number): IProduct[] {
        if (catId == 0) {
            return this.proList;
        }
        else {
            return this.proList.filter(p => p.categoryId == catId);
        }
    }

    getProductById(Id: number): IProduct | undefined {
        return this.proList.find(p => p.id == Id);
    }

    addNewProduct(Product: IProduct): void {
        this.proList.push(Product);
    }

    getAllProducsIDs(): number[] {
        return this.proList.map(p => p.id);
    }

}
