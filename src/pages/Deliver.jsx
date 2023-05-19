// Deliver.js
import React from 'react';

const Deliver = () => {
  return (
    <div>
      <h1>Страница Deliver</h1>
      <p>Здесь можно добавить описание страницы Deliver.</p>
      
      {/* Пример формы */}
      <form>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" />
        
        <label htmlFor="address">Адрес:</label>
        <input type="text" id="address" />
        
        <button type="submit">Отправить</button>
      </form>
      
      {/* Пример списка */}
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
      </ul>
    </div>
  );
};

export default Deliver;
