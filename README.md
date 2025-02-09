## Крестики-нолики
Учебная задача по JS

*(В рамках курса Frontend-Developer в RollingScopesSchool)*

### Описание

Реализовать класс `TicTacToe`

#### Методы:

##### `getCurrentPlayerSymbol()`
должен возвращать `x` или `o`

##### `nextTurn(row, col)`
должно правильно обновлять состояние класса (сменить текущего игрока, обновить хранилище меток и т. д.)

##### `isFinished()`
должно возвращать true, если игра закончена (например, есть победитель или ничья)

##### `getWinner()`
должен возвращать символ победителя (`x` или `o`) или ноль, если победителя еще нет

##### `noMoreTurns()`
должен возвращать true, если больше нет полей для размещения `x` или `o`

##### `isDraw()`
должно возвращать true, если больше нет ходов и нет победителя

##### `getFieldValue(row, col)`
должно возвращать значение `matrix[row][col]` (если есть) или `null`

## Как тестировать

- Запустить `npm install` в терминале
- Запустить `npm test` в терминале
- Вы сможете увидеть количество пройденных и провалившихся тестов

### Заметки
1. Рекомендуется использовать nodejs версии 10 или ниже.
2. Рекомендуется реализовать функцию так, чтоб каждый из тестов не превышал 30 секунд.
