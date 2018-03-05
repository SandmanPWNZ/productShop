export class Products {
    title: string;
    weight: number;
  }
export class Category {
    title: string;
    products: Products[];
    weight: number;
    subCategory: Category[];
    hide: boolean
}