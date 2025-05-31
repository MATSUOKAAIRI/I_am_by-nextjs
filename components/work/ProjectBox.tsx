type ProjectProps = {
  title: string;
  description: string;
  link?: string;
};

import { forwardRef } from "react";

const ProjectBox = forwardRef<HTMLDivElement, ProjectProps>(
  ({ title, description, link }, ref) => {
    return (
      <div ref={ref} className="bg-white rounded-ss-3xl rounded-ee-3xl shadow-lg p-6 transform transition-transform duration-300 ease-in-out hover:shadow-2xl list-item hover:scale-105 hover:bg-gray-400 list-none">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-900 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            サイトはこちら！ ※URLがない場合もございます
          </a>
        )}
      </div>
    );
  }
);

ProjectBox.displayName = "ProjectBox";

export default ProjectBox;