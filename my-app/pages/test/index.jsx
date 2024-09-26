import Sum from './components/Sum';
import Header from './components/Header';

export default function Test() {
    return (
        <div>
            <Header data={'this is data'} headerData={{name: 'headerData'}} />
            <div>
                Hello this is test
            </div>
            <Sum />
        </div>
    );
}