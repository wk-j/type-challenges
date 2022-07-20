type MyPick<T, K extends keyof T> = {
    [KY in K]: T[KY]
}
