function findValueByKey(company, companyName) {
  // Перевірка, чи поточна компанія має вказане ім'я
  if (company.name === companyName) {
    return company;
  }

  // Якщо поточна компанія має клієнтів, шукаємо серед клієнтів
  if (company.clients && Array.isArray(company.clients)) {
    for (let i = 0; i < company.clients.length; i++) {
      const foundClient = findValueByKey(company.clients[i], companyName);
      if (foundClient) {
        return foundClient;
      }
    }
  }

  return null; // Якщо нічого не знайдено
}

// Приклад використання
const companyName = "Клієнт 1.2.3";
const result = findValueByKey(company, companyName);

if (result) {
  console.log(`Знайдена компанія з ім'ям ${companyName}:`, result);
} else {
  console.log(`Компанія з ім'ям ${companyName} не знайдена.`);
}
