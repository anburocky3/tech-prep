import PathCardList from "@/src/components/ui/path-card";
import { Metadata } from "next";

interface IAboutPageProps {}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About TechPrep",
    openGraph: {},
  };
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div className="p-10 space-y-4">
      <div className="bg-white p-10 rounded">About page here</div>
      <div className="bg-white p-10 rounded">
        <h4 className="font-semibold">Contributors</h4>
        <ul className="list-decimal list-inside text-sm text-gray-600 mt-2">
          <li>Anbuselvan Annamalai</li>
          <li>Your Name</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
