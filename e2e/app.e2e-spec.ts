import { OnlineStoryPage } from './app.po';

describe('online-story App', function() {
  let page: OnlineStoryPage;

  beforeEach(() => {
    page = new OnlineStoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
