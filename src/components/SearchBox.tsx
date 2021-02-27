import { useState } from 'react';
import { SearchFieldProps } from '../models/product-model';
import ProductsPage from './ProductsPage';

export const Searchbox: React.FC<SearchFieldProps> = ({ searchText, props }: SearchFieldProps) => {
    const [search, setSearch] = useState(searchText);
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { target: { value }} = event;
        setSearch(value)
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
          props.history.push(`/products?search=${search}`)
        }
    }
    return (
      <input
        type="text"
        value={search}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    );
  }