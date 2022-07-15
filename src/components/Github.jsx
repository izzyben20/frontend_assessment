import { useEffect } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import useFetch from '../hooks/useFetch';

const Github = () => {
  const url =
    'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc';
  const { data, loading, error, fetchData } = useFetch(url);

  useEffect(() => {
    fetchData();
  }, [url]);

  if (loading) {
    return (
      <section className="spinner">
        <SpinnerCircularFixed color="#01bf71" />
      </section>
    );
  }

  if (data) {
    console.log(data.items);
  }

  if (error) {
    return (
      <section className="spinner">
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
    <section className="container">
      {data &&
        data.items.map((item) => (
          <div className="user" key={item.id}>
            <div className="img_container">
              <img src={item.owner.avatar_url} alt="avatar" />
            </div>
            <div className="group">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="flex-container">
                <div className="border">
                  Stars:{' '}
                  {convertNumber(item.stargazers_count)}
                </div>
                <div className="border">Issues: {convertNumber(item.open_issues_count)}</div>
                <p>
                  Submitted{' '}
                  {new Date(item.created_at).toLocaleString('en-us', {
                    // month: 'short',
                    day: '2-digit',
                  })}{' '}
                  days ago by {item.owner.login}
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Github;
