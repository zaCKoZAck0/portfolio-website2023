"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { CgWorkAlt } from "react-icons/cg";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiApollographql } from "react-icons/si";
import { FaHashtag } from "react-icons/fa";

import { motion, animate, useMotionValue } from "framer-motion";
import { FaAws, FaGithub } from "react-icons/fa";
import { Octokit } from "octokit";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Details");
  const { theme } = useTheme();

  const [githubData, setGithubData] = useState({
    issueCount: 0,
    pullRequestCount: 0,
    codeReviewCount: 0,
    commitCount: 0,
    topRepos: new Array<{
      name: string;
      count: number;
      imageUrl?: string | undefined;
    }>(),
  });

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  useEffect(() => {
    octokit
      .paginate(octokit.rest.activity.listPublicEventsForUser, {
        username: "zaCKoZAck0",
        per_page: 100,
      })
      .then((res) => {
        const eventsData = res;
        let issueCount = 0;
        let pullRequestCount = 0;
        let codeReviewCount = 0;
        let commitCount = 0;

        // Loop through the events data
        eventsData.forEach((event) => {
          if (event.type === "IssuesEvent") {
            // Count closed issues
            if (event.payload.action === "closed") {
              issueCount++;
            }
          } else if (event.type === "PullRequestEvent") {
            // Count pull requests
            if (event.payload.action === "closed") {
              pullRequestCount++;
            }
          } else if (event.type === "PullRequestReviewCommentEvent") {
            // Count code reviews
            codeReviewCount++;
          } else if (event.type === "PushEvent") {
            // Count commits
            commitCount++;
          }
        });

        const repoData: Map<string, { count: number; imageUrl?: string }> =
          new Map();

        // Count repository occurrences and fetch their URLs if available
        eventsData.forEach((event) => {
          const repoName = event.repo?.name;
          const repoUrl = event.org?.avatar_url; // Assuming the repository object contains a URL field for image
          if (repoName) {
            if (!repoData.has(repoName)) {
              repoData.set(repoName, { count: 0 });
            }
            repoData.get(repoName)!.count += 1;
            if (repoUrl && !repoData.get(repoName)!.imageUrl) {
              repoData.get(repoName)!.imageUrl = repoUrl;
            }
          }
        });

        // Sort repositories by occurrences in descending order
        const sortedRepos: [string, { count: number; imageUrl?: string }][] =
          Array.from(repoData.entries()).sort(
            (a, b) => b[1].count - a[1].count
          );

        // Get the top repositories with their occurrence count and image URLs (e.g., top 5)
        const topRepositoriesWithImages: Array<{
          name: string;
          count: number;
          imageUrl?: string;
        }> = sortedRepos.slice(0, 4).map(([name, data]) => ({
          name,
          count: data.count,
          imageUrl: data.imageUrl,
        }));

        // Output the counts
        setGithubData((prev) => ({
          ...prev,
          topRepos: topRepositoriesWithImages,
          issueCount,
          pullRequestCount,
          codeReviewCount,
          commitCount,
        }));
      });
  }, [octokit]);

  return (
    <section
      id="details"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem] w-full"
    >
      <SectionHeading>Other Details</SectionHeading>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="mt-3 flex items-center gap-1 text-xl font-bold p-4 border bg-gradient-to-r from-purple-200/20 dark:from-purple-800/20 from-10% to-90% w-full border-purple-200 dark:border-purple-900 rounded-xl">
            <CgWorkAlt className="h-6 w-6" />
            Professional Experience
          </h3>
          <div className="w-full px-4">
            <h4>
              Intern - <b className="font-sans text-xl">Apisero, NTT Data</b>{" "}
              [Oct. 2021 - May. 2022]
            </h4>
            <h4>
              Software Trainee - <b className="font-sans text-xl">Volkswagen</b>{" "}
              [Sept. 2022 - Sept. 2023]
            </h4>
            <h4>
              Software Engineer -{" "}
              <b className="font-sans text-xl">Volkswagen</b> [Sept. 2023 -
              Present]
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="mt-3 flex items-center gap-1 text-xl font-bold p-4 border bg-gradient-to-r from-purple-200/20 dark:from-purple-800/20 from-10% to-90% w-full border-purple-200 dark:border-purple-900 rounded-xl">
            <LiaCertificateSolid className="h-6 w-6" />
            Certifications
          </h3>
          <div className="w-full px-4">
            <div className="flex items-center gap-2">
              <motion.img
                className="h-24 w-24"
                src="https://res.cloudinary.com/apollographql/image/upload/v1632844693/badge_sfsiin.svg"
              />
              <div>
                <h4 className="font-semibold text-lg">
                  Graph Developer - Associate
                </h4>
                <h4 className=" text-lg flex items-center gap-3">
                  <SiApollographql className="h-6 w-6" /> Apollo GraphQL
                </h4>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-2">
              <motion.img
                className="h-24 w-24"
                src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png"
              />
              <div className="flex flex-col items-end">
                <h4 className="font-semibold text-lg">
                  AWS Certified Solutions Architect - Associate
                </h4>
                <h4 className="text-lg flex items-center gap-3 text-right">
                  <FaAws className="h-6 w-6" /> Amazon Web Services
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="flex items-center gap-2 text-xl font-bold p-4 border bg-gradient-to-r from-purple-200/20 dark:from-purple-800/20 from-10% to-90% w-full border-purple-200 dark:border-purple-900 rounded-xl">
            <FaGithub className="h-6 w-6" />
            Open Source Contributions
          </h3>
          <div className="w-full px-4">
            <div className="flex text-right justify-between items-center gap-2">
              <div className="w-[70%] text-left">
                <div className="flex items-center flex-wrap gap-1.5">
                  {githubData.topRepos.map((repo, idx) => {
                    return (
                      <Link href={`http://github.com/${repo.name}`} key={idx}>
                        <div className="px-1 py-0.5 flex items-center gap-2 dark:bg-white/10 bg-black/5 rounded-md">
                          {repo.imageUrl && (
                            <Image
                              src={repo.imageUrl!}
                              alt="img"
                              height={20}
                              width={20}
                            />
                          )}
                          {repo.name}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-0.5 text-lg">
                <div>
                  <span className="font-semibold font-sans mr-2">
                    Pull Requests:{" "}
                  </span>
                  {`${githubData.pullRequestCount}`}
                </div>
                <div>
                  <span className="font-semibold font-sans mr-2">Issues: </span>
                  {`${githubData.issueCount}`}
                </div>
                <div>
                  <span className="font-semibold font-sans mr-2">
                    Commits:{" "}
                  </span>
                  {`${githubData.commitCount}`}
                </div>
                <div>
                  <span className="font-semibold font-sans mr-2">
                    Code Reviews:{" "}
                  </span>
                  {`${githubData.codeReviewCount}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
