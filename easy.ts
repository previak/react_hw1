// MyPick создает новый тип на основе полей K из типа P
export type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// Массив - любой, N - number, если N - ключ массива, возвращаем тип элемента по индексу N
export type NOfArray<ArrayObj extends any[], N extends number> =
    N extends keyof ArrayObj ? ArrayObj[N] : never;

// Создаем массив, у которого Element - первый элемент, остальные элементы из массива
export type Unshift<ArrayType extends any[], Element> = [Element, ...ArrayType];

// Исключаем тип U если к нему можно присвоить тип T, иначе возвращаем T
export type MyExclude<T, U> = T extends U ? never : T;
