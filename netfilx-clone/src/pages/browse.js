import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionMap } from "../utils";

export default function Browse({ user }) {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionMap({ series, films });

  return <BrowseContainer user={user} slides={slides} />;
}
