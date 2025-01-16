import React, { useState } from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar/Navbar";
import { FaSearch } from "react-icons/fa";

const DiseasesAndConditions = () => {
  const [diseaseSearch, setDiseaseSearch] = useState("");
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const diseases = [
    { name: "Diabetes", code: "1234" },
    { name: "Hypertension", code: "5678" },
    { name: "Asthma", code: "91011" },
    { name: "Arthritis", code: "1213" },
    // Add more diseases here
  ];

  const fetchDiseaseInfo = async (code) => {
    setLoading(true);
    setDiseaseInfo(null);
    try {
      const response = await fetch(`https://medlineplus.gov/api/${code}`);
      const data = await response.json();
      setDiseaseInfo(data);
    } catch (error) {
      console.error("Error fetching disease info:", error);
      setDiseaseInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setDiseaseSearch(e.target.value);
  };

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    fetchDiseaseInfo(disease.code);
  };

  return (
    <div className="overflow-x-hidden font-sans">
      <Topbar />
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        {/* Page Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Diseases and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Find comprehensive and reliable information on various diseases and
            conditions. Use the search below to get started.
          </p>
        </header>

        {/* Search Section */}
        <div className="flex justify-center items-center mb-12">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={diseaseSearch}
              onChange={handleSearchChange}
              placeholder="Search for a disease..."
              className="w-full px-6 py-3 text-lg border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Disease List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {diseases
            .filter((d) =>
              d.name.toLowerCase().includes(diseaseSearch.toLowerCase())
            )
            .map((disease) => (
              <button
                key={disease.code}
                onClick={() => handleDiseaseSelect(disease)}
                className="px-4 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition"
              >
                {disease.name}
              </button>
            ))}
        </div>

        {/* Disease Information Section */}
        {loading && (
          <div className="text-center text-lg text-primary font-semibold">
            Fetching information...
          </div>
        )}

        {diseaseInfo && (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {diseaseInfo.title || selectedDisease.name}
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                {diseaseInfo.description || "No description available."}
              </p>
              {diseaseInfo.symptoms && (
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Symptoms
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {diseaseInfo.symptoms.map((symptom, idx) => (
                      <li key={idx}>{symptom}</li>
                    ))}
                  </ul>
                </div>
              )}
              {diseaseInfo.treatment && (
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Treatment
                  </h3>
                  <p className="text-gray-700">{diseaseInfo.treatment}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {!loading && !diseaseInfo && selectedDisease && (
          <div className="text-center text-lg text-gray-600 font-medium">
            No information available for {selectedDisease.name}.
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasesAndConditions;
