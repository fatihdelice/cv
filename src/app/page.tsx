import Image from 'next/image';
import { WorldIcon, MailBoxIcon, PhoneIcon, LinkedInIcon, XIcon, GithubIcon, YoutubeIcon, PlayStoreIcon, InstagramIcon } from '@/lib/Icons';
import Link from 'next/link';
import data from '@/lib/data.json';
import { Data, WorkExperience, Education, Project } from '@/lib/types';

const homeData: Data = data;

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        {homeData.name && (
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{homeData.name}</h1>
              {homeData.title && (
                <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                  {homeData.title}
                </p>
              )}
              {homeData.location && (
                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                  <Link href={`${homeData.locationUrl ? homeData.locationUrl : `#`}`} className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline" target="_blank">
                    <WorldIcon />
                    {homeData.location}
                  </Link>
                </p>
              )}
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {homeData.socialMedia?.email && (
                  <Link
                    href={homeData.socialMedia.email}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <MailBoxIcon />
                  </Link>
                )}
                {homeData.socialMedia?.phone && (
                  <Link
                    href={homeData.socialMedia.phone}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <PhoneIcon />
                  </Link>
                )}
                {homeData.socialMedia?.github && (
                  <Link
                    href={homeData.socialMedia.github}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <GithubIcon />
                  </Link>
                )}
                {homeData.socialMedia?.linkedin && (
                  <Link
                    href={homeData.socialMedia.linkedin}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </Link>
                )}
                {homeData.socialMedia?.twitter && (
                  <Link
                    href={homeData.socialMedia.twitter}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <XIcon />
                  </Link>
                )}
                {homeData.socialMedia?.youtube && (
                  <Link
                    href={homeData.socialMedia.youtube}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <YoutubeIcon />
                  </Link>
                )}
                {homeData.socialMedia?.playStore && (
                  <Link
                    href={homeData.socialMedia.playStore}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <PlayStoreIcon />
                  </Link>
                )}
                {homeData.socialMedia?.instagram && (
                  <Link
                    href={homeData.socialMedia.instagram}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </Link>
                )}
              </div>
            </div>
            <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
              <Image src="https://avatars.githubusercontent.com/u/53579912?v=4" alt="avatar" width={112} height={112} className="aspect-square h-full w-full" />
            </span>
          </div>
        )}
        {homeData.about && (
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {homeData.about}
            </p>
          </section>
        )}
        {homeData.workExperience.length > 0 && (
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Work Experience</h2>
            {homeData.workExperience.map((experience: WorkExperience, index: number) => (
              <div key={index} className="rounded-lg bg-card text-card-foreground">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {experience.company && (
                        <Link href={"#"} className="hover:underline">
                          {experience.company}
                        </Link>
                      )}
                      {experience.location && (
                        <span className="inline-flex gap-x-1">
                          <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5">
                            {experience.location}
                          </div>
                        </span>
                      )}
                    </h3>
                    {experience.duration && (
                      <div className="text-sm tabular-nums text-gray-500">
                        {experience.duration}
                      </div>
                    )}
                  </div>
                  {experience.position && (
                    <h4 className="font-mono text-sm leading-none print:text-[12px]">
                      {experience.position}
                    </h4>
                  )}
                </div>
                {experience.description && (
                  <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs print:text-[10px]">
                    {experience.description}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
        {homeData.education.length > 0 && (
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Education</h2>
            {homeData.education.map((edu: Education, index: number) => (
              <div key={index} className="rounded-lg bg-card text-card-foreground">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    {edu.institution && (
                      <h3 className="font-semibold leading-none">{edu.institution}</h3>
                    )}
                    {edu.duration && (
                      <div className="text-sm tabular-nums text-gray-500">
                        {edu.duration}
                      </div>
                    )}
                  </div>
                </div>
                {edu.degree && (
                  <div className="text-pretty font-mono text-sm text-muted-foreground mt-2 print:text-[12px]">
                    {edu.degree}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
        {homeData.skills.length > 0 && (
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {homeData.skills.map((skill: string, index: number) => (
                <div key={index} className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60 print:text-[10px]">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}
        {homeData.projects.length > 0 && (
          <section className="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
              {homeData.projects.map((project: Project, index: number) => (
                <div key={index} className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
                  <div className="flex flex-col space-y-1.5">
                    <div className="space-y-1">
                      {project.name && (
                        <h3 className="font-semibold tracking-tight text-base">
                          <Link href={`${project.projectsUrl ? project.projectsUrl : "#"}`} className="inline-flex items-center gap-1 hover:underline" target="_blank">
                            {project.name}
                            <span className="size-1 rounded-full bg-green-500"></span>
                          </Link>
                        </h3>
                      )}
                      {project.description && (
                        <p className="text-muted-foreground font-mono text-xs print:text-[10px]">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
