import React from "react";
import JumboLayout from "@jumbo/components/JumboLayout";
import useJumboLayout from "@jumbo/hooks/useJumboLayout";
import layoutConfig from "./layoutConfig";

const HomePage = ({children}) => {
    const {setJumboLayoutOptions} = useJumboLayout();

    React.useEffect(() => {
        setJumboLayoutOptions(layoutConfig);
    });

    return (
        <JumboLayout>
            {children}
        </JumboLayout>
    );
};

export default HomePage;
