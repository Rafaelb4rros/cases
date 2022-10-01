type MyOmit<T, K> = any --> type MyOmit<T, K extends keyof T> = { [Key in keyof T as Key extends K ? never : Key]: T[Key] }
