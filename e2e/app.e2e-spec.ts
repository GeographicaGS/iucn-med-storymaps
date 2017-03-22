import { IUCNMedStoryMapsPage } from './app.po';

describe('iucn-med-story-maps App', () => {
  let page: IUCNMedStoryMapsPage;

  beforeEach(() => {
    page = new IUCNMedStoryMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
