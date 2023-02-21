import { SignIn, useAuth } from "@clerk/nextjs";

const TradeDashboard = () => {
  // if not authed, redirect to login page
  // if authed, show the trade dashboard
  const { userId } = useAuth();

  if (!userId) {
    // redirect to login page
    return <SignIn />;
  }
  return (
    <div>
      <h1>Trade Dashboard</h1>
    </div>
  );
};

export default TradeDashboard;
