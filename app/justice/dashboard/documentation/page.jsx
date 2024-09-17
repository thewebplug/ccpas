"use client";

import { useEffect, useState } from "react";

export default function Landing() {
    const [csvData, setCSVData] = useState([]);
    const [headers, setHeaders] = useState([]);
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const content = e.target.result;
        const lines = content.split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
          const values = line.split(',');
          return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
          }, {});
        });
  
        setHeaders(headers);
        setCSVData(data);
      };
  
      reader.readAsText(file);
    };
    return (
        <div className="csv-viewer">
          <h1 className="csv-viewer__title">CSV File Viewer</h1>
          <div className="csv-viewer__upload-container">
            <label htmlFor="csvFile" className="csv-viewer__upload-container__upload-button">
              Upload CSV
              <input
                id="csvFile"
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
              />
            </label>
          </div>
          {csvData.length > 0 && (
            <div className="csv-viewer__table-container">
              <table>
                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even' : 'odd'}>
                      {headers.map((header, cellIndex) => (
                        <td key={cellIndex}>{row[header]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
         
        </div>
      );
}
