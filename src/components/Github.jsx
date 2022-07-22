import { useEffect, useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import { v4 as uuidv4 } from 'uuid';
import useFetch from '../hooks/useFetch';

const Github = () => {
  const [page, setPage] = useState(1);
  const { state: data, loading, error, fetchData } = useFetch(page);

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
  }, [page]);

  const handleScroll = () => {
    let userScrollHeight = window.scrollY + window.innerHeight;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      setPage(page + 1);
    }
  };

  if (error) {
    return (
      <section className="error">
        <h4>{error}</h4>
      </section>
    );
  }

  const convertNumber = (number) => {
    return Math.abs(number) > 999
      ? (Math.abs(number) / 1000).toFixed(1) + 'k'
      : number;
  };

  return (
    <>
      <section className="container">
        {data &&
          data.map((item) => (
            <div className="user" key={uuidv4()}>
              <div className="img_container">
                <img src={item.owner.avatar_url} alt="avatar" />
              </div>
              <div className="group">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="flex-container">
                  <div className="border">
                    Stars: {convertNumber(item.stargazers_count)}
                  </div>
                  <div className="border">
                    Issues: {convertNumber(item.open_issues_count)}
                  </div>
                  <p>
                    Submitted{' '}
                    {new Date(item.created_at).toLocaleString('en-us', {
                      day: 'numeric',
                    })}{' '}
                    days ago by {item.owner.login}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </section>
      <div className={data.length ? 'spinner-two' : 'spinner-one'}>
        {loading && <SpinnerCircularFixed color="#000000" />}
      </div>
    </>
  );
};

export default Github;
