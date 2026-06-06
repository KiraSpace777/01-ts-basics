{
  interface Product {
    readonly id: number;
    title: string;
    description?: string;
  }

  const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
  };

  console.log(`Product: ${JSON.stringify(product)}`);
}

//=========================================================
// Задача 2. Інтерфейси
// ========================================================
// --------------------------------------------------------
// const product = {
//   id: 1,
//   title: "Tablet",
//   description: "Compact and fast",
// };
//
// console.log(`Product: ${JSON.stringify(product)}`);
// --------------------------------------------------------
// Створи інтерфейс Product, який описує структуру цього об'єкта.
// Зроби поле id тільки для читання – воно не повинно змінюватись після створення об'єкта.
// Зроби поле description необов'язковим – не всі товари можуть його мати.
// Типізуй змінну product за допомогою створеного інтерфейсу.
// Залиш властивості обʼєкта product і їх значення без змін.

//https://www.typescriptlang.org/play/
