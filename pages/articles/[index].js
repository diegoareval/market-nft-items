import {HeroBlog, KeyPoint, Lecture} from "@components/blog";
import {Modal} from "@components/common";
import {lectures} from "@utils/data";
import {BaseLayout} from "@components/layout";

export default function Blog() {
    return (
        <>
            <div className={"py-4"}>
                <HeroBlog/>
            </div>
            <KeyPoint/>
            <Lecture lectures={lectures}/>
            <Modal/>
        </>
    )
}

Blog.Layout = BaseLayout;
