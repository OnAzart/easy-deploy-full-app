'use client'; // This is a client component

import { useState } from 'react';

export default function Home() {
  const [toolName, setToolName] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSummary('');

    try {
      const response = await fetch(`/api/summarize?toolName=${toolName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error("Could not get summary:", error);
      setSummary("Failed to get summary. Please check the backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>AI Docs Summarizer</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label htmlFor="toolName" style={{ display: 'block', marginBottom: '5px' }}>
          Enter Tool Name:
        </label>
        <input
          type="text"
          id="toolName"
          value={toolName}
          onChange={(e) => setToolName(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '300px',
            marginBottom: '10px',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Summarizing...' : 'Get Summary'}
        </button>
        {summary && (
          <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
            <h2>Summary:</h2>
            <p>{summary}</p>
          </div>
        )}
      </form>
    </div>
  );
}
