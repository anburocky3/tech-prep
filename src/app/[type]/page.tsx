import * as React from "react";

interface IPathWisePageProps {}

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    status: true,
  },
  {
    id: 2,
    title: "Backend Developer",
    status: true,
  },
  {
    id: 3,
    title: "Mobile Developer",
    status: true,
  },
];

const PathWisePage: React.FunctionComponent<IPathWisePageProps> = (props) => {
  return (
    <div>
      <div className="bg-white p-5">
        <div>
          <label htmlFor="job">Choose a job!</label>
          <select name="job" id="">
            <option value="">--Job--</option>
            {jobData.map((job) => (
              <li key={job.id}>{job.title}</li>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PathWisePage;
