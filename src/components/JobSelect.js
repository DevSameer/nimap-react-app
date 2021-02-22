import React from "react";

function JobSelect({ setJob, selectedJob }) {
  return (
    <select
      name="selectjob"
      value={selectedJob}
      onChange={(e) => setJob(e.target.value)}
    >
      <optgroup label="Python" />
      <option key="python" value="pythondev">
        Python Dev
      </option>
      <option key="android" value="android">
        Android
      </option>
    </select>
  );
}

export default JobSelect;
