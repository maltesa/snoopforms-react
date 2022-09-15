//import 'react-app-polyfill/ie11';
import * as React from 'react';
import { SnoopForm, SnoopPage, SnoopElement } from './index';
// import '../dist/styles.css';

export const TessampleForm = () => {
  return (
    <div style={{ padding: '30px' }}>
      <SnoopForm domain="app.snoopforms.com" protocol="http" formId="abcd" initialTime={7200} 
  countDown={true}>
        <SnoopPage name="basicInfo">
          <SnoopElement
            type="text"
            name="name"
            label="Your name"
            help="Please insert your full name"
            required
          />
          <SnoopElement
            type="textarea"
            name="about"
            label="About you"
            help="Tell us more about you"
            required
          />
          <SnoopElement
            type="checkbox"
            name="programming-lanuguages"
            label="What programming languages do you love?"
            options={['C++', 'Javascript', 'Scala', 'Assembler']}
            help="Choose wisely"
          />
          <SnoopElement
            type="radio"
            name="programming-lanuguages"
            label="What's your favorite food?"
            options={['Pizza', 'Pasta', 'Sushi', 'Salad']}
            help="Choose wisely"
          />
          <SnoopElement name="submit" type="submit" label="Submit" />
        </SnoopPage>
        <SnoopPage name="advancedInfo">
          <SnoopElement
            type="checkbox"
            name="programming-lanuguages"
            label="What programming languages do you love?"
            options={['C++', 'Javascript', 'Scala', 'Assembler']}
          />
          <SnoopElement
            type="radio"
            name="favourite-food"
            label="What's your favorite food?"
            options={['Pizza', 'Pasta', 'Sushi']}
          />
          <SnoopElement name="submit" type="submit" label="Submit" />
        </SnoopPage>
        <SnoopPage name="thankyou" thankyou>
          <p>Thanks a lot for your time and insights 🙏</p>
        </SnoopPage>
      </SnoopForm>
    </div>
  );
};

export default TessampleForm; 