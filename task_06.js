// itgid.info - курс Node.js 2024

// Task 06.
// Создайте анонимный модуль, который помощью модуля getCSV читает файл ./f_06/v_06.csv, и возвращает информацию из файла в виде массива объектов. Обратите внимание - файл содержит пустые строки. В результирующем массиве пустых элементов быть не должно. Файл csv править - запрещено. Пример вызова модуля в index.js. 

const getCSV = require('./get_csv');

module.exports = async function () {
          const records = await getCSV('./f_06/v_06.csv',{
                               columns: true,
                               delimiter: ',',
                               trim : true,
                               skip_empty_lines : true,
          });
          const data = records.map(({Numbers,Letters}) => [Numbers,Letters]);
          return data;
}
