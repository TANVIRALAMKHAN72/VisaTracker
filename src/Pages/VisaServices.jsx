import React, { useEffect, useState } from "react";
import { Select, Button } from "antd";
import { useNavigate } from "react-router";
import "antd/dist/reset.css";

const { Option } = Select;

const VisaServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterCountry, setFilterCountry] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/visaServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "All" || service.type === filterType;
    const matchesCountry = filterCountry === "All" || service.country === filterCountry;
    return matchesSearch && matchesType && matchesCountry;
  });

  const countryOptions = ["All", ...new Set(services.map((s) => s.country))];

  const handleApply = (service) => {
    navigate("/my-application", { state: { visaName: service.name } });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 px-6 my-6">
      <div className="flex flex-col md:flex-row gap-4 mb-10 p-4 rounded shadow bg-gray-50 ">
        <input
          type="text"
          placeholder="Search Visa..."
          className="border p-2 rounded flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          value={filterType}
          onChange={(value) => setFilterType(value)}
          className="w-40"
        >
          <Option value="All">All Types</Option>
          <Option value="Tourist">Tourist</Option>
          <Option value="Work">Work</Option>
          <Option value="Student">Student</Option>
        </Select>

        <Select
          value={filterCountry}
          onChange={(value) => setFilterCountry(value)}
          className="w-48"
        >
          {countryOptions.map((country) => (
            <Option key={country} value={country}>
              {country}
            </Option>
          ))}
        </Select>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg px-4 py-8 bg-white shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <p className="text-sm mb-4">
              Processing Time: <span className="font-medium">{service.processingTime}</span>
            </p>
            <Button type="primary" block onClick={() => handleApply(service)}>
              Apply Now
            </Button>
          </div>
        ))}

        {filteredServices.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No visas found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default VisaServices;
