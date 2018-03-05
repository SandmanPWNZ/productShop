
import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
  name: "orderby"
})

export class OrderByPipe implements PipeTransform {
  transform(array:Array<any>, arg1, arg2) {


    if(array) {

      // console.log('args:', arg1);
      // console.log('args:', arg2);
      let orderByValue = arg1
      let byVal = 1


      if(!arg2) {
        byVal = -1
      }
      // console.log("byVal",byVal);
      // console.log("orderByValue",orderByValue);

      array.sort((a: any, b: any) => {
        if(a[orderByValue] < b[orderByValue]) {
          return -1*byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1*byVal;
        } else {
          return 0;
        }
      });
      return array;
    }
    //
  }
}