import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Header from '../components/Header';
import Background from '../components/Background';
import ProjectCard from '../components/ProjectCard';
import '../styles/components.css';
import '../styles/animations.css';
import '../styles/utilities.css';

const projects = [
  {
    name: "yt-yapper",
    description: "A feature-rich Discord Music Bot built with modern technologies. Brings high-quality music playback and advanced features to Discord servers.",
    tech: ["Rust", "Discord API", "Music Streaming"],
    github: "https://github.com/GamyingOnline/yt-yapper",
  },
  {
    name: "fm-oxide",
    description: "A Rust crate providing seamless integration with the Last.fm API Suite. Built for developers to easily incorporate Last.fm functionality into their Rust applications.",
    tech: ["Rust", "Last.fm API", "SDK"],
    github: "https://github.com/GamyingOnline/fm-oxide",
  }
];

const Projects = () => {
  return (
    <>
      <Header />
      <Background />
      <main className="min-h-screen w-full text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-24 pb-16">
            <div className="animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-8">
                Our Projects
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-16">
                Explore our open-source innovations. We&apos;re building tools and libraries 
                that push the boundaries of what&apos;s possible with modern technology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                  <div key={index} className={`animate-fadeIn delay-${index * 200}`}>
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>

              <div className="mt-20 text-center glass-card p-16 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">Want to Contribute?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  We welcome contributions from developers who share our passion for
                  innovation and open source. Check out our GitHub repositories and
                  join our community.
                </p>
                <a
                  href="https://github.com/GamyingOnline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  <FaGithub className="text-[#00FFFF]" size={22} />
                  <span>View Our GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
