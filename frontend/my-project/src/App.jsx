import axios from 'axios';
import { useEffect, useState } from 'react';

// Backend URL (Deployment ke baad ise change karein)
const API_BASE = "http://localhost:8000/api/v1/user";

const App = () => {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Requirement: View Profile & List Projects
  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const res = await axios.get(`${API_BASE}/profile`);
      setProfile(res.data);
      setProjects(res.data.projects || []);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setLoading(false);
    }
  };

  // Requirement: Search by Skill
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${API_BASE}/projects?skill=${searchTerm}`);
      setProjects(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading Playground...</div>;
  if (!profile) return <div className="text-center mt-10">No Profile Data Found. Seed your DB first!</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-5 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Profile Header */}
        <header className="bg-white p-8 rounded-lg shadow-md mb-6">
          <h1 className="text-4xl font-bold text-blue-600">{profile.name}</h1>
          <p className="text-gray-600 mt-2">{profile.education}</p>
          <div className="flex gap-4 mt-4 text-blue-500">
            <a href={profile.links.github} target="_blank" className="hover:underline">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" className="hover:underline">LinkedIn</a>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Skills:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills.map(s => (
                <span key={s} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
        </header>

        {/* Search Feature */}
        <section className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Search projects by skill (e.g. React, Python)..."
              className="flex-1 p-3 rounded-lg border shadow-sm focus:outline-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Search
            </button>
          </form>
        </section>

        {/* Projects List */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.length > 0 ? projects.map((proj, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
                <h4 className="text-xl font-semibold text-gray-800">{proj.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">{proj.description}</p>
                <div className="mt-4 flex gap-3">
                  <a href={proj.links.github} className="text-blue-500 text-xs font-bold uppercase tracking-wider hover:text-blue-700">Source Code</a>
                  {proj.links.live && <a href={proj.links.live} className="text-green-500 text-xs font-bold uppercase tracking-wider hover:text-green-700">Live Demo</a>}
                </div>
              </div>
            )) : (
              <p className="text-gray-500 italic">No projects found for "{searchTerm}"</p>
            )}
          </div>
        </section>

        {/* Health Check Status (Small Badge) */}
        <footer className="mt-10 text-center text-xs text-gray-400">
          Backend Status: <span className="text-green-500 font-bold">● Live</span>
        </footer>
      </div>
    </div>
  );
};

export default App;