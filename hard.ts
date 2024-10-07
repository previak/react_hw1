// разделяем строку на 2 части по нижнему подчеркиванию, убираем его и делаем вторую часть с большой буквы,
// если нельзя сделать разделение по подчеркиванию, возвращаем T
type CamelCase<S extends string> =
    S extends `${infer P1}_${infer P2}` ? `${P1}${Uppercase<P2>}` : S;

// проходим по всем ключам K типа T и конвертируем их имена с помощью CamelCase
// если T[K] - объект, рекурсивно применяем Camelize для T<K>, иначе ничего
export type Camelize<T> = {
    [K in keyof T as CamelCase<string & K>]: T[K] extends object ? Camelize<T[K]> : T[K];
};

export type DeepPick<T, Paths extends string> =
    Paths extends `${infer Head}.${infer Tail}`
        ? Head extends keyof T
            ? { [K in Head]: DeepPick<T[Head], Tail> }
            : never
        : Paths extends keyof T
            ? { [K in Paths]: T[Paths] }
            : never;
