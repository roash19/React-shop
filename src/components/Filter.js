import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = ({ filterBy, setFilter, searchQuery, setSearchQuery }) => {

  return (
    <Menu secondary>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={setFilter.bind(this, 'all')}
      >Все</Menu.Item>
      <Menu.Item
        active={filterBy === 'price-higt'}
        onClick={setFilter.bind(this, 'price-higt')}
      >Цена (дорогие)</Menu.Item>
      <Menu.Item
        active={filterBy === 'price-low'}
        onClick={setFilter.bind(this, 'price-low')}
      >Цена (дешевые)</Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilter.bind(this, 'author')}
      >Автор</Menu.Item>
      <Menu.Item>
       <Input icon='search'
              onChange={e => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="Введите запрос..."/>
      </Menu.Item>
  </Menu>
  )
};

export default Filter;

