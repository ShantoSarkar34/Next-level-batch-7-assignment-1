# How Generics Help Build Reusable and Type-Safe Code in TypeScript

## Introduction

When I started learning TypeScript, one problem I faced was how to write reusable code without losing type safety. Sometimes I used `any`, but that removed all the benefits of TypeScript.

Then I learned about Generics. Generics help us write flexible code that works with different types while still keeping strong type checking.

## What Are Generics?

Generics are like placeholders for types. Instead of writing a function for only one type, we can write it once and use it for many types.

## Example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

## What Are Generics?

Generics simply allow us to use the same function or logic for different data types while keeping type safety.

## Problem Without Generics

Without generics, we use `any`, but it removes type safety.

### Example :

```ts
function getValue(value: any): any {
  return value;
}
```

## Solution With Generics

Generics solve this problem by keeping the type safe and reusable.

### Example :

```ts
function getValue<T>(value: T): T {
  return value;
}
```

## Generics with Objects

We can use generics to safely access object properties.

### Example :

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

## Generics with Arrays

Generics also work with arrays and make functions reusable.

### Example :

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

## Why Generics Are Useful

- Makes code reusable
- Keeps type safety
- Avoids `any`
- Prevents bugs
- Improves code quality

## Conclusion

Generics are very useful in TypeScript. They help us write flexible and reusable code while keeping type safety. At first they may feel confusing, but with practice they become easy to understand.

```

```
