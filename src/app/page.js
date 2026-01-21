"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import { AboutSkills } from "@/components/Home/AboutSkills";
import GitHubModal from "@/components/GitHubModal/GitHubModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <Hero onOpenModal={() => setShowModal(true)} />

      <AboutSkills />

      <GitHubModal
        show={showModal}
        onClose={() => setShowModal(false)}
        githubData={githubData}
      />
    </main>
  );
}