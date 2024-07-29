import { CheckCircle } from "lucide-react";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";

export default function HomePage() {
  const examples = [
    {
      title: "Changing states",
      href: "/state",
    },
    {
      title: "Rendering",
      href: "/render",
    },
    {
      title: "Effects",
      href: "/effect",
    },
    {
      title: "Task",
      href: "/task",
    },
    {
      title: "Micro-task",
      href: "/micro-task",
    },
    {
      title: "Idle callback",
      href: "/idle-callback",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">React INP Workshop</h1>

        <p className="text-muted-foreground">Explore the examples</p>
      </div>

      <ul className="space-y-1.5">
        {examples.map(({ title, href }, index) => (
          <li
            key={index}
            className="flex gap-2 items-center hover:underline hover:underline-offset-4"
          >
            <Icon>
              <CheckCircle />
            </Icon>

            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
