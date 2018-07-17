var DoctorList = (props) => {
  var DoctorListEntries = props.doctors.map((doctor) => {
    return <DoctorListEntry doctor={doctor} />;
  });
  return(
    <div>{DoctorListEntries}</div>
  );
};

export default DoctorList;
