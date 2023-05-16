import { data } from '../mock/data';

import Header from '../components/Header';
import ListCard from '../components/ListCard';

export default function Home() {
  return (
    <div className="font-roboto">
      <Header />

      {Object.keys(data).map((id) => (
        <ListCard
          logo={data[id as keyof typeof data].logo}
          name={data[id as keyof typeof data].name}
          type={data[id as keyof typeof data].type}
          date={data[id as keyof typeof data].date}
          isDownload={data[id as keyof typeof data].download}
        />
      ))}
    </div>
  );
}
