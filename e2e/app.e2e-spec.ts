import { FipnPage } from './app.po';

describe('fipn App', function() {
  let page: FipnPage;

  beforeEach(() => {
    page = new FipnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
