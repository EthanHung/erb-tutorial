import Sum from './components/Sum';
import Header from './components/Header';
import { promises as fs } from 'fs';

export async function getServerSideProps() {
  // Fetch data from external API
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
  
  const file = await fs.readFile(process.cwd() + '/public/user-list.json', 'utf8');
  console.log('file', file)

  // Pass data to the page via props
  return { props: { apiData: file } }
}
 

export default function Test({ apiData }) {
    console.log('apiData', apiData)
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