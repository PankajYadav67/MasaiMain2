import React, { useState } from 'react';

// Types
export type Laptop = {
    id: number;
    model: string;
    makeYear: number;
    operatingSystem: string;
    screenHeight: number;
    screenWidth: number;
    price: number;
};

type SortingOptions = 'id' | 'model' | 'makeYear' | 'operatingSystem' | 'screenHeight' | 'screenWidth' | 'price';

type Props = {
    laptops: Laptop[];
    onAddLaptop: (laptop: Laptop) => void;
};

const ProductManagementApp: React.FC<Props> = ({ laptops, onAddLaptop }) => {
    const [formData, setFormData] = useState<Laptop>({
        id: 0,
        model: '',
        makeYear: 0,
        operatingSystem: '',
        screenHeight: 0,
        screenWidth: 0,
        price: 0,
    });
    const [sortOption, setSortOption] = useState<SortingOptions>('id');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: name === 'model' || name === 'operatingSystem' ? value : Number(value) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddLaptop({ ...formData, id: laptops.length + 1 });
        setFormData({
            id: 0,
            model: '',
            makeYear: 0,
            operatingSystem: '',
            screenHeight: 0,
            screenWidth: 0,
            price: 0,
        });
    };

    const dynamicSort = (property: SortingOptions, order: 'asc' | 'desc') => {
        return (a: Laptop, b: Laptop) => {
            const aValue = a[property];
            const bValue = b[property];
            if (order === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return bValue > aValue ? 1 : -1;
            }
        };
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value as SortingOptions);
    };

    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value as 'asc' | 'desc');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Model:
                    <input type="text" name="model" value={formData.model} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    Make Year:
                    <input type="number" name="makeYear" value={formData.makeYear} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    Operating System:
                    <input type="text" name="operatingSystem" value={formData.operatingSystem} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    Screen Height:
                    <input type="number" name="screenHeight" value={formData.screenHeight} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    Screen Width:
                    <input type="number" name="screenWidth" value={formData.screenWidth} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    Price:
                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Add Laptop</button>
            </form>
            <label>
                Sort by:
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="id">ID</option>
                    <option value="model">Model</option>
                    <option value="makeYear">Make Year</option>
                    <option value="operatingSystem">Operating System</option>
                    <option value="screenHeight">Screen Height</option>
                    <option value="screenWidth">Screen Width</option>
                    <option value="price">Price</option>
                </select>
            </label>
            <label>
                Order:
                <select value={sortOrder} onChange={handleOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </label>
            <table style={{ border: "4px soild black" }}>
                {/* Table header */}
                <thead style={{ border: "4px soild black" }}>
                    <tr>
                        <th>ID</th>
                        <th>Model</th>
                        <th>Make Year</th>
                        <th>Operating System</th>
                        <th>Screen Height</th>
                        <th>Screen Width</th>
                        <th>Price</th>
                    </tr>
                </thead>
           
                <tbody>
                    {laptops.sort(dynamicSort(sortOption, sortOrder)).map((laptop) => (
                        <tr key={laptop.id}>
                            <td>{laptop.id}</td>
                            <td>{laptop.model}</td>
                            <td>{laptop.makeYear}</td>
                            <td>{laptop.operatingSystem}</td>
                            <td>{laptop.screenHeight}</td>
                            <td>{laptop.screenWidth}</td>
                            <td>{laptop.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagementApp;
