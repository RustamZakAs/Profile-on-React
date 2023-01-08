export default function PersonalInfo(props) {
  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <span className="idd1">Oxc4c16a645_b21a</span>
        <span>
          <i className="fa fa-copy"></i>
        </span>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-3">
        <span className="number">{props.followers}</span>
        <span className="follow">Followers</span>
      </div>
    </>
  );
}
