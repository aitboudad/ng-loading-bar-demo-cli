import { UiRouterAotDemoPage } from './app.po';

describe('ng-loading-bar-demo App', function() {
  let page: UiRouterAotDemoPage;

  beforeEach(() => {
    page = new UiRouterAotDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
