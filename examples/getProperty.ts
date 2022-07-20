function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

type A = {
  a: string
  b: string
}

let obj = { a: "100", b: "200" }

let av = getProperty(obj, "a")
console.log(av)
