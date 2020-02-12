import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// USE DESCRIBE TO GROUOP TOGETHER SIMILAR TESTS
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // USE "it" TO TEST A SINGLE ATTRIBUTE OF A TARGET
  it('renders something', () => {

    // USE 'expect' TO MAKE AN "assertion" about a target
    expect(component).to.exist;

  });

});