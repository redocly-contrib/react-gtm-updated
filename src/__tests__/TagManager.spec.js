import TagManager from '../TagManager'

describe('TagManager', () => {
  it('should render tagmanager', () => {
    TagManager.initialize({ gtmId: 'GTM-000000' })
    expect(window.dataLayer).toHaveLength(1)
  })

  it('should render datalayer', () => {
    const gtmArgs = {
      gtmId: 'GTM-000000',
      dataLayer: {
        userInfo: 'userInfo'
      }
    }
    TagManager.initialize(gtmArgs)
    expect(window.dataLayer).toHaveLength(1)
  })

  it("should render script and noscript props when provided", () => {
    TagManager.initialize({
      gtmId: "GTM-000000",
      scriptProps: { "data-foo": "bar", nonce: 'foo' },
      noscriptProps: { "data-foo": "baz" }
    });
    expect(window.dataLayer).toHaveLength(1);
    expect(
      window.document.querySelector('script[data-foo="bar"]')
    ).toBeDefined();
    expect(
      window.document.querySelector('noscript[data-foo="baz"]')
    ).toBeDefined();
    expect(
      window.document.querySelector('script[nonce="foo"]')
    ).toBeDefined();
  });
})