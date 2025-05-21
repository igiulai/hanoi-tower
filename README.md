# Решение задачи "Ханойская башня" с использованием дженериков

## Цель работы
- Закрепление навыков работы с дженериками в TypeScript
- Реализация рекурсивного алгоритма для решения головоломки "Ханойская башня"
- Практика использования generic-классов

## Описание задачи
Ханойская башня — классическая головоломка, где необходимо перенести пирамиду из дисков с одного стержня на другой, соблюдая правила:
1. За один ход можно переносить только один диск
2. Нельзя класть больший диск на меньший
3. Используется три стержня (исходный, целевой и вспомогательный)

## Реализация

### Класс Stack<T>
Реализация generic-стека с основными операциями:
```typescript
class Stack<T> {
    private items: T[] = [];

    push(item: T): void { /* ... */ }
    pop(): T | undefined { /* ... */ }
    peek(): T | undefined { /* ... */ }
    isEmpty(): boolean { /* ... */ }
    size(): number { /* ... */ }
    print(): string { /* ... */ }
}
```

### Алгоритм решения
Рекурсивная функция `hanoi`:
```typescript
function hanoi(
    n: number,
    source: Stack<number>,
    target: Stack<number>,
    auxiliary: Stack<number>,
    moves: number[]
): void {
    if (n === 1) {
        // Базовый случай - перемещение одного диска
        const disk = source.pop();
        if (disk !== undefined) {
            target.push(disk);
            moves[0]++;
            console.log(`Move disk ${disk}...`);
        }
    } else {
        // Рекурсивный случай
        hanoi(n - 1, source, auxiliary, target, moves);
        hanoi(1, source, target, auxiliary, moves);
        hanoi(n - 1, auxiliary, target, source, moves);
    }
}
```

## Запуск проекта

1. Убедитесь, что установлен Node.js и npm
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Скомпилируйте TypeScript-код:
   ```bash
   npx tsc hanoi.ts
   ```
4. Запустите решение:
   ```bash
   node hanoi.js
   ```

## Настройка
Вы можете изменить количество дисков, изменив значение переменной `numDisks` в файле `hanoi.ts` (от 3 до 8 рекомендуется).

## Пример вывода
```
Initial state:
Disks: 8 7 6 5 4 3 2 1
Target: empty
Auxiliary: empty

Move disk 1 from Source (8 7 6 5 4 3 2) to Target (1)
...
Move disk 8 from Source (empty) to Target (8 7 6 5 4 3 2 1)

Final state:
Source: empty
Target: 8 7 6 5 4 3 2 1
Auxiliary: empty

Total number of moves: 255
```
