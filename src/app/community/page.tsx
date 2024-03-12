import { Metadata } from "next";

interface ICommunityPageProps {}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Community Support",
    openGraph: {},
  };
}

const CommunityPage: React.FunctionComponent<ICommunityPageProps> = (props) => {
  return (
    <div className="p-10 space-y-4">
      <div className="bg-white p-10 rounded">Community</div>
    </div>
  );
};

export default CommunityPage;
