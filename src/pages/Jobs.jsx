import JobCard from "../Components/JobCard";

export default function Jobs() {
  const jobs = [
    { id: 1, title: 'Security Director', company: 'Dauch Group', location: 'New York, USA', type: 'Full time', salary: '$40k-$42k' },
    { id: 2, title: 'Creative Manager', company: 'Acme Co', location: 'Boston, USA', type: 'Full time', salary: '$45k-$48k' },
    { id: 3, title: 'Finance Analyst', company: 'FinanceCorp', location: 'Florida, USA', type: 'Part time', salary: '$30k-$35k' },
  ];

  return (
    <div className="container">
      <div className="page-title"><h2>Jobs</h2></div>
      <div className="content-column">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
