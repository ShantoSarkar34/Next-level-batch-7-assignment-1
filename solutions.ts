// problem 1 ===========================
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// problem 2 ===========================
function reverseString(input: string): string {
  return input.split(" ").reverse().join(" ");
}

// problem 3 ===========================
type StringOrNumber = number | string;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// problem 4 ===========================
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// problem 5 ===========================
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// problem 6 ===========================
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// problem 7 ===========================
function getIntersection(array1: number[], array2: number[]): number[] {
  return array1.filter((num) => array2.includes(num));
}
