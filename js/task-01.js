// Получаем список категорий
const categoriesList = document.querySelector("#categories");

// Находим все элементы li.item внутри списка категорий
const categoryItems = categoriesList.querySelectorAll(".item");

// Выводим количество категорий
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимся по каждому элементу li.item и выводим информацию
categoryItems.forEach((category) => {
  // Находим заголовок h2 внутри текущей категории
  const categoryName = category.querySelector("h2").textContent;
  
  // Находим все элементы li внутри текущей категории
  const categoryElements = category.querySelectorAll("ul > li");
  
  // Выводим информацию о категории и количестве элементов в ней
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});