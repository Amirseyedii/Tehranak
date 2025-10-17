import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import Search from '../components/Search';
import { properties } from '../data/properties';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header className="app-header">
        <h1>Real Estate</h1>
        <Search onSearch={handleSearch} />
      </header>
      <main>
        <PropertyList properties={filteredProperties} />
      </main>
    </div>
  );
};

export default HomePage;