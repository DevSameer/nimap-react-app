import { React, useState, useEffect } from "react";
import JobSelect from "../JobSelect";
import JobResponsibility from "../JobResponsibility";

function Jobs() {
  const pythonDevResponsibility =
    "Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services. To be successful in this role, you should have experience using server-side logic and work well in a team.";
  const androidDevResponsibility =
    "We are looking for an Android Developer who possesses a passion for pushing mobile technologies to the limits. This Android app developer will work with our team of talented engineers to design and build the next generation of our mobile applications. Android programming works closely with other app development and technical teams.";
  const [job, setJob] = useState("pythondev");
  const [jobresponsibility, setJobResponsibility] = useState(
    pythonDevResponsibility
  );

  useEffect(() => {
    if (job === "pythondev") {
      setJobResponsibility(pythonDevResponsibility);
    } else {
      setJobResponsibility(androidDevResponsibility);
    }
  });

  return (
    <div>
      <JobSelect setJob={setJob} selectedJob={job} />
      <JobResponsibility jobResponsibility={jobresponsibility} />
    </div>
  );
}

export default Jobs;
