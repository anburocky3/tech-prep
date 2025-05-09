"use client";

import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/navigation";

export interface IPathCardListProps {
  id?: number;
  href: string;
  type: string;
  title: string;
  desc: string;
  interview: string;
  quiz: string;
}

const PathCardList: React.FunctionComponent<IPathCardListProps> = ({
  href,
  type,
  title,
  desc,
  interview,
  quiz,
}) => {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on the Practice button
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    router.push(href);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white p-10 rounded shadow flex items-center space-x-10 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="w-36 h-36 rounded bg-rose-300 flex items-center justify-center font-semibold text-xs">
        {type}
      </div>
      <div className="space-y-3">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{desc}</p>
        <div className="space-x-4">
          {/* <Link
            href={interview}
            className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold uppercase"
          >
            Interview Questions
          </Link>*/}
          <Link
            href={quiz}
            className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white text-xs font-semibold uppercase"
          >
            Practice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PathCardList;
