import React, { useState } from "react";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    linkedin: "",
    website: "",
    summary: "",
    skills: [],
    certifications: [],
    interests: [],
    education: {
      degree: "",
      school: "",
      graduation: "",
    },
    languages: [],
    experience: [
      {
        role: "",
        company: "",
        timeline: "",
        description: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, key, index = 0, field = null) => {
    const { value } = e.target;
    setFormData((prev) => {
      const newArr = [...prev[key]];
      if (field) {
        newArr[index][field] = value;
      } else {
        newArr[index] = value;
      }
      return { ...prev, [key]: newArr };
    });
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { role: "", company: "", timeline: "", description: "" },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Resume Data:", JSON.stringify(formData, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-6 bg-white w-full max-w-2xl mx-auto"
    >
      <h2 className="text-xl font-bold">Resume Builder</h2>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="input"
      />
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="input"
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="input"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="input"
      />
      <input
        name="linkedin"
        placeholder="LinkedIn"
        onChange={handleChange}
        className="input"
      />
      <input
        name="website"
        placeholder="Website"
        onChange={handleChange}
        className="input"
      />
      <textarea
        name="summary"
        placeholder="Summary"
        onChange={handleChange}
        className="input"
      />

      <h3 className="font-semibold">Skills</h3>
      {[0, 1, 2, 3].map((_, i) => (
        <input
          key={i}
          placeholder={`Skill ${i + 1}`}
          onChange={(e) => handleArrayChange(e, "skills", i)}
          className="input"
        />
      ))}

      <h3 className="font-semibold">Certifications</h3>
      {[0, 1].map((_, i) => (
        <input
          key={i}
          placeholder={`Certification ${i + 1}`}
          onChange={(e) => handleArrayChange(e, "certifications", i)}
          className="input"
        />
      ))}

      <h3 className="font-semibold">Interests</h3>
      {[0, 1, 2].map((_, i) => (
        <input
          key={i}
          placeholder={`Interest ${i + 1}`}
          onChange={(e) => handleArrayChange(e, "interests", i)}
          className="input"
        />
      ))}

      <h3 className="font-semibold">Education</h3>
      <input
        name="degree"
        placeholder="Degree"
        onChange={(e) => {
          const value = e.target.value;
          setFormData((prev) => ({
            ...prev,
            education: { ...prev.education, degree: value },
          }));
        }}
        className="input"
      />
      <input
        name="school"
        placeholder="School"
        onChange={(e) => {
          const value = e.target.value;
          setFormData((prev) => ({
            ...prev,
            education: { ...prev.education, school: value },
          }));
        }}
        className="input"
      />
      <input
        name="graduation"
        placeholder="Graduation Date"
        onChange={(e) => {
          const value = e.target.value;
          setFormData((prev) => ({
            ...prev,
            education: { ...prev.education, graduation: value },
          }));
        }}
        className="input"
      />

      <h3 className="font-semibold">Languages</h3>
      {[0, 1].map((_, i) => (
        <input
          key={i}
          placeholder={`Language ${i + 1}`}
          onChange={(e) => handleArrayChange(e, "languages", i)}
          className="input"
        />
      ))}

      <h3 className="font-semibold">Experience</h3>
      {formData.experience.map((job, idx) => (
        <div key={idx} className="space-y-2 border p-2">
          <input
            placeholder="Role"
            value={job.role}
            onChange={(e) => handleArrayChange(e, "experience", idx, "role")}
            className="input"
          />
          <input
            placeholder="Company"
            value={job.company}
            onChange={(e) => handleArrayChange(e, "experience", idx, "company")}
            className="input"
          />
          <input
            placeholder="Timeline"
            value={job.timeline}
            onChange={(e) =>
              handleArrayChange(e, "experience", idx, "timeline")
            }
            className="input"
          />
          <textarea
            placeholder="Description"
            value={job.description}
            onChange={(e) =>
              handleArrayChange(e, "experience", idx, "description")
            }
            className="input"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        + Add Experience
      </button>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit & Console Log JSON
      </button>
    </form>
  );
};

export default ResumeForm;
