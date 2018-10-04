import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  @Input('appUppercase');

  @HostListener('keypress', ['$event'])
  onKeyPress(evt: KeyboardEvent) {
    let allowedChars = /^[a-zA-Zа-яА-Я0-9]$/i,
      forbiddenChars = /^[ж,э,х,ъ,б,ю]$/i,
      res = allowedChars.test(evt.key) && !forbiddenChars.test(evt.key);
    if(!res || evt.target.value.length > 14){
      evt.preventDefault();
    }
    evt.target.value = formatString(evt.target.value);
  }

  @HostListener('input', ['$event'])
  onInput(evt: KeyboardEvent) {
    let str = evt.target.value;
    str = evt.target.value.toUpperCase();
    str = str.replace(/-/gi, '');
    if(str.length > 3){
      str = str.substr(0 , 3) + '-' + str.slice(3);
    }
    evt.target.value = formatString(str);
  }

  var ruTemplate = 'йцукенгшщзфывапролдячсмитьЙЦУКЕНГШЩЗФЫВАПРОЛДЯЧСМИТЬ',
    enTemplate = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

  function formatString(str){
    let result = '';
    for(let sym of str){
      let index = ruTemplate.indexOf(sym);
      result += index >= 0 ? enTemplate[index] : sym;
    }
    return result;
  }
}
