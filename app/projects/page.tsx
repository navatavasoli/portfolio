import type { Metadata } from "next";
import { MoveRight, Code2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects | Nava Tavasoli",
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "[Project name]",
    description:
      "[One or two sentences describing what this project does and the problem it solves.]",
    tags: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "[Project name]",
    description:
      "[One or two sentences describing what this project does and the problem it solves.]",
    tags: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "[Project name]",
    description:
      "[One or two sentences describing what this project does and the problem it solves.]",
    tags: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto flex flex-col gap-10 px-4 py-20 lg:py-28">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl tracking-tighter font-regular">
          Projects
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          [A short intro sentence about the kind of work shown below.]
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="flex gap-2 bg-transparent border-t-0 pt-0">
              {project.liveUrl && (
                <Button asChild size="sm" variant="outline" className="gap-1.5">
                  <a href={project.liveUrl}>
                    Live <MoveRight className="w-3.5 h-3.5" />
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button asChild size="sm" variant="ghost" className="gap-1.5">
                  <a href={project.repoUrl}>
                    Code <Code2 className="w-3.5 h-3.5" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
