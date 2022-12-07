import { StoryConst } from "../components/StoryConst";
import parse from "html-react-parser";
import { NextPage } from "next";

const Story: NextPage = () => {
	return <div>{parse(StoryConst)}</div>;
};

export default Story;
