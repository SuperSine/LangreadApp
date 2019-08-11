import App, {Container} from 'next/app';
import Page from '../components/Page';

class LangreadApp extends App{
  render(){
    const {Component} = this.props;

    console.log(Component);
    return(
      <Page>
        <Component />
      </Page>
    )
  }
}

export default LangreadApp;