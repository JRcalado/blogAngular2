import { BlogAngular2Page } from './app.po';

describe('blog-angular2 App', () => {
  let page: BlogAngular2Page;

  beforeEach(() => {
    page = new BlogAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
