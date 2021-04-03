import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export function LoadingScreen() {
    return(
        <div>
            <Segment>
                <Dimmer active inverted style={{ height: "70vh" }}>
                    <Loader size='medium'>Loading</Loader>
                </Dimmer>
            </Segment>
        </div>
        );
}
