//import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SnoopForm, SnoopPage, SnoopElement } from '../src';
import '../dist/styles.css';

const App = () => {
  return (
    <div style={{ padding: '30px' }}>
      <SnoopForm domain="app.snoopforms.com" protocol="https" formId="abcd">
        <SnoopPage name="basicInfo" time={0}>
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
            type="cards"
            name="programming-lanuguages"
            label="What programming languages do you love?"
            options={['C++', 'Javascript', 'Scala', 'Assembler']}
            cols={4}
            help="Choose wisely"
          />
          <SnoopElement
            type="radio"
            name="foods"
            label="What's your favorite food?"
            options={['Pizza', 'Pasta', 'Sushi', 'Salad']}
            help="Choose wisely"
          />
          <SnoopElement name="submit" type="submit" label="Submit" />
        </SnoopPage>
        <SnoopPage name="advancedInfo" time={0}>
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
        <SnoopPage name="thankyou" time={0}>
          <p>Thanks a lot for your time and insights 🙏</p>
        </SnoopPage>
      </SnoopForm>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
