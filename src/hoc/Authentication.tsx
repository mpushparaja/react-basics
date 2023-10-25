const isAuthentication = false;
export default function Authentication(Component: any) {
  return function () {
    if (!isAuthentication) {
      return <div>User is not Authenticated</div>;
    }
    return <Component />;
  };
}
