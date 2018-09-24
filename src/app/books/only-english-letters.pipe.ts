import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyEnglishLetters'
})
export class OnlyEnglishLettersPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/[^a-zA-Z ]/g, "");
  }
}
