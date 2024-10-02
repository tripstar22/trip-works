const useRouter = jest.fn();
const useRouterMock = () => ({
  push: jest.fn(),
  prefetch: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(),
  isFallback: false,
  pathname: '',
  route: '',
  asPath: '',
  query: {},
  basePath: '',
  isLocaleDomain: false,
  isReady: true,
});

useRouter.mockImplementation(useRouterMock);

module.exports = {
  useRouter,
};
