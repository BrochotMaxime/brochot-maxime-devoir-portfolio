"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import { AboutSkills } from "./AboutSkills";
import GitHubModal from "../GitHubModal/GitHubModal";

export default function HomeClient() {
    const [showModal, setShowModal] = useState(false);
    const [githubData, setGithubData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/github-john-doe")
        .then((res) => res.json())
        .then((data) => setGithubData(data))
        .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Hero onOpenModal={() => setShowModal(true)} />
            <AboutSkills />
            <GitHubModal
                show={showModal}
                onClose={() => setShowModal(false)}
                githubData={githubData}
            />
        </>
    );
}