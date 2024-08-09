import React from 'react';

export default function List({ categories, onCategoryChange, onSortChange }) {
    return (
        <div className="flex justify-between p-4">
            <select
                className="p-2 border rounded"
                onChange={(e) => onCategoryChange(e.target.value)}
                defaultValue=""
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <select
                className="p-2 border rounded"
                onChange={(e) => onSortChange(e.target.value)}
                defaultValue="latest"
            >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
}
