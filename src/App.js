// import React, { useState } from 'react';
// import AnalyzerForm from './components/AnalyzerForm';
// import PerformanceReport from './components/PerformanceReport';
// import LoadingSpinner from './components/LoadingSpinner';

// function App() {
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleAnalysis = async (url) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('http://localhost:5000/api/analyze', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ url }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to analyze website');
//       }
//       const data = await response.json();
//       setReport(data);
//     } catch (error) {
//       console.error('Error analyzing website:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>SpeedX - Website Performance Analyzer</h1>
//       <AnalyzerForm onAnalyze={handleAnalysis} />
//       {loading ? <LoadingSpinner/> : <PerformanceReport report={report} />}
//       {error && <p className="error">Error: {error}</p>}
//       {report && <PerformanceReport report={report} />}
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import AnalyzerForm from './components/AnalyzerForm';
// import PerformanceReport from './components/PerformanceReport';
// import LoadingSpinner from './components/LoadingSpinner';
// import './styles.css'

// function App() {
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleAnalysis = async (url) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('http://localhost:5000/api/analyze', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ url }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to analyze website');
//       }
//       const data = await response.json();
//       setReport(data);
//     } catch (error) {
//       console.error('Error analyzing website:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app">
//       <h1 className='heading'>Website Performance Analyzer</h1>
//       <AnalyzerForm onAnalyze={handleAnalysis} />
//       {loading && <p>Analyzing website...</p>}
//       {/* {loading ? <LoadingSpinner/> : <PerformanceReport report={report} />} */}

//       {error && <p className="error">Error: {error}</p>}
//       {report && <PerformanceReport report={report} />}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import AnalyzerForm from './components/AnalyzerForm';
import PerformanceReport from './components/PerformanceReport';
import LoadingSpinner from './components/LoadingSpinner';
import './styles.css';

function App() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalysis = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        throw new Error('Failed to analyze website');
      }
      const data = await response.json();
      setReport(data);
    } catch (error) {
      console.error('Error analyzing website:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className='heading'>Website Performance Analyzer</h1>
      <AnalyzerForm onAnalyze={handleAnalysis} />
      {loading && <LoadingSpinner />}
      {error && <p className="error">Error: {error}</p>}
      {!loading && report && <PerformanceReport report={report} />}
    </div>
  );
}

export default App;
