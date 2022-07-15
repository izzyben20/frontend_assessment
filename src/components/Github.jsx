import { useEffect } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import useFetch from '../hooks/useFetch';

const Github = () => {
  const url =
    'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc';
  const { data, loading, error, fetchData } = useFetch(url);
  console.log(data, loading, error);

  useEffect(() => {
    fetchData();
  }, [url]);

  if (loading) {
    return (
      <section className='spinner'>
        <SpinnerCircularFixed color="#01bf71" />
      </section>
    );
  }

  if (error) {
    return (
      <section className='spinner'>
        <h4>{error}</h4>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="user">
        <div className="img_container">
          <img src={data?.items[0].owner.avatar_url} alt="avatar" />
        </div>
        <div className="group">
          <h2>{data?.items[0].name}</h2>
          <p>{data?.items[0].description}</p>
          <div className="flex-container">
            <div className="border">
              Stars: {data?.items[0].stargazers_count}
            </div>
            <div className="border">
              Issues: {data?.items[0].open_issues_count}
            </div>
            <p>
              Submitted{' '}
              {new Date(data?.items[0].created_at).toLocaleString('en-us', {
                // month: 'short',
                day: '2-digit',
              })}{' '}
              days ago by {data?.items[0].owner.login}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
