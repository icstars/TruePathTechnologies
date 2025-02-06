import  { useState } from "react";

export default function SearchBox() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );

    setFilteredData(results);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 w-full rounded"
      />
      <ul className="mt-4">
        {filteredData.map((item) => (
          <li key={item.id} className="border-b py-2">
            <strong>{item.name}</strong> - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};





