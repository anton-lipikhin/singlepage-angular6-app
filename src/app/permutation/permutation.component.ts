import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permutation',
  templateUrl: './permutation.component.html',
  styleUrls: ['./permutation.component.css']
})
export class PermutationComponent implements OnInit {

  constructor() { }

  model = {
    value: 'abc',
    combs: []
  }

  permutation = (string){
    let result = [], combs = [], indexes = [];

    function search(index){ // Функция, вызывающаяся рекурсивно для поиска комбинаций символов
      for(var i = 0; i < string.length; i++){ // Пробегаем по всем символам
        if(!indexes[i]){ // Отсекаем варианты с повторяющимися символами типа: aaa, aab ...
          combs[index] = string[i]; // сохраняем текущий символ в массив
          if(index < string.length - 1){ // Если это не последний символ в строке
            indexes[i] = true; // Запоминаем позицию символа, для которого нужно отсекать дубли
            search(index + 1); // Рекурсивный вызов search() со следующего индекса
            indexes[i] = false; // Сбрасываем индекс после вызова search()
          } else { // Если это последний символ в строке
            result.push(combs.join('')); // Добавляем новую комбинация в массив
          }
        }
      }
    }

    search(0); // Первый вызов функции search() с интдексом 0
    return result; // возвращаем результат в виде массива
  }

  ngOnInit() {
    this.model.combs = this.permutation(this.model.value);
  }

  onValueChanged() {
    this.model.combs = this.permutation(this.model.value);
  }

}
