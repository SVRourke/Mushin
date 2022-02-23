import TimeControl from "./TimeControl";

const Display = ({ number, cb, subTitle }) => {
    const fmtD = (number) => (number < 10 ? `0${number}` : number);
    return (
        <div class="display">
        <div className={"number"}>{fmtD(number)}</div>
        <TimeControl stateRef={number} cb={cb} />
        </div>
    );
};
export default Display