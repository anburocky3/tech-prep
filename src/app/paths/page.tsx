import PathCardList, {
  IPathCardListProps,
} from "@/src/components/ui/path-card";
import { Metadata } from "next";
import * as React from "react";

interface IPathsPageProps {}

const pathsData: IPathCardListProps[] = [
  {
    id: 1,
    href: "jobwise",
    type: "JOBWISE",
    title: "Explore Jobwise interviews questions on the fly!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus",
    interview: "#",
    quiz: "#",
  },
  {
    id: 2,
    type: "TECHWISE",
    href: "techwise",
    title: "Explore TechWise interviews questions on the fly!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus",
    interview: "#",
    quiz: "#",
  },
  {
    id: 3,
    type: "TopicWise",
    href: "topicwise",
    title: "Explore TopicWise interviews questions on the fly!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus",
    interview: "#",
    quiz: "#",
  },
  {
    id: 4,
    type: "ORGANIZATION WISE",
    href: "organization-wise",
    title: "Explore Jobwise interviews questions on the fly!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus",
    interview: "#",
    quiz: "#",
  },
  {
    id: 5,
    type: "PROBLEM SOLVING",
    href: "problem-solving",
    title: "Explore Problem solving questions on the fly!",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus",
    interview: "#",
    quiz: "#",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Browse by Path",
    openGraph: {},
  };
}

const PathsPage: React.FunctionComponent<IPathsPageProps> = (props) => {
  return (
    <div className="p-10 space-y-4">
      {pathsData.map((path) => (
        <PathCardList
          key={path.id}
          href={path.href}
          type={path.type}
          title={path.title}
          desc={path.desc}
          interview={path.interview}
          quiz={path.quiz}
        />
      ))}
    </div>
  );
};

export default PathsPage;
