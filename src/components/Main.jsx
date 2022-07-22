import Card from './Card';
import Footer from './Footer';

const Main = () => {
  return (
    <>
      <main className="coming-soon main">
        <h1>
          something awesome is <span>coming soon</span>
        </h1>
        <p>
          Your all-in-one affiliate marketing tracking software{' '}
          <span>track</span>, <span>automate</span> and <span>optimize</span>{' '}
          your campaigns.
        </p>
        <ul>
          <Card time={7} title={'Days'} />
          <Card time={24} title={'Hours'} />
          <Card time={54} title={'Minutes'} />
          <Card time={11} title={'Seconds'} />
        </ul>
        <form>
          <fieldset>
            <input type="text" placeholder="First Name.." />
            <input type="text" placeholder="Last Name.." />
          </fieldset>
          <fieldset>
            <input
              className="text-box"
              type="text"
              placeholder="Enter your email address..."
            />
            <button className="button">join our waiting list</button>
          </fieldset>
        </form>
      </main>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <section className="footer-wrapper">
        <div></div>
      </section>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Main;
