import React from "react";
import { stripHttp } from "~/helpers/stripHttp";
import { SideProjects } from "~/model/Resume";
import { OutboundLink } from "../OutboundLink";
import { PrintSectionHeader } from "../SectionHeader";

type Props = {
  sideProjects: SideProjects;
};

type SideProjectItemProps = {
  name: string;
  link?: string;
  startDate: string;
  endDate: string;
  description: string;
  type: string;
};

const SideProjectItem: React.FC<SideProjectItemProps> = ({
  name,
  link,
  startDate,
  endDate,
  description,
  type,
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-row justify-between">
        <div>
          <p>{name}</p>
          <p className="text-xs">{type}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-row">
            <p className="text-sm">{startDate}</p>
            <p className="text-sm">&nbsp;-&nbsp;{endDate}</p>
          </div>
          {link && (
            <OutboundLink
              name={stripHttp(link)}
              href={link}
              className="text-sm"
            />
          )}
        </div>
      </div>
      <div className="p-2">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export const PrintSideProjectsSection: React.FC<Props> = ({ sideProjects }) => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <PrintSectionHeader>Side Projects</PrintSectionHeader>
      </div>
      <div>
        {sideProjects.map((item, index) => {
          return (
            <SideProjectItem
              key={index}
              name={item.name}
              link={item.link}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};
