{
    type First<T extends any[]> = T extends [] ? never : T[0]

    let a = [0, 1, 2, 3]

    type X = First<[1, 2, 3]>

    let k: X = 1
}


