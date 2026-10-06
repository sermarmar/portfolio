import type React from "react";
import { Marquee } from "../components/Marquee";
import { About } from "../template/About";
import { Contact } from "../template/Contact";
import { Contents } from "../template/Contents";
import { Education } from "../template/Education";
import { Experiencies } from "../template/Experiencies";
import { Hero } from "../template/Hero";
import { Projects } from "../template/Projects";
import { Stack } from "../template/Stack";
import { Welcome } from "../template/Welcome";

export const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Welcome />
            <Contents />
            <About />
            <Experiencies />
            <Education />
            <Stack />
            <Projects />
            <Marquee />
            <Contact />
        </main>
    );
};
