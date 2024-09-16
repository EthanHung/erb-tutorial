import SumValue, {sum} from './sum';

export default function AboutUs() {
  const title = <h1>About us</h1>;
  const currentDate = new Date();
  // const sum = (a, b) => a + b;
    return (
      <div>
        {title}
        { `${currentDate.toDateString()}`}
        <div>{ sum(1, 2) }</div>
      </div>
    );
  }