// Проверка для каждого ключа P в типе T:
// если тип свойства T[P] является объектом, то рекурсивно применяется DeepPartial к T[P].
// иначе тип свойства T[P] остается неизменным.
// свойства становятся опциональными благодаря символу '?'.
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Если строку можно разбить на первый символ и остальные, то делаем первый символ большим, иначе ничего не делаем
export type MyCapitalize<T extends string> =
    T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : T;

// Для каждого ключа P в типе T:
// удаляет модификатор readonly делая свойство изменяемым
// если тип свойства T[P] является объектом, то рекурсивно применяется DeepMutable к T[P].
// иначе тип свойства T[P] остается неизменным.
export type DeepMutable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P];
};


// проверяем можно ли разделить строку StringElem на три части:
// Prefix: часть строки до символа :
// Param: часть строки после : и до /
// Rest: остальная часть строки после /
// если это возможно, то возвращает Param и рекурсивно применяет ParseURLParams к Rest.
// если строку нельзя разделить на три части, проверяет, можно ли разделить её на две части:
// Prefix: часть строки до символа :
// Param: часть строки после :
// если это возможно, то возвращает Param.
// если строку нельзя разделить на параметры, возвращает never.
export type ParseURLParams<StringElem extends string> =
    StringElem extends `${infer Prefix}:${infer Param}/${infer Rest}`
        ? Param | ParseURLParams<Rest>
        : StringElem extends `${infer Prefix}:${infer Param}`
            ? Param
            : never;

