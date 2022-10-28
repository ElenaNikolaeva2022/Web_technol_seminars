const celsius = Number.parseInt(prompt("Введите температуру в градусах Цельсия:"));
const fahr = celsius * 1.8 + 32;
alert(`Температура в Фаренгейтах: ${fahr.toFixed(1)}`);
