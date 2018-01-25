import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(items: any[], searchItem: string): any[] {
    console.log(items);
    console.log(searchItem);
    if (!items) {
      return [];
    }

    if (!searchItem) {
      return items;
    }

    searchItem = searchItem.toLowerCase();
    return items.filter(it => {
      return Object.values(it).toString().toLowerCase().includes(searchItem.toLowerCase());
    });
   }
}
