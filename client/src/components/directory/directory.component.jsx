import React from "react";

import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import "./directory.styles.scss";
import MenuItem from "../menu-items/menu-item.component";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
