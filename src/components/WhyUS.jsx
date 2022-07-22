import Dots from '../components/Dots';
import SubTitle from './SubTitle';

const WhyUS = () => {
  return (
    <>
    <section className="why-us-container">
      <div className="left-contents">
        <div>
          <SubTitle title='why us?' number='01'/>
          <p className='line-height'>
            We pride ourselves In our ability to innovate and create World class
            tools that provide reliable and efficient touchpoints between
            advertisers and affiliates.
          </p>
        </div>
        <Dots />
      </div>
      <div className="right-contents glass">
        <SubTitle title='growing with you' number='02'/>
        <p className='line-height'>
          Leveraging the best technology, we have developed an on-all-on affiliate
          marketing tracking software, a genius tool to help you track,
          automate and optimize your influencer campaigns, all from one
          dashboard. <br /> <br />
          Our team of experts are constantly brainstorming, testing ond
          developing new solutions with only one thing in mind - your business
          growth. Your success is our success and by giving you the tools you
          need to scale, we grow us well.
        </p>
      </div>
      <div className='gradient-box'></div>
    </section>
    
    </>
  );
};

export default WhyUS;
