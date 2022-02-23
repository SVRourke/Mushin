const TimeControl = ({ stateRef, cb }) => {
    const clickHandler = (e) => {
      cb(stateRef + parseInt(e.target.dataset.value));
    };
  
    return (
      <div onClick={(e) => clickHandler(e)} className="control-buttons">
        <div data-value="1">+</div>
        <div data-value="-1">-</div>
      </div>
    );
  };
export default TimeControl