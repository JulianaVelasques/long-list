import Header from '../components/Header';
import ListCard from '../components/ListCard';
import { useEffect, useState } from 'react';
import { db, getImageUrl } from '../service/firebaseConfig';

export default function Home() {
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(() => {
    const getCompaniesData = async () => {
      const collectionRef = db.collection('companies');
      const querySnapshot = await collectionRef.get();
      const companiesArray = querySnapshot.docs.map((doc) => doc.data());

      const dataArray: any[] = await Promise.all(
        companiesArray.map(async (company) => {
          const imageUrl = await getImageUrl(company.img.path);

          return {
            ...company,
            logo: imageUrl,
          };
        })
      );

      setCompanies(dataArray);
    };

    getCompaniesData();
  }, []);

  console.log('COMPANIES --->', companies);

  return (
    <div className="font-roboto">
      <Header />

      {companies.map((company: any) => (
        <>
          <ListCard
            name={company.name}
            logo={company.logo}
            type={company.type}
            isDownload={company.download}
            date={company.date.toDate()}
          />
        </>
      ))}

      {/* {Object.keys(data).map((id) => (
        <ListCard
          logo={data[id as keyof typeof data].logo}
          name={data[id as keyof typeof data].name}
          type={data[id as keyof typeof data].type}
          date={data[id as keyof typeof data].date}
          isDownload={data[id as keyof typeof data].download}
        />
      ))} */}
    </div>
  );
}
