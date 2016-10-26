import { ModelDrivenDemoPage } from './app.po';

describe('model-driven-demo App', function() {
  let page: ModelDrivenDemoPage;

  beforeEach(() => {
    page = new ModelDrivenDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
