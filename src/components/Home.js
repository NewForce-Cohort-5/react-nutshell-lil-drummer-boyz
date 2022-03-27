import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Nutshell</h2>
        <small>B of the D to the Double G, with SP and GC, reppin on the LBD, our mascot is a PNG</small>

        <address>
            <div>How are you today?</div>
            <div>Check out your news, messages, and upcoming events.</div>
        </address>
        <PropsAndState yourName={"Brandon"} />
    </>
)
